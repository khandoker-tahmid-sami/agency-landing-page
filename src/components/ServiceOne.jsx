import React from 'react'
import SubService from './SubService'

const ServiceOne = () => {
  const SubData = [
    {
      title: "Work with tools you already use",
      description: "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
      bullets: ['Continuous integration and deployment', 'Development workflow','Knowledge management',],
      lastDescription: "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
      imgSrc: "/public/features/feature-1.png",
      imgFirst: false,
    },
    {
      title: "We invest in the world’s potential",
      description: "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
      bullets: ['Dynamic reports and dashboards','Templates for everyone','Development workflow','Limitless business automation','Knowledge management',],
      lastDescription: "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
      imgSrc: "/public/features/feature-2.png",
      imgFirst: true,
    },
  ]
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {SubData.map((data, index) =>{
            return (
              <SubService key={index} data={data}/>
            )
          })}
        </div>
      </section>
  )
}

export default ServiceOne
