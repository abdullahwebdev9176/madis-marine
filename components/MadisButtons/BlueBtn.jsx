import React from 'react'
import './ButtonStyle.css'
import Link from 'next/link'

const BlueBtn = ({ button_link = '#', button_title = 'Click Me' }) => {
    return (
        <>
            <Link href={button_link} className="blue-btn">
                {button_title}
            </Link>
        </>
    )
}

export default BlueBtn