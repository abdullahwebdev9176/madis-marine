import React from 'react'
import './ButtonStyle.css'
import Link from 'next/link'

const TransparentBtn = ({ button_link, button_title }) => {
  return (
    <Link href={button_link} className="transparent-btn">
      {button_title}
    </Link>
  )
}

export default TransparentBtn