import React from 'react'
import SvgComponent from "./SvgComponent";
const FaqItem = ({id, question, content, expanded = false}) => {
  return (
    <>
    <h3 id={`accordion-flush-heading-${id}`}>
            <button
              type="button"
              class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              data-accordion-target={`#accordion-flush-body-${id}`}
              aria-expanded="true"
              aria-controls={`accordion-flush-body-${id}`}
            >
              <span>{question}</span>
              <SvgComponent
              path={"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}
              className={"w-6 h-6 rotate-180 shrink-0"}
              viewBox={"0 0 20 20"}/>
            </button>
          </h3>
          <div
            id={`accordion-flush-body-${id}`}
            class={expanded ? "" : "hidden"}
            aria-labelledby={`accordion-flush-heading-${id}`}
          >
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              {content}
            </div>
          </div>
    </>
    
  )
}

export default FaqItem



