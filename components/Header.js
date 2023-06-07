import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='container flex justify-between items-center py-5 mb-20'>
            <div>
                <Link href={'/'}> <img src='/logo.svg' alt='logo movlix' /></Link>
            </div>
            <div>
                <ul className='flex gap-8'>
                    <li><Link href=''>Movies</Link></li>
                    <li><Link href=''>TV Show</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header