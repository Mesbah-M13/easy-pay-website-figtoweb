"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseLargeFill } from 'react-icons/ri'
import { Button } from './ui/moving-border'

const Navbar = () => {

  const MobileNav = [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Benefits', href: '#' },
    { name: 'Contact Us', href: '/' },
  ]

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav>
      <div className="w-11/12 md:max-w-10/12 mt-3 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-0">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={55}
            height={0}
            className="object-contain align-middle"
          />
          <h1 className="text-2xl md:text-4xl mb-2 font-semibold tracking-tight leading-none whitespace-nowrap">
            Easy Pay
          </h1>
        </div>

        <div className='w-7/12 '>
          <div className='sm:flex items-center justify-between hidden '>
            <ul className='flex gap-8 text-gray-750 '>
              <li>Features</li>
              <li>Pricing</li>
              <li>Scurity</li>
              <li>Benefits</li>
            </ul>

            <div>
              <Button
                borderRadius="9999px"
                containerClassName="inline-flex h-10 w-auto"
                borderClassName="bg-[radial-gradient(#38bdf8_40%,transparent_60%)]"
                className="border border-purple-300 bg-sky-600 text-white hover:bg-sky-800 transition px-4 py-2 text-sm font-medium"
              >
                <Link href="/">Contact Us</Link>
              </Button>


            </div>
          </div>
        </div>

        <div className='md:hidden pl-4 cursor-pointer'>
          {menuOpen ? <RiCloseLargeFill onClick={toggleMenu} />
            : <GiHamburgerMenu onClick={toggleMenu} />
          }
        </div>

      </div>

      <div>
        {
          menuOpen &&
          <ul className="flex flex-col items-center justify-center w-full space-y-2 md:hidden">
            {
              MobileNav.map((menu, index) => (
                <li key={index} className='w-10/12 text-center cursor-pointer transition-all duration-200 rounded-xl px-4 py-1.5 ' >
                  <Link
                    href={menu.href}
                    className={`block text-center cursor-pointer px-4 py-2 rounded-md transition-all duration-300 ease-in-out 
                      ${menu.name === "Contact Us"
                        ? "bg-gradient-to-r from-purple-600 to-sky-500 text-white hover:from-purple-600 hover:to-sky-600 text-xl"
                        : "hover:bg-blue-500 hover:text-white"
                      }`}
                  >
                    {menu.name}
                  </Link>

                </li>
              ))
            }
          </ul>
        }
      </div>
    </nav >
  )
}

export default Navbar