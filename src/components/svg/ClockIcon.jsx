import React from 'react'

const ClockIcon = ({muted =false}) => {
  return (
    <svg className={"w-5 h-5  fill-none stroke-1 md:stroke-2  "+" "+(muted?"stroke-light-text-muted dark:stroke-dark-text-muted":" stroke-light-text-dark dark:stroke-dark-text-dark")} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  strokeLinecap="round" strokeLinejoin="round"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
  )
}

export default ClockIcon