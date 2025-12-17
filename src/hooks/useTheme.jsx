import { useState, useEffect } from "react"

const useTheme = () => {
    const [appTheme, setAppTheme] = useState(() => {
        try {
            return (typeof window !== "undefined" && localStorage.getItem("theme")) || "dark"
        } catch (e) {
            return "dark"
        }
    })

    useEffect(() => {
        try {
            const html = document.documentElement;
            html.className = appTheme;
            localStorage.setItem("theme", appTheme);
        } catch (error) {
            console.log(error);

        }
    }, [appTheme])
    return [appTheme, setAppTheme]
}

export default useTheme;