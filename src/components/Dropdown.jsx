import Button from "./Button"
const Dropdown = ({ children, button, dropItems = [], drop = false,onMouseLeave, ...props }) => {


    return (
        <div className='relative'>
            {button}
            <div className={`${drop?"visible":"invisible"} absolute right-1/2 translate-x-1/2 mt-1 bg-light dark:bg-dark flex flex-col min-w-fit max-w-52  border-2 rounded-md *:rounded-none first:rounded-t-sm last:rounded-b-sm border-light-light dark:border-dark-light`}
            >
                {
                    dropItems
                }
            </div>
        </div>
    )
}

export default Dropdown