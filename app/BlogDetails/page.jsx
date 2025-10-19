import React from 'react'

const BlogDetails = () => {
    return (
        <>
            <div className="blog-details-container">
                <div className="blog-main">
                    <div className="blog-details-image">
                        <img src="./assets/images/dummy.png" alt />
                    </div>
                    <div className="blog-details-content-box">
                        <h1 className="blog-details-title">Article Title</h1>
                        <div className="blog-meta">
                            <span className="meta-item">NEWS</span>
                            <span className="meta-item">11/15/24</span>
                        </div>
                        <div className="blog-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">This is a link</a> example. Sed ut
                                perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            <h2>Subheading Example</h2>
                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                            <ul>
                                <li>First item</li>
                                <li>Second item</li>
                                <li>Third item</li>
                            </ul>
                            <blockquote>This is a sample blockquote. It looks nice and stands out from the rest of the content.
                            </blockquote>
                            <img src="./assets/images/dummy.png" alt="Sample Image" />
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?</p>
                        </div>
                    </div>
                </div>
                <aside className="blog-sidebar">
                    <h3 className="blog-detail-sidebar-heading">Similar Posts</h3>
                    <div className="d-none d-md-block">
                        <div className="sidebar-post">
                            <div className="sidebar-thumbnail-image">
                                <img src="./assets/images/dummy.png" alt />
                            </div>
                            <p className="sidebar-title">Blog title</p>
                        </div>
                        <div className="sidebar-post">
                            <div className="sidebar-thumbnail-image">
                                <img src="./assets/images/dummy.png" alt />
                            </div>
                            <p className="sidebar-title">Blog title</p>
                        </div>
                        <div className="sidebar-post">
                            <div className="sidebar-thumbnail-image">
                                <img src="./assets/images/dummy.png" alt />
                            </div>
                            <p className="sidebar-title">Blog title</p>
                        </div>
                    </div>
                    <div className="d-block d-md-none">
                        <div className="event-galley-col-2">
                            <div className="owl-carousel event-gallery-carousel owl-theme">
                                <div className="item">
                                    <div className="sidebar-post">
                                        <div className="sidebar-thumbnail-image">
                                            <img src="./assets/images/dummy.png" alt />
                                        </div>
                                        <p className="sidebar-title">Blog title</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

        </>
    )
}

export default BlogDetails