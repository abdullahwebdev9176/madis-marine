'use client'

import { Plus } from 'lucide-react'
import React from 'react'
import '@/styles/pages/BoatListings.css'

const page = () => {
    return (
        <>

            <div className="listing-container">
                <div className='listing-box'>
                    <div className="listing-col-1">
                        <div className='filter-card'>
                            <div className="filter-card-header">
                                <h5>Conditon</h5>
                                <Plus />
                            </div>

                            <div className="filter-card-content">
                                <div className="check-box-item">
                                    <label>
                                        <input type="checkbox" /> All
                                    </label>
                                </div>

                                <div className="check-box-item">
                                    <label>
                                        <input type="checkbox" /> New
                                    </label>
                                </div>

                                <div className="check-box-item">
                                    <label>
                                        <input type="checkbox" /> Pre Owned
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="listing-col-2"></div>
                </div>
            </div>

        </>
    )
}

export default page