
const LoadingIcon = ({className , ...props}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className +" " +"animate-spin w-5 h-5 fill-none stroke-1 stroke-light-text dark:stroke-dark-text"} {...props} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    )
}

export default LoadingIcon