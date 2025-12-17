
const AlertIcon = ({className,...props}) => {
  return (
    <svg className={"w-5 h-5 md:w-6 md:h-6 fill-none stroke-1 md:stroke-2 stroke-light-text-dark dark:stroke-dark-text-dark "+" " + className } {...props} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" x2="12" y1="8" y2="12"/>
        <line x1="12" x2="12.01" y1="16" y2="16"/>
        </svg> 
         )
}

export default AlertIcon