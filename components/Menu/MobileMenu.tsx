import React from 'react'
import Link  from 'next/link' // Next.js Link bileşenini import ettik

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

const MobileMenu = () => {
    return (
        <div className='flex md:hidden'>
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    {/* Her bir başlık, Link ile sarmalanarak tıklanabilir hale geliyor */}
                    <Link href="/paketler">
                        <SheetTitle>Antrenmanlar</SheetTitle>
                    </Link>
                    <Link href="/urunler">
                        <SheetTitle>Mağaza</SheetTitle>
                    </Link>
                    <Link href="/topluluk">
                        <SheetTitle>Topluluk</SheetTitle>
                    </Link>
                    <Link href="/gorevler">
                        <SheetTitle>Başarımlar</SheetTitle>
                    </Link>
                    <Link href="/profil">
                        <SheetTitle>Blog</SheetTitle>
                    </Link>
                </SheetHeader>
            </SheetContent>
        </Sheet>
        </div>
    )
}

export default MobileMenu
