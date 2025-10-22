import React from 'react'
import '@/styles/pages/EventDetailsTheme1.css'
import Image from 'next/image'
import { assets } from '@/Aseets/Assets'
import Link from 'next/link'

const EventDetailsTheme1 = () => {
  return (
    <>
      <section className="event-details-theme-1">
        <div className="event-details-header">
          <Image src={assets.placeholderImg} alt="" />
        </div>
        <div className="event-details-container">
          <div className="event-details-intro-box">
            <div className="event-details-col">
              <h1>Bangor Boat Show</h1>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.&nbsp;</p>
              <div className="intro-btn-box mt-4">
                <Link href="" className="event-btn">RSVP / CONTACT / REGISTER</Link>
                <Link href="" className="event-btn">EVENT DETAILS</Link>
              </div>
            </div>
            <div className="event-details-col">
              <div className="event-details-time-box">
                <div className="time-box">
                  <p>When</p>
                  <h4>MARCH <br /> 28-30</h4>
                  <ul>
                    <li>FRI 2pm-8PM</li>
                    <li>SAT 10AM-7PM</li>
                    <li>SUN 10AM-4PM</li>
                  </ul>
                </div>
                <div className="time-box">
                  <p>Where</p>
                  <h4>The Cross Insurance Center</h4>
                  <p>515 Main St., <br /> Bangor, ME 04401</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event-galley-box">
          <div className="event-galley-col-1">
            <div className="event-galley-col-1-box">
              <h3>EVENT GALLERY</h3>
            </div>
          </div>
          {/* <div className="event-galley-col-2">
            <div className="owl-carousel event-gallery-carousel owl-theme">
              <div className="item">
                <Image src={assets.placeholderImg} alt="" />
              </div>
            </div>
          </div> */}
        </div>
        <div className="main-display-box">
          <div className="event-details-container">
            <div>
              <h3 className="event-theme-title">Brands ON display</h3>
            </div>
            <div className="display-box">
              <div className="brand-item">
                <Image src={assets.placeholderImg} alt="" />
              </div>
              <div className="brand-item">
                <Image src={assets.placeholderImg} alt="" />
              </div>
              <div className="brand-item">
                <Image src={assets.placeholderImg} alt="" />
              </div>
              <div className="brand-item">
                <Image src={assets.placeholderImg} alt="" />
              </div>
              <div className="brand-item">
                <Image src={assets.placeholderImg} alt="" />
              </div>
            </div>
            <div className="owl-carousel display-brand-logo owl-theme">
              <div className="item">
                <Image src={assets.placeholderImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="inventory-box-header">
          <h3 className="event-theme-title">INVENTORY AT THIS EVENT</h3>
        </div>
        <hr />
        <div className="event-form">
          <h3>RSVP / Contact Us / Register</h3>
          <div className="event-form-box">
            <input type="text" className="new-theme-form-input" placeholder="First Name" />
            <input type="text" className="new-theme-form-input" placeholder="Last Name" />
            <input type="email" className="new-theme-form-input" placeholder="Email" />
            <input type="tel" className="new-theme-form-input" />
            <div className="mt-4 text-center">
              <button type="button" className="black-btn">SUBMIT</button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default EventDetailsTheme1