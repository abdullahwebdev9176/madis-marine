import React from 'react'
import './Layout.css'

const Header = () => {
  return (
    <>
      <div className="header-box">
        <div className="desktop-header">
          <div className="header-container">
            <div className="desktop-header-box">
              <div className="logo-box">
                <div className="header-logo">
                  <a href="/"><img src="https://cdn.mdsbrand.com/madis/assets/images/MADIS+MARINE.png" alt="MADIS MARINE" /></a>
                </div>
              </div>
              <div className="centaral-nav-box">
                <div className="centaral-nav">
                  <ul>
                    <li className="toggle-mega-menu" data-title="inventory"><a href="javascript:void(0)" className="centaral-nav-link">Inventory</a></li>
                    <li><a id="header-suzuki-repower" href="/service" className="centaral-nav-link">Service</a></li>
                    <li className="toggle-dropdown">
                      <a id="header-parts" href="javascript:void(0)" className="centaral-nav-link">Resources</a>
                    </li>
                    <li className="toggle-dropdown">
                      <a id="header-parts" href="javascript:void(0)" className="centaral-nav-link">Company</a>
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