'use client'

import React from 'react'
import '@/app/page.module.css'
import { useRouter } from 'next/navigation'
const Navbar = () => {
    const router = useRouter()
  return (
    <nav className='flex'>
        <div className="logo">
            <h3>Galleria</h3>
        </div>

        <button onClick={()=>router.push('/signin')} className="cta">
            Sign in
        </button>
    </nav>
  )
}

export default Navbar