import React from 'react';
import Header from "@/components/Menu/Header";
import Footer from '@/components/Menu/Footer';

interface BrowseLayoutProps {
    children: React.ReactNode;
}

const BrowseLayout = ({ children }: BrowseLayoutProps) => {
    return (
        <div>
            <Header />
            <div className='min-h-screen'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default BrowseLayout
