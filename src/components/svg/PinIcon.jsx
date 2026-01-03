import React from 'react'

const PinIcon = ({ratio}) => {
  return (
    <svg  className={"w-5 h-5 md:w-6 md:h-6 fill-none stroke-2 stroke-light-text-muted dark:stroke-dark-text-muted" + " "+ ratio} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
    <circle cx="12" cy="10" r="3"/></svg>
  )
}

export default PinIcon