'use client'

import * as React from "react"
import { useState } from 'react';
import Link from "next/link"
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import MobileMenu from "./MobileMenu";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { cn } from "@/lib/utils"
import { components } from "@/constants";
import { urunler } from "@/constants";
import CartMenu from "./Cart";


export function NavigationMenuDemo() {
  return (
    <>
      <div className="bg-white p-1 flex justify-center items-center border-b w-full">
        {/* Menü (Shadcn UI Menü) */}
        <NavigationMenu>
          {/* Sol Taraf Logo */}
          <div className="text-black text-sm font-bold mr-12">
            <Link href="/">
              <img
                src="/photos/logo.jpg"
                alt="Logo"
                className="h-8 w-auto" // Görsel boyutunu ayarlamak için
              />
            </Link>
          </div>

          <NavigationMenuList className="flex space-x-4 justify-center items-center">
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/antrenmanlar">
                Antrenmanlar
                </Link>
                </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                        CompAth
                      </div>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/cevrimici-dersler" title="Çevrimiçi Dersler">
                    Canlı bir şekilde istediğin yerden ekip antrenmanlarına katıl
                  </ListItem>
                  <ListItem href="/cevrimdisi-dersler" title="Çevrimdışı Dersler">
                    Antrenman programını sana özel tasarlıyoruz, süreci takip ediyoruz, değişimine ortak oluyoruz
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div>
                <NavigationMenuTrigger>
                  <Link href="/magaza">
                    Mağaza
                  </Link>
                </NavigationMenuTrigger>
              </div>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {urunler.map((urunler) => (
                    <ListItem
                      key={urunler.title}
                      title={urunler.title}
                      href={urunler.href}
                    >
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/topluluk">
                Topluluk
                </Link>
                </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components that you can copy and
                          paste into your apps. Accessible. Customizable. Open
                          Source.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Başarımlar</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuTrigger>
                  Blog
                </NavigationMenuTrigger>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>

          {/* Sağ Taraf Arama ve Sepet İkonları */}

          <Menubar className="flex items-center space-x-4 ml-16">
            <MenubarMenu>
              <MenubarTrigger>
                  <FaUser />
              </MenubarTrigger>
              <MenubarContent>
                <div className="flex ml-2">
                  Burak Cevizli
                </div>
                <MenubarSeparator />
                <MenubarItem>
                  <Link href="/login">
                  Profil
                </Link>
                  </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Ekipler</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <Link href="/ayarlar">
                  Ayarlar
                  </Link>
                  </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Çıkış Yap</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <div className="flex items-center space-x-4">
            <button className="text-black p-2 hover:bg-gray-200 rounded">
              <FaSearch className="w-4 h-4" />
            </button>
            <CartMenu />
          </div>

          <MobileMenu />
        </NavigationMenu>


      </div>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={props.href ?? "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
