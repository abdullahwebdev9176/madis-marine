import React from 'react'
import '@/styles/pages/BlogTheme1.css'
import { assets } from '@/Aseets/Assets'
import Image from 'next/image'
import Link from 'next/link'

const BlogTheme1 = () => {
    return (
        <>
            <div>
                <div className="blog-header">
                    <h1>NEWS &amp; Articles</h1>
                    <div className="blog-filter-list">
                        <ul className="desktop-blog-filter-list">
                            <li>
                                <Link href="" className="blog-filter-item active">All</Link>
                            </li>
                            <li>
                                <Link href="" className="blog-filter-item">News</Link>
                            </li>
                            <li>
                                <Link href="" className="blog-filter-item">Product</Link>
                            </li>
                            <li>
                                <Link href="" className="blog-filter-item">Service</Link>
                            </li>
                            <li>
                                <Link href="" className="blog-filter-item">Company</Link>
                            </li>
                            <li>
                                <Link href="" className="blog-filter-item">Misc</Link>
                            </li>
                        </ul>
                        <select className="form-control mobile-blog-filter-dropdown">
                            <option value="All Topics">All Topics</option>
                            <option value="News">News</option>
                            <option value="Product">Product</option>
                            <option value="Service">Service</option>
                            <option value="Misc">Misc</option>
                        </select>
                    </div>
                </div>
                <div className="blog-theme-1-sec">
                    <div className="blog-listing-box">
                        <div className="blog-listing-col">
                            <div className="blog-listing-image">
                                <Link href="">
                                    <Image src={assets.placeholderImg} alt="" />
                                </Link>
                            </div>
                            <div className="blog-content-box">
                                <p className="blog-category">News</p>
                                <h6 className="blog-title">Article Title Lore Ipsum</h6>
                            </div>
                        </div>
                        <div className="blog-listing-col">
                            <div className="blog-listing-image">
                                <Link href="">
                                    <Image src={assets.placeholderImg} alt="" />
                                </Link>
                            </div>
                            <div className="blog-content-box">
                                <p className="blog-category">News</p>
                                <h6 className="blog-title">Article Title Lore Ipsum</h6>
                            </div>
                        </div>
                        <div className="blog-listing-col">
                            <div className="blog-listing-image">
                                <Link href="">
                                    <Image src={assets.placeholderImg} alt="" />
                                </Link>
                            </div>
                            <div className="blog-content-box">
                                <p className="blog-category">News</p>
                                <h6 className="blog-title">Article Title Lore Ipsum</h6>
                            </div>
                        </div>
                        <div className="blog-listing-col">
                            <div className="blog-listing-image">
                                <Link href="">
                                    <Image src={assets.placeholderImg} alt="" />
                                </Link>
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

export default BlogTheme1