import React from 'react'

const NextIcon = ({rotate}) => {
    return (
        <svg className={'w-5 h-5 md:w-6 md:h-6 fill-none stroke-1 md:stroke-2 stroke-inherit'+" "+rotate} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
        </svg>
    )
}

export default NextIcon