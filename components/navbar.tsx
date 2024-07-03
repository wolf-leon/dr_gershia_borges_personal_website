import {
  Link,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  link as linkStyles,
  Divider,
} from "@nextui-org/react";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { FaEnvelope, FaPhone, FaClock } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <div className="header flex justify-between items-center py-4 px-8 bg-white border-b border-gray-300 hidden md:flex">
        <div className="logo flex items-center gap-4">
          <NextLink href="/">
            <img src="/favicon.ico" alt="Dr Gershia Borges" className="h-12" />
          </NextLink>
          <div className="flex flex-col">
            <span className="font-bold text-lg">Dr Gershia Borges</span>
            <span className="text-sm">Obstetrician and Gynaecologist</span>
          </div>
        </div>
        <div className="contact-info flex items-center gap-8">
          <div className="flex items-center gap-2">
            <FaClock className="text-pink-500" />
            <span className="text-sm">Open: Monday to Saturday  9am-7pm, Appointment Basis : Sunday</span>
          </div>
          <p >|</p>
          <div className="flex items-center gap-2">
            <FaPhone className="text-pink-500" />
            <span className="text-sm">+919272037826</span>
          </div>
          <p >|</p>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-pink-500" />
            <span className="text-sm"> drgershiaborges@gmail.com</span>
          </div>
        </div>
      </div>



      <NextUINavbar maxWidth="sm" position="sticky" className="bg-white">
        <div className="flex justify-center hidden md:flex">
          <NavbarContent className="flex justify-center gap-8 py-2 px-35">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
                
              </NavbarItem>
            ))}
          </NavbarContent>
        </div>
        <div className="logo flex items-center justify-left gap-4 md:hidden">
          <NextLink href="/">
            <img src="/favicon.ico" alt="Dr Gershia Borges" className="h-12" />
          </NextLink>
          <div className="flex flex-col">
            <span className="font-bold text-lg">Dr Gershia Borges</span>
            <span className="text-sm">Obstetrician and Gynaecologist</span>
          </div>
        </div>
        <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "foreground"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "foreground"
                        : "foreground"
                  }
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </>
  );
};
