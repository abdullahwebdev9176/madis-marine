import React from 'react'
import './Layout.css'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className="header-box">
        <div className="desktop-header">
          <div className="header-container">
            <div className="desktop-header-box">
              <div className="logo-box">
                <div className="header-logo">
                  <Link href="/"><img src="https://cdn.mdsbrand.com/madis/assets/images/MADIS+MARINE.png" alt="MADIS MARINE" /></Link>
                </div>
              </div>
              <div className="centaral-nav-box">
                <div className="centaral-nav">
                  <ul>
                    <li><Link href="#" className="centaral-nav-link">Inventory</Link></li>
                    <li><Link href="#" className="centaral-nav-link">Service</Link></li>
                    <li>
                      <Link href="#" className="centaral-nav-link">Resources</Link>
                    </li>
                    <li>
                      <Link href="#" className="centaral-nav-link">Company</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right-nav-box">
                <div className="right-nav">
                  <div>
                    <span>Call or Text</span><br />
                    <span><strong>(123) 456-7890</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header