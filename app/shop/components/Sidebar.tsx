"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  {
    label: "Shop",
    href: "/shop",
    icon: "/shop.png",
    activeIcon: "/click_shop.png",
  },
  {
    label: "Cart",
    href: "/shop/cart",
    icon: "/cart.png",
    activeIcon: "/click_cart.png",
  },
  {
    label: "My Profile",
    href: "/shop/profile",
    icon: "/iconuser.png",
    activeIcon: "/click_iconuser.png",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true); // true = hiện menu

  return (
    <aside
      className={`flex-col border-r-2 border-black bg-white transition-all duration-300 ${isOpen ? "w-64" : "w-14"}`}
    >
      <div className="border-b-4 border-black p-2 font-semibold text-gray-600 flex items-center justify-between">
        {isOpen && <span>Menu</span>}
        <svg
          className="w-6 h-6 text-gray-500 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          onClick={() => setIsOpen(!isOpen)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      {isOpen ? (
        // Sidebar mở: hiện đầy đủ label + hover rõ ràng
        <nav className="flex flex-col p-2 gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div
                key={item.href}
                onClick={() => router.push(item.href)}
                className={`flex items-center gap-3 p-3 font-medium rounded-md cursor-pointer transition-all duration-200 border group
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-500 border-blue-200 shadow-sm"
                      : "border-transparent text-gray-700 hover:bg-blue-50 hover:text-blue-400 hover:border-blue-100 hover:shadow-sm"
                  }`}
              >
                <Image
                  src={isActive ? item.activeIcon : item.icon}
                  alt={item.label}
                  width={40}
                  height={40}
                  className="w-8 h-8 object-contain"
                />
                {item.label}
              </div>
            );
          })}
        </nav>
      ) : (
        // Sidebar đóng: chỉ hiện icon + tooltip khi hover
        <nav className="flex flex-col p-2 gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div
                key={item.href}
                onClick={() => router.push(item.href)}
                className="relative group flex justify-center"
              >
                <div
                  className={`p-2 rounded-md cursor-pointer transition-all duration-200 border
                    ${
                      isActive
                        ? "bg-blue-50 border-blue-200"
                        : "border-transparent hover:bg-blue-50 hover:border-blue-100"
                    }`}
                >
                  <Image
                    src={isActive ? item.activeIcon : item.icon}
                    alt={item.label}
                    width={32}
                    height={32}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                {/* Tooltip hiện khi hover */}
                <div
                  className="absolute left-14 top-1/2 -translate-y-1/2 z-50
                  bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap
                  opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                >
                  {item.label}
                  {/* Mũi tên tooltip */}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-800" />
                </div>
              </div>
            );
          })}
        </nav>
      )}
    </aside>
  );
}
