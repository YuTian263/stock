import React from 'react'
import Link from 'next/link'

const FootersLinks = ({text, linkText, href }: FooterLinkProps) => {
  return (
    <div className ='text-center padding-4 '>
        <p className ="text-sm text-gray-500"> 
            {text}{``}
            <Link href = {href} className = 'footer-link'>
                {linkText}
            </Link>
        </p>
    </div>
  )
}

export default FootersLinks