import { Link } from "react-router"
import LoadingIcon from "./svg/LoadingIcon"
/**
 * 
 * @param {Component} children
 * @param {string} to link to a page
 * @param {string} variant text, fill, outline
 * @param {string} color primary, secondary, danger
 * @param {string} size sm, md, lg
 * @param {boolean} disables sets the button to disabled state 
 * @param {boolean} loading sets the button to loading state
 * @param {Component} startIcon
 * @param {Component} endIcon
 *  
 */
const Button = ({ children, className, to = "", variant = "outline", size = "sm", color = "primary", disabled = false, loading = false, startIcon, endIcon, onClick, ...props }) => {
    const variants = {
        text: {
            primary: "text-light-primary-dark dark:text-dark-primary hover:text-light-primary  dark:hover:bg-dark-primary-light/10",
            accent: "hover:bg-light-light active:bg-light-light dark:active:bg-dark-light dark:hover:bg-dark-light",
            link:"text-light-text-muted p-0! mx-1! dark:text-dark-text-muted hover:text-light-text-dark dark:hover:text-dark-text-dark underline underline-offset-2" ,
            disabled: "text-light-text-muted dark:text-dark-text-muted hover:cursor-default hover:bg-transparent"
        },
        fill: {
            primary: "hover:bg-light-primary-dark bg-light-primary active:bg-light-primary-dark dark:hover:bg-dark-primary-dark dark:bg-dark-primary dark:active:bg-dark-primary",
            accent: "bg-light-light dark:bg-dark hover:bg-light-light dark:hover:bg-dark-light",
            disabled: "text-light-text-muted dark:text-dark-text-muted hover:cursor-default bg-light dark:bg-dark-light/90"
        },
        outline: {
            primary: "outline-1 lg:outline-2 outline-light-primary-dark hover:bg-light-primary/25 active:bg-light-primary/20 hover:outline-light-primary-light active:outline-light-primary-light dark:outline-dark-primary-dark dark:hover:bg-dark-primary/25 dark:active:bg-dark-primary/20 dark:hover:outline-dark-primary-light dark:active:outline-dark-primary-light",
            accent: "outline-1 lg:outline-2 outline-light-text hover:outline-light-text/90 active:outline-light-text hover:bg-light-light active:bg-light-light dark:outline-dark-light dark:hover:bg-dark/75 dark:active:bg-dark/75 dark:hover:outline-dark-light dark:active:outline-dark-light dark:hover:text-dark-text/95 dark:active:text-dark-text/95",
            disabled: "outline-1 lg:outline-2 text-light-text-muted dark:text-dark-text-muted hover:cursor-default outline-light-text-muted dark:outline-dark-text-muted"
        },
    }
    const sizes = {
        sm: "p-2",
        md: "p-4",
        lg: "p-5"
    }
    const finalStyle =
        `${disabled || loading ? variants[variant].disabled : "hover:cursor-pointer " + variants[variant][color]} ${sizes[size]}
      ${(startIcon || endIcon) && children ? "flex w-fit *:mx-0.5" : ""} ${loading && !(startIcon || endIcon) ? "text-transparent!" : ""} relative font-medium transition-colors text-xs sm:text-sm lg:text-base rounded-sm content-center`
    if (to)
        return <Link to={to} className={finalStyle + " " + (className || "")} onClick={(e) => { if (!(disabled || loading) && typeof onClick === 'function') onClick(e) }} {...props}>
            {loading && startIcon ? <LoadingIcon /> : startIcon}
            <span>{children}</span>
            {loading && endIcon ? <LoadingIcon /> : endIcon}
            {loading && !(startIcon || endIcon) ? <LoadingIcon className="absolute top-1/2 left-1/2 transition -translate-1/2" /> : ""}
        </Link>
    else
        return <button className={finalStyle + " " + (className || "")} onClick={(e) => { if (!(disabled || loading) && typeof onClick === 'function') onClick(e) }} {...props}>
            {loading && startIcon ? <LoadingIcon /> : startIcon}
            <span>{children}</span>
            {loading && endIcon ? <LoadingIcon /> : endIcon}
            {loading && !(startIcon || endIcon) ? <LoadingIcon className="absolute top-1/2 left-1/2 transition -translate-1/2" /> : ""}
        </button>

}

export default Button