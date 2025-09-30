import React from 'react'
import './Layout.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer>
		
				<div className="newsletter">
					<h2>ENTER OUR WORLD</h2>
					<p>Our Newsletter informs of promotions, events, MADIS MARINE news, and more.</p>
					<div className="newsletter-form gtm_form">
					<input type="email" id="subscriber-email" placeholder="Enter your email address" required />
					
					</div>
					<div className="social-icons">
					<a href="javascript:void(0)"><i className="fab fa-instagram"></i></a>
					<a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a>
					<a href="javascript:void(0)"><i className="fab fa-youtube"></i></a>
					<a href="javascript:void(0)"><i className="fab fa-twitter"></i></a>
					</div>
				</div>

				<div className="footer-box">
					<div className="footer-grid">
					<div className="footer-col-1">
				<div className="footer-column">
					<h4>SALES</h4>
					<ul>
					<li className="arrow-link"><a href="/boats-for-sale">All Boats<span>↓</span></a></li>
					<li className="arrow-link"><a href="/bew-boats-for-sale">New Boats <span>↓</span></a></li>
					<li className="arrow-link"><a href="/used-pre-owned-boats-for-sale">Pre-Owned <span>↓</span></a></li>
					<li className="arrow-link"><a href="/service">Service Your Boat <span>↓</span></a></li>
					<li><a href="/financing">Financing</a></li>
					<li><a href="/value-trade">Trade / Sell Your Boat</a></li>
					</ul>
				</div>
				<div className="footer-column">
					<h4>BRANDS</h4>
					<ul>
					<li className="arrow-link"><a href="javascript:void(0)">Centurion <span>↓</span></a></li>
					<li className="arrow-link"><a href="/boats-for-sale?brand=MasterCraft">MasterCraft <span>↓</span></a></li>
					<li className="arrow-link"><a href="javascript:void(0)">Supreme <span>↓</span></a></li>
					<li className="arrow-link"><a href="javascript:void(0)">Bennington <span>↓</span></a></li>
					<li className="arrow-link"><a href="javascript:void(0)">Scout <span>↓</span></a></li>
					</ul>
				</div>
				<div className="footer-column">
					<h4>COMPANY</h4>
					<ul className="company-links">
					<li><a href="/proshop">Pro Shop</a></li>
					<li><a href="/events">Events</a></li>
					<li><a href="/about">About</a></li>
					<li><a href="/blog">Articles</a></li>
					<li><a href="/contact#cali_contact">Contact</a></li>
					</ul>
				</div>
				</div>

					<div className="footer-mobile-box">

						<div className="footer-accordion">
							<div className="footer-accordion-header">
								<span>Sales</span>
								<span className="arrow-icon">↓</span>
							</div>

							<div className="footer-accordion-content">
								<ul>
									<li><a href="/boats-for-sale">All Boats</a></li>
									<li><a href="/new-boats-for-sale">New Boats</a></li>
									<li><a href="/used-pre-owned-boats-for-sale">Pre-Owned</a></li>
									<li><a href="/service">Service Your Boat</a></li>
									<li><a href="/financing">Financing</a></li>
									<li><a href="/value-trade">Trade / Sell Your Boat</a></li>
								</ul>
							</div>

						</div>

						<div className="footer-accordion">
							<div className="footer-accordion-header">
								<span>Brands</span>
								<span className="arrow-icon">↓</span>
							</div>

							<div className="footer-accordion-content">
								<ul>
									<li>
										<div className="menu-logo-box">
							
										<div className="menu-logo">
											<a href="javascript:void(0)">
                        <Image src="https://cdn.mdsbrand.com/madis/assets/images/logos/mobile-menu-logo-1.png" width={100} height={100} alt="" />
											</a>
										</div>
							
										<div className="menu-logo">
											<a href="javascript:void(0)">
												<Image src="https://cdn.mdsbrand.com/madis/assets/images/logos/mobile-menu-logo-2.png" width={100} height={100} alt="" />
											</a>
										</div>
							
										<div className="menu-logo">
											<a href="javascript:void(0)">
												<Image src="https://cdn.mdsbrand.com/madis/assets/images/logos/mobile-menu-logo-3.png" width={100} height={100} alt="" />
											</a>
										</div>
							
										<div className="menu-logo">
											<a href="javascript:void(0)">
												<Image src="https://cdn.mdsbrand.com/madis/assets/images/logos/mobile-menu-logo-4.png" width={100} height={100} alt="" />
											</a>
										</div>
							
										<div className="menu-logo">
											<a href="javascript:void(0)">
												<Image src="https://cdn.mdsbrand.com/madis/assets/images/logos/mobile-menu-logo-5.png" width={100} height={100} alt="" />
											</a>
										</div>
							
										<div className="menu-logo">
											<a href="/boats-for-sale?brand=Mastercraft">
												<Image src="https://cdn.mdsbrand.com/madis/assets/images/logos/mobile-menu-logo-6.png" width={100} height={100} alt="" />
											</a>
										</div>
							
										<div className="menu-logo">
											<a href="/boats-for-sale?brand=Regal">
												<Image src="https://cdn.mdsbrand.com/madis/assets/images/logos/mobile-menu-logo-7.png" width={100} height={100} alt="" />
											</a>
										</div>
							
										<div className="menu-logo">
											<a href="javascript:void(0)">
                        <Image src="https://cdn.mdsbrand.com/madis/assets/images/logos/mobile-menu-logo-8.png" width={100} height={100} alt="" />
											</a>
										</div>
							
									</div>
									</li>


								</ul>
							</div>

						</div>

						<div className="footer-accordion">
							<div className="footer-accordion-header">
								<span>Company</span>
								<span className="arrow-icon">↓</span>
							</div>

							<div className="footer-accordion-content">
								<ul>
									<li><a href="/about">About us</a></li>
									<li><a href="/careers">Crew/Careers</a></li>
									<li><a href="/contact#cali_contact">Contact Us</a></li>
								</ul>
							</div>

						</div>
					</div>


					<div className="footer-col-2 company-info">
					<div className="footer-logo">
						<Image src="https://cdn.mdsbrand.com/madis/assets/images/footer-logo.png" width={100} height={100} alt="MADIS MARINE" />
					</div>
					<div className="locations">
						<p className="madis-locations-heading">LOCATIONS</p>
						<ul>
						<li>Sarasota</li>
						<li>Tampa Bay</li>
						<li>Ft. Myers Beach</li>
						<li>Naples Marina</li>
						</ul>
						<p className="madis-locations-heading">OR</p>
						<p className="address">123456 Streetname<br />Cityname, ST 12345</p>
						<p className="phone">123.456.7890</p>
					</div>
					</div>

				</div>
				</div>

				<div className="footer-bottom">
					<div className="footer-container">
						<ul>
							<li className="bottom-links"><a href="javascript:void(0)"></a>Copyright 2025 </li>
							<li className="bottom-links"><a id="footer-mds-brand-button" href="https://mdsbrand.com/" target="_blank">Powered by MDS Brand&nbsp;</a></li>
							<li className="bottom-links"><a id="footer-privacy-policy" href="/sitemap.xml">Sitemap&nbsp;</a></li>
						</ul>
					</div>

					<p className="recaptcha-disclaimer">
						This site is protected by reCAPTCHA and the Google
						<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and
						<a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
						apply.
					</p>

				</div>
			</footer>
    </>
  )
}

export default Footer