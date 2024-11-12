'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Home",
    "Menu",
    "Facilities",
    "Reviews",
    "Reservation"
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className="max-w-7xl">
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
      <Image src="/brewnique.png" alt="brewnique-logo" width={150} height={100}/>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="#Home">
          Home
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="#Menu" aria-current="page">
          Menu
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#Facilities">
          Facilities
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#Reviews">
          Reviews
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#Reservation">
          Reservation
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem>
        <div className="">
          <Link href=""><FaLinkedin className="w-[24px] h-[24px] text-slate-600 m-2 hover:text-slate-800"></FaLinkedin></Link>
          <Link href=""><FaSquareFacebook className="w-[24px] h-[24px] text-slate-600 m-2 hover:text-slate-800"></FaSquareFacebook></Link>
          <Link href=""><FaSquareInstagram className="w-[24px] h-[24px] text-slate-600 m-2 hover:text-slate-800"></FaSquareInstagram></Link>
        </div>
      </NavbarItem>
    </NavbarContent>
    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            color={
              index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
            }
            className="w-full"
            href="#"
            size="lg"
          >
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
  );
}
