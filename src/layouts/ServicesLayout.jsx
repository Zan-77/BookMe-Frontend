import React, { useState } from 'react'
import { Outlet } from 'react-router'
import SearchInput from '../components/Inputs/SearchInput'

export const ServicesLayout = () => {
  const [searchValue, setSearchValue] = useState("")
  const [selectedService, setSelectedService] = useState("")

    return (
        <div className='max-h-dvh pt-8'>
            <SearchInput
                hideButton={true}
                className="w-3/4 h-12 mx-auto mb-8"
                setSearchValue={setSearchValue}
                searchValue={searchValue}
            />
            <Outlet context={{searchContext:{searchValue ,setSearchValue},service:{selectedService,setSelectedService}}}/>
        </div>
    )
}


export default ServicesLayout