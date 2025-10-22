import React from 'react'
import '@/styles/pages/BlogTheme2.css'
const BlogTheme2 = () => {
  return (
    <>
      <div>
        <div className="blog-header">
          <h1>NEWS &amp; Articles</h1>
          <div className="blog-filter-list">
            <ul className="desktop-blog-filter-list">
              <li>
                <a href="javascript:void(0)" className="blog-filter-item active">All</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="blog-filter-item">News</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="blog-filter-item">Product</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="blog-filter-item">Service</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="blog-filter-item">Company</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="blog-filter-item">Misc</a>
              </li>
            </ul>
            <select name id className="form-control mobile-blog-filter-dropdown">
              <option value="All Topics">All Topics</option>
              <option value="News">News</option>
              <option value="Product">Product</option>
              <option value="Service">Service</option>
              <option value="Misc">Misc</option>
            </select>
          </div>
        </div>
        <div className="blog-theme-2-sec">
          <div className="blog-listing-box">
            <div className="blog-listing-col">
              <div className="blog-listing-image">
                <a href="javascript:void(0)">
                  <img src="./assets/images/dummy.png" alt />
                </a>
              </div>
              <div className="blog-content-box">
                <p className="blog-category">News</p>
                <h6 className="blog-title">Article Title Lore Ipsum</h6>
              </div>
            </div>
            <div className="blog-listing-col">
              <div className="blog-listing-image">
                <a href="javascript:void(0)">
                  <img src="./assets/images/dummy.png" alt />
                </a>
              </div>
              <div className="blog-content-box">
                <p className="blog-category">News</p>
                <h6 className="blog-title">Article Title Lore Ipsum</h6>
              </div>
            </div>
            <div className="blog-listing-col">
              <div className="blog-listing-image">
                <a href="javascript:void(0)">
                  <img src="./assets/images/dummy.png" alt />
                </a>
              </div>
              <div className="blog-content-box">
                <p className="blog-category">News</p>
                <h6 className="blog-title">Article Title Lore Ipsum</h6>
              </div>
            </div>
            <div className="blog-listing-col">
              <div className="blog-listing-image">
                <a href="javascript:void(0)">
                  <img src="./assets/images/dummy.png" alt />
                </a>
              </div>
              <div className="blog-content-box">
                <p className="blog-category">News</p>
                <h6 className="blog-title">Article Title Lore Ipsum</h6>
              </div>
            </div>
            <div className="blog-listing-col">
              <div className="blog-listing-image">
                <a href="javascript:void(0)">
                  <img src="./assets/images/dummy.png" alt />
                </a>
              </div>
              <div className="blog-content-box">
                <p className="blog-category">News</p>
                <h6 className="blog-title">Article Title Lore Ipsum</h6>
              </div>
            </div>
            <div className="blog-listing-col">
              <div className="blog-listing-image">
                <a href="javascript:void(0)">
                  <img src="./assets/images/dummy.png" alt />
                </a>
              </div>
              <div className="blog-content-box">
                <p className="blog-category">News</p>
                <h6 className="blog-title">Article Title Lore Ipsum</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default BlogTheme2