import React from 'react'
import '@/styles/pages/EventTheme.css'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '@/Aseets/Assets'

const EventTheme = () => {
  return (
    <>
      <div>
        <div className="event-header">
          <h1>Events &amp; Promotions</h1>
        </div>
        <div className="event-theme-1-sec">
          <div className="event-listing-box">
            <div className="event-listing-col">
              <div className="event-listing-image">
                <Link href="">
                  <Image src={assets.placeholderImg} alt="" />
                </Link>
              </div>
              <div className="event-content-box">
                <h6 className="event-title">Event or Promotion Title</h6>
                <h6 className="event-date">MAR 11-13</h6>
              </div>
            </div>
            <div className="event-listing-col">
              <div className="event-listing-image">
                <Link href="">
                  <Image src={assets.placeholderImg} alt="" />
                </Link>
              </div>
              <div className="event-content-box">
                <h6 className="event-title">Event or Promotion Title</h6>
                <h6 className="event-date">MAR 11-13</h6>
              </div>
            </div>
            <div className="event-listing-col">
              <div className="event-listing-image">
                <Link href="">
                  <Image src={assets.placeholderImg} alt="" />
                </Link>
              </div>
              <div className="event-content-box">
                <h6 className="event-title">Event or Promotion Title</h6>
                <h6 className="event-date">MAR 11-13</h6>
              </div>
            </div>
            <div className="event-listing-col">
              <div className="event-listing-image">
                <Link href="">
                  <Image src={assets.placeholderImg} alt="" />
                </Link>
              </div>
              <div className="event-content-box">
                <h6 className="event-title">Event or Promotion Title</h6>
                <h6 className="event-date">MAR 11-13</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default EventTheme