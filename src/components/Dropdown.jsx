import Button from "./Button"
const Dropdown = ({ children,className, button, dropItems = [], drop = false,onMouseLeave, ...props }) => {


    return (
        <div className='relative'>
            {button}
            <div onMouseLeave ={e=>onMouseLeave(e)} className={`${drop?"visible":"invisible"} absolute right-0 mt-1 bg-light dark:bg-dark flex flex-col min-w-full   border-2 rounded-md *:rounded-none first:rounded-t-sm last:rounded-b-sm border-light-light dark:border-dark-light ${className}`}
            >
                {
                    dropItems
                }
            </div>
        </div>
    )
}

export default Dropdown