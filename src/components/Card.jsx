
const Card = ({children ,id="", className ,onClick,...props}) => {
  return (
    <div id={id} onClick={(e)=>{typeof onClick==="function"? onClick(e):null}} className={`flex flex-col bg-light dark:bg-dark border-2 border-light-border dark:border-dark-light ${className}`}>
        {children}
    </div>
  )
}

export default Card