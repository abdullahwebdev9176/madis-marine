import React from 'react'
import '@/styles/pages/CrewTheme1.css'
import Image from 'next/image'
import { assets } from '@/Aseets/Assets'

const CrewTheme1 = () => {
  return (
    <>
      <div>
        <div className="centeral-text text-center mb-3">
          <h1 className="crew-title-heading">Meet Our Crew</h1>
          <p className="my-4 px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="mt-5">
            <a href="javascript:void(0)" className="black-btn">CONTACT US</a>
          </div>
        </div>
        <div className="crew-theme-1">
          <div className="staff-cards-wrapper">
            <div className="staff-card">
              <div className="staff-image">
                <Image src={assets.placeholderImg} alt="" />
              </div>
              <div className="staff-content">
                <div className="staff-name">Name Lastname</div>
                <div className="staff-title">Position / Title</div>
                <a href="tel:6315748881" className="staff-phone">631.574.8881</a>
              </div>
            </div>
            <div className="staff-card">
              <div className="staff-image">
                <Image src={assets.placeholderImg} alt="" />
              </div>
              <div className="staff-content">
                <div className="staff-name">Name Lastname</div>
                <div className="staff-title">Position / Title</div>
                <a href="tel:6315748881" className="staff-phone">631.574.8881</a>
              </div>
            </div>
            <div className="staff-card">
              <div className="staff-image">
                <Image src={assets.placeholderImg} alt="" />
              </div>
              <div className="staff-content">
                <div className="staff-name">Name Lastname</div>
                <div className="staff-title">Position / Title</div>
                <a href="tel:6315748881" className="staff-phone">631.574.8881</a>
              </div>
            </div>
            <div className="staff-card">
              <div className="staff-image">
                <Image src={assets.placeholderImg} alt="" />
              </div>
              <div className="staff-content">
                <div className="staff-name">Name Lastname</div>
                <div className="staff-title">Position / Title</div>
                <a href="tel:6315748881" className="staff-phone">631.574.8881</a>
              </div>
            </div>
            <div className="staff-card">
              <div className="staff-image">
                <Image src={assets.placeholderImg} alt="" />
              </div>
              <div className="staff-content">
                <div className="staff-name">Name Lastname</div>
                <div className="staff-title">Position / Title</div>
                <a href="tel:6315748881" className="staff-phone">631.574.8881</a>
              </div>
            </div>
            <div className="staff-card">
              <div className="staff-image">
                <Image src={assets.placeholderImg} alt="" />
              </div>
              <div className="staff-content">
                <div className="staff-name">Name Lastname</div>
                <div className="staff-title">Position / Title</div>
                <a href="tel:6315748881" className="staff-phone">631.574.8881</a>
              </div>
            </div>
            <div className="staff-card">
              <div className="staff-image">
                <Image src={assets.placeholderImg} alt="" />
              </div>
              <div className="staff-content">
                <div className="staff-name">Name Lastname</div>
                <div className="staff-title">Position / Title</div>
                <a href="tel:6315748881" className="staff-phone">631.574.8881</a>
              </div>
            </div>
            <div className="staff-card">
              <div className="staff-image">
                <Image src={assets.placeholderImg} alt="" />
              </div>
              <div className="staff-content">
                <div className="staff-name">Name Lastname</div>
                <div className="staff-title">Position / Title</div>
                <a href="tel:6315748881" className="staff-phone">631.574.8881</a>
              </div>
            </div>
            <div className="staff-card">
              <div className="staff-image">
                <Image src={assets.placeholderImg} alt="" />
              </div>
              <div className="staff-content">
                <div className="staff-name">Name Lastname</div>
                <div className="staff-title">Position / Title</div>
                <a href="tel:6315748881" className="staff-phone">631.574.8881</a>
              </div>
            </div>
            <div className="staff-card">
              <div className="staff-image">
                <Image src={assets.placeholderImg} alt="" />
              </div>
              <div className="staff-content">
                <div className="staff-name">Name Lastname</div>
                <div className="staff-title">Position / Title</div>
                <a href="tel:6315748881" className="staff-phone">631.574.8881</a>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 text-center">
          <a href="javascript:void(0)" className="black-btn">CONTACT US</a>
        </div>
      </div>

    </>
  )
}

export default CrewTheme1