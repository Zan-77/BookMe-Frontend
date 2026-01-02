import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { v4 as uuidv4 } from 'uuid'

const Search = () => {
  const searchValue = useSelector(state => state.Search.searchValue);
  const searchResult = useSelector(state => state.Search.searchResult);
  const navigate = useNavigate();

  return (
    <div className="pt-20 px-8 min-h-[70vh]">
      <h2 className="text-2xl font-bold mb-4">Search Results for: <span className="text-accent">{searchValue}</span></h2>
      <div>
        {searchResult && searchResult.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {searchResult.map((item) => (
              <div
                key={uuidv4()}
                onClick={() => navigate(`/services/${item.slug}/${item.title}`)}
                className="bg-light dark:bg-dark-light border border-light-border dark:border-dark-light rounded-md p-3 hover:shadow-lg transition cursor-pointer flex"
              >
                {item.media && Array.isArray(item.media) &&
                  item.media.map((imgs) =>
                    imgs.order === 1 ? (
                      <img
                        key={uuidv4()}
                        src={imgs.file}
                        alt={item.title}
                        className="w-28 h-20 mr-3 object-cover rounded"
                      />
                    ) : null
                  )}
                <div>
                  <div className="font-semibold text-lg mb-2">{item.title}</div>
                  {/* Optionally display extra fields here */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 text-center text-gray-400">
            No Search Results Found.
          </div>
        )}
      </div>
    </div>
  );
}

export default Search