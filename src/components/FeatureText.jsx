import React from 'react'
import SvgComponent from './SvgComponent'

const FeatureText = ({badge, title, description}) => {
  return (
    <div className="col-span-2 mb-8">
            <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
              {badge}
            </p>
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              {title}
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              {description}
            </p>
            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                >
                  Explore Legality Guide
                  <SvgComponent className={"w-5 h-5 ml-1"} path="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"/>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                >
                  Visit the Trust Center
                  <SvgComponent className={"w-5 h-5 ml-1"} path="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"/>
                </a>
              </div>
            </div>
          </div>
  )
}

export default FeatureText
