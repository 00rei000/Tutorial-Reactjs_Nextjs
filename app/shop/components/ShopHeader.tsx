"use client";

import Image from "next/image";
import { useState } from "react";

export default function ShopHeader() {
  const [search, setSearch] = useState("");

  return (
    <div className="border-b-2 border-gray-200 pb-3 mb-4">
      {/* Dòng 1: Tiêu đề "Shop" */}
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Shop</h1>

      {/* Dòng 2: Breadcrumb + Search + Filter */}
      <div className="flex items-center justify-between">
        {/* Breadcrumb */}
        <span className="text-gray-500 text-sm">Shop</span>

        {/* Search + Filter */}
        <div className="flex items-center gap-2">
          {/* Search bar */}
          <div className="flex items-center border-2 border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-1.5 text-sm outline-none w-48 text-gray-700"
            />
            {/* Icon kính lúp */}
            <button className="px-2 py-1.5 bg-white border-l-2 border-gray-300 hover:bg-gray-100">
              <Image
                src="/search.png"
                alt="Search"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
            </button>
          </div>

          {/* Icon Filter */}
          <button className="p-1.5 border-2 border-gray-300 rounded-md hover:bg-gray-100">
            <Image
              src="/fitler.png"
              alt="Filter"
              width={22}
              height={22}
              className="w-5 h-5 object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
