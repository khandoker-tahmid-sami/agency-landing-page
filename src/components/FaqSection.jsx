import React from 'react'
import FaqItem from './FaqItem';

const FaqSection = ({faq}) => {
  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
      <h2 class="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
        Frequently asked questions
      </h2>
      <div class="max-w-screen-md mx-auto">
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
        >
            {faq.map((faq,index) =>{
                return (
                    <FaqItem
                    key={index}
                    id={index + 1}
                    question={faq.question}
                    content={faq.content}
                    expanded={index === 0}
                />
                )
                
            })}
        </div>
      </div>
    </div>
  </section>
  )
}

export default FaqSection
