import { assets } from '@/Aseets/Assets'
import Image from 'next/image'
import React from 'react'

const ListingCards = () => {
  return (
    <>

      <div className='boats-card-box'>
        <div className="boats-card">
          <div className='boat-img'>
            <Image src={assets.placeholderImg} alt="" />
          </div>

          <div className="boatContent">
            <div className="boatTitle">
              <h2>2019 Sunseeker Motoryacht</h2>
            </div>
            <div className="date_title">
              <ul className="pricing-list-box">
                <li className="pricing-list" data-uw-rm-sr="">$4,095,000</li>
              </ul>
            </div>
            <ul className="specList">
              <li>Pre-Owned</li>
              <li>86 ft</li>
              <li>For Sale</li>
            </ul>

          </div>
        </div>

        <div className="boats-card">
          <div className='boat-img'>
            <Image src={assets.placeholderImg} alt="" />
          </div>

          <div className="boatContent">
            <div className="boatTitle">
              <h2>2019 Sunseeker Motoryacht</h2>
            </div>
            <div className="date_title">
              <ul className="pricing-list-box">
                <li className="pricing-list" data-uw-rm-sr="">$4,095,000</li>
              </ul>
            </div>
            <ul className="specList">
              <li>Pre-Owned</li>
              <li>86 ft</li>
              <li>For Sale</li>
            </ul>

          </div>
        </div>

        <div className="boats-card">
          <div className='boat-img'>
            <Image src={assets.placeholderImg} alt="" />
          </div>

          <div className="boatContent">
            <div className="boatTitle">
              <h2>2019 Sunseeker Motoryacht</h2>
            </div>
            <div className="date_title">
              <ul className="pricing-list-box">
                <li className="pricing-list" data-uw-rm-sr="">$4,095,000</li>
              </ul>
            </div>
            <ul className="specList">
              <li>Pre-Owned</li>
              <li>86 ft</li>
              <li>For Sale</li>
            </ul>

          </div>
        </div>

        <div className="boats-card">
          <div className='boat-img'>
            <Image src={assets.placeholderImg} alt="" />
          </div>

          <div className="boatContent">
            <div className="boatTitle">
              <h2>2019 Sunseeker Motoryacht</h2>
            </div>
            <div className="date_title">
              <ul className="pricing-list-box">
                <li className="pricing-list" data-uw-rm-sr="">$4,095,000</li>
              </ul>
            </div>
            <ul className="specList">
              <li>Pre-Owned</li>
              <li>86 ft</li>
              <li>For Sale</li>
            </ul>

          </div>
        </div>
      </div>

    </>
  )
}

export default ListingCards