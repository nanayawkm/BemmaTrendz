"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/", hasDropdown: false },
  { name: "Shop", href: "/shop", hasDropdown: true },
  { name: "Gallery", href: "/gallery", hasDropdown: false },
  { name: "Contact Us", href: "/contact", hasDropdown: false },
  { name: "Custom Order", href: "/custom-order", hasDropdown: false },
  { name: "Reviews", href: "/reviews", hasDropdown: false },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/logo.png"
              alt="BemmaTrendz Logo"
              width={40}
              height={40}
              className="cursor-pointer transition-transform duration-300 group-hover:scale-110"
            />
            <div className="relative">
              <span className="text-xl md:text-2xl font-playfair font-bold bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105 tracking-wide">
                Bemma
              </span>
              <span className="text-xl md:text-2xl font-montserrat font-light tracking-[0.2em] text-gray-800 transition-all duration-300 group-hover:scale-105">
                Trendz
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] transition-all duration-300 group-hover:w-full"></div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-sm text-gray-700 hover:text-[#f34f38] flex items-center transition-colors"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="ml-1 h-3 w-3" />}
              </Link>
              {item.hasDropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <Link
                      href="/shop?category=women"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f34f38]10 hover:text-[#f34f38]"
                    >
                      Women's Clothing
                    </Link>
                    <Link
                      href="/shop?category=men"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f34f38]10 hover:text-[#f34f38]"
                    >
                      Men's Clothing
                    </Link>
                    <Link
                      href="/shop?category=accessories"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f34f38]10 hover:text-[#f34f38]"
                    >
                      Accessories
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Search and Cart Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-1 hover:text-[#f34f38] transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <Link
            href="/cart"
            className="p-1 relative hover:text-[#f34f38] transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#f34f38] text-[10px] text-white">
              2
            </span>
          </Link>
          <Link
            href="/account"
            className="p-1 hover:text-[#f34f38] transition-colors"
          >
            <User className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className="w-full h-0.5 bg-[#f34f38]"></span>
            <span className="w-full h-0.5 bg-[#f34f38]"></span>
            <span className="w-full h-0.5 bg-[#f34f38]"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-3 space-y-1 border-t border-gray-100 bg-white">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-sm text-gray-700 hover:text-[#f34f38]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
