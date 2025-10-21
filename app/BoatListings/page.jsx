'use client'

import { Plus } from 'lucide-react'
import React from 'react'
import '@/styles/pages/BoatListings.css'
import FilterPanel from '@/components/BoatListingComponents/FilterPanel'

const page = () => {
    return (
        <>

            <div className="listing-container">
                <div className='listing-box'>
                    <div className="listing-col-1">

                        <FilterPanel />
                        
                    </div>
                    <div className="listing-col-2"></div>
                </div>
            </div>

        </>
    )
}

export default page