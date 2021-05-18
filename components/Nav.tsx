import React from 'react'
import request from '../utils/request'

const Nav = () => {
  return (
    <nav>
      <div className="flex px-10 space-x-10 overflow-x-scroll text-2xl sm:px-20 whitespace-nowrap sm:space-x-20">
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2
            key={key}
            className="transition duration-100 transform cursor-pointer last:pr-24 hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  )
}

export default Nav
