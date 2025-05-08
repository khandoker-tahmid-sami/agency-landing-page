import React from 'react'
import SvgComponent from './SvgComponent'

const SocialIconLink = ({path}) => {
  return (
    <li>
        <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            <SvgComponent
              viewBox={"0 0 24 24"}
              path={path}
              className={"w-5 h-5"}
            />
          </a>
        </li>
  )
}

export default SocialIconLink
