
'use client'

import React, { useState } from 'react'
import '@/styles/pages/FaqTheme1.css'
import { faqData } from '@/Data/faqData'

const FaqTheme1 = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>

      <section className="staf-sec">
        <div className="central-heading pt-5">
          <h1 className="text-center faq-title-heading mt-4">FAQ</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 m-auto">
              <div className="custom-accordion my-3 my-md-5 pb-md-5">
                {faqData.map((item, index) => (
                  <div className="accordion-card" key={index}>
                    <div
                      className="custom-accordion-header"
                      onClick={() => toggleAccordion(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <h1>{item.question}</h1>
                      <span
                        className={`fa ${activeIndex === index ? "fa-minus" : "fa-plus"}`}
                      />
                    </div>
                    {activeIndex === index && (
                      <div className="custom-accordion-body">
                        <div
                          className="my-3"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                      </div>
                    )}

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default FaqTheme1