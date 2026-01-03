import { useState } from 'react';
import useDebounce from '../../hooks/useDebounce'
import Button from '../Button'
import SearchIcon from '../svg/SearchIcon'



const SearchInput = ({ className, searchValue = "",placeholder="Search . . .", setSearchValue, onButtonClick,onChange, OnKeyDown, onClick, onFocus, onSearch, hideButton = false }) => {
  const debounce = useDebounce(500);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (typeof onChange === "function") {
      onChange(e);
    }
    if (typeof onSearch === "function") {
      debounce(() => onSearch(value));
    }
  }



  return (
    <div className={`relative flex items-center  ${className}`}>
      <input
        autoComplete='off'
        name="search"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={(e) => { if (typeof OnKeyDown === "function" && e.key === "Enter") OnKeyDown(e); }}
        onFocus={(e) => { if (typeof onFocus === "function") onFocus(e) }}
        onClick={(e) => { typeof onClick === "function" ? onClick(e) : null }}
        type="text"
        className={`h-full px-2 bg-light dark:bg-dark outline-none w-full ${hideButton ? "border-2 rounded-md" : "border-t-2 border-l-2 border-b-2 rounded-l-md"} border-light-border dark:border-dark-light`}
        placeholder={placeholder}
      />
      {hideButton ?
        ""
        :
        <Button
          onClick={(e) => { typeof onButtonClick === "function" ? onButtonClick(e) : null }}
          variant="fill"
          className={`h-full  rounded-s-none `}
          startIcon={<SearchIcon />}
        ></Button>
      }
    </div>
  )
}

export default SearchInput