import { useEffect, useState } from "react"
import { setAuthToken } from "../api/config";
import {useDispatch } from 'react-redux'
import { setIsLogged } from "../features/user/userSlice";


const useAuthUser = () => {
    const dispatch = useDispatch();
    const [access, setAccess] = useState(localStorage.getItem("access") || null);
    const [refresh, setRefresh] = useState(localStorage.getItem("refresh") || null);

    useEffect(() => {
        if (access) {
            localStorage.setItem("access", access);
            setAuthToken(access);
            dispatch(setIsLogged(true));
        }
        if (refresh)
            localStorage.setItem("refresh", refresh);
    }, [access, refresh])
    return [setAccess, setRefresh];
}

export default useAuthUser