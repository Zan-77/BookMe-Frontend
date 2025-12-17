import { useEffect, useState } from "react"
import languages from "../internationalization/languages"



const useLanguage = (page="none") => {
    const [appLanguage, setAppLanguage] = useState(() => {
        try {
            return (typeof window !== "undefined" && localStorage.getItem("language")) || "English"
        } catch (error) {

        }
    })
    useEffect(() => {
        try {
            const html = document.documentElement;
            html.lang = languages[appLanguage].lang;
            html.dir = languages[appLanguage].dir;
            localStorage.setItem("language", appLanguage);
        } catch (error) {
            console.log(error);

        }
    }, [appLanguage])

    return [languages[appLanguage].texts[page], setAppLanguage ,appLanguage ,Object.keys(languages)];
}


export default useLanguage