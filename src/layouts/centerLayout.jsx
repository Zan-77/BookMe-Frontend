import React, { use } from 'react'
import { Outlet } from 'react-router'
import useTheme from '../hooks/useTheme';

const centerLayout = () => {


    return (
        <div className="w-full h-dvh *:absolute *:top-1/2 *:left-1/2 *:-translate-1/2">
            <Outlet/>
        </div>

    )
}

export default centerLayout