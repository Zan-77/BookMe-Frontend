
const Badge = ({children ,size ="sm",counter = 0,color = "primary", ...props}) => {
    const colors={
        primary:"bg-light-primary-dark dark:bg-dark-primary-dark",
        accent:"bg-light-light dark:bg-dark-light/60"
    }
    const sizes ={
        sm:" w-4 h-4 text-xs",
        md:" w-6 h-6",
        lg:" w-8 h-8 text-xl"
    }
    return (
        <div className="relative w-fit" {...props}>
            <div className={counter ?"absolute z-10 -top-1 -right-1 rounded-full flex" +" "+colors[color]+" "+sizes[size]:"hidden"}>
                <span className={(counter <= 9?"":counter <= 99 ?"pr-0.5":"") +" "+"text-center align-top"+" "+sizes[size]} >{counter}</span>
            </div>
            {children}
        </div>
    )
}

export default Badge;