import React from 'react'

const CalenderIcon = ({muted=fa}) => {
  return (
   <svg className={"w-5 h-5 fill-none stroke-1 md:stroke-2"+" "+(muted?"stroke-light-text-muted dark:stroke-dark-text-muted":" stroke-light-text-dark dark:stroke-dark-text-dark")} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>
   </svg>
  )
}

export default CalenderIcon