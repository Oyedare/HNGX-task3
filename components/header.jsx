'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
    const router = useRouter()

  return (
    <header className="header">
        <h1>Custom Made <span>Gallery</span></h1>
        <p>Galleria is not just a gallery, its an immersive experience that allows you to engage with art on your terms. Join us in celebrating the art of photography and the endless possibilities that Drag and Drop bring to your artistic exploration.</p>
        
        <button onClick={()=>router.push('/signin')} className="submit-btn">
            Get Started
        </button>   
    </header>
  )
}

export default Header