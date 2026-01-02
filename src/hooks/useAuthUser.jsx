import { useEffect, useState, useRef } from "react";
import { setAuthToken } from "../api/config";
import { useDispatch } from "react-redux";
import { setIsLogged } from "../features/user/userSlice";
import { postAuthUserRefresh } from "../api/user/auth";

// This hook handles reading/writing tokens from local storage
// and sets the Authorization header
const useAuthUser = () => {
    const dispatch = useDispatch();

    // Load tokens from localStorage at first mount
    const [access, setAccess] = useState(() => {
        const token = localStorage.getItem("access");
        if (token) setAuthToken(token);
        return token || null;
    });
    const [refresh, setRefresh] = useState(() => localStorage.getItem("refresh") || null);

    // refs to avoid unnecessary rerenders
    const accessRef = useRef(access);
    const refreshRef = useRef(refresh);
    const intervalRef = useRef(null);

    // keep refs in sync with state
    useEffect(() => {
        accessRef.current = access;
    }, [access]);
    useEffect(() => {
        refreshRef.current = refresh;
    }, [refresh]);

    // On initial load, set auth header and Redux state based on localStorage
    useEffect(() => {
        const storedAccess = localStorage.getItem("access");
        if (storedAccess) {
            setAuthToken(storedAccess);
            dispatch(setIsLogged(true));
        } else {
            setAuthToken(null);
            dispatch(setIsLogged(false));
        }

        // Clear any old interval
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        // Set up interval for token refresh if refresh token exists
        if (localStorage.getItem("refresh")) {
            intervalRef.current = setInterval(async () => {
                try {
                    const newAccessToken = await postAuthUserRefresh(localStorage.getItem("refresh"));
                    if (newAccessToken) {
                        // Update localStorage, refs, and authorization header
                        localStorage.setItem("access", newAccessToken);
                        accessRef.current = newAccessToken;
                        setAuthToken(newAccessToken);
                        // Keep the user as logged in on successful refresh
                        dispatch(setIsLogged(true));
                    } else {
                        // Refresh failed, log out user
                        localStorage.removeItem("access");
                        localStorage.removeItem("refresh");
                        accessRef.current = null;
                        setAuthToken(null);
                        dispatch(setIsLogged(false));
                    }
                } catch (error) {
                    // Refresh token expired or invalid, log out user
                    console.error("Token refresh failed:", error);
                    localStorage.removeItem("access");
                    localStorage.removeItem("refresh");
                    accessRef.current = null;
                    setAuthToken(null);
                    dispatch(setIsLogged(false));
                }
            }, 80000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
        // eslint-disable-next-line
    }, []); // Only runs once on mount

    // Update localStorage, Authorization header, redux state when access changes (explicitly)
    useEffect(() => {
        if (access !== null) {
            localStorage.setItem("access", access);
            setAuthToken(access);
            dispatch(setIsLogged(true));
        } else {
            localStorage.removeItem("access");
            setAuthToken(null);
            dispatch(setIsLogged(false));
        }
    }, [access, dispatch]);

    // Update localStorage when refresh changes
    useEffect(() => {
        if (refresh !== null) {
            localStorage.setItem("refresh", refresh);
        } else {
            localStorage.removeItem("refresh");
        }
    }, [refresh]);

    return {
        access: accessRef.current,
        setAccess,
        refresh: refreshRef.current,
        setRefresh,
    };
};

export default useAuthUser;