
const Text = ({ children, className, muted = false, ...props }) => {
    return (
        <span className={`${className} ${muted ? "text-light-text-muted dark:text-dark-text-muted": ""} font-medium text-xs sm:text-sm lg:text-base cursor-default`}>{children}</span>
    )
}

export default Text