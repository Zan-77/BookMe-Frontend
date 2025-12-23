import React, { use } from 'react'
import { Outlet } from 'react-router'
import useTheme from '../hooks/useTheme';

const centerLayout = () => {


    return (
        <div className="w-full h-dvh *:md:absolute *:md:top-1/2 *:md:left-1/2 *:md:-translate-1/2">
            <Outlet/>
        </div>

    )
}

export default centerLayout