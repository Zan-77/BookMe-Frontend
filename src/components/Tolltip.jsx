/**
 * 
 * @param {Component} children
 * @param {string} position top, bottom, left, right
 * @param {string} tip tooltip text 
 *  
 */

const Tolltip = ({ children,className, position = "right", tip = "", ...props }) => {
    const positions = {
        top: "top-full left-1/2 -translate-x-1/2 mb-4",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-4",
        left: "right-full top-1/2 -translate-y-1/2 mr-4",
        right: "left-full top-1/2 -translate-y-1/2 ml-4"
    }
    return (
        <div className='relative bg-inherit group/tooltip' {...props}>
            <span className={positions[position] + " "
                + "absolute z-10 max-sm:hidden invisible group-hover/tooltip:visible rounded-xs max-w-96 w-1/2 p-2 text-light-text-muted dark:text-dark-text-dark/80 bg-light-light text-sm dark:bg-dark outline-1 lg:outline-2 outline-light dark:outline-dark-light"
            }>{tip}
            </span>
            {children}
        </div>
    )
}

export default Tolltip  