import React from 'react'
import '../../app/globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: 'JS Mastery',
    description: 'JS Mastery Resources',
}

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default layout
