
'use client'

import React, { useState } from 'react'
import '@/styles/pages/FaqTheme2.css'
import { faqData } from '@/Data/faqData'

const FaqTheme2 = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {

    setActiveIndex(activeIndex === index ? null : index)

  }

  return (
    <>
      <section className="staf-sec">
        <div className="central-heading pt-5">
          <h1 className="text-center faq-title-heading mt-4">FAQ</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-xl-7 m-auto">
              <div>
                <div className="custom-accordion my-3 my-md-5 pb-md-5">
                  {faqData.map((item, index) => {
                    return (
                      <div className="accordion-card" key={index}>
                        <div className="custom-accordion-header" onClick={() => toggleAccordion(index)}>
                          <h1 role="heading">{item.question}</h1>
                          <span className={`fa ${activeIndex === index ? "fa-minus" : "fa-plus"}`} />
                        </div>
                        {activeIndex === index && (
                          <div className="custom-accordion-body content-show px-2 px-sm-4">
                            <div
                              className="my-3"
                              dangerouslySetInnerHTML={{ __html: item.answer }}
                            />
                          </div>
                        )}

                      </div>
                    )
                  })}


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default FaqTheme2