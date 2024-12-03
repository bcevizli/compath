import React from 'react'
import Link  from 'next/link' // Next.js Link bileşenini import ettik
import { FaSearch, FaShoppingCart } from 'react-icons/fa'


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

const CartMenu = () => {
  return (
    <Sheet>
            <SheetTrigger>
                <FaShoppingCart/>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>

                    <div>
                    <SheetTitle>
                    Empty Cards
                    </SheetTitle>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
  )
}
 
export default CartMenu
