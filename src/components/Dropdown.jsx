import Button from "./Button"
const Dropdown = ({ children,className, dropItems = [], position="right-0",  drop = false,onMouseLeave, ...props }) => {


    return (
            <div onMouseLeave ={e=>typeof onMouseLeave ==="function"?onMouseLeave(e):null}
             className={`${drop?"visible":"invisible"} absolute z-30 ${position}  mt-1 bg-light dark:bg-dark flex flex-col border-2  border-light-border dark:border-dark-light ${className}`}
            >
                {
                    dropItems
                }
            </div>
    )
}

export default Dropdown