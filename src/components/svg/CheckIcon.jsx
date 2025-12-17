import React from 'react'

const CheckIcon = ({ clasName, ...props }) => {
  return (
   <svg className={"w-5 h-5 md:w-6 md:h-6 fill-none stroke-2 stroke-light-text-dark dark:stroke-dark-text-dark" + " " + clasName} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" >
    <path d="M20 6 9 17l-5-5"/>
    </svg>
  )
}

export default CheckIcon