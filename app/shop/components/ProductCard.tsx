"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "../../types/product";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/shop/${product.id}`)}
      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
    >
      {/* Ảnh sản phẩm */}
      <Image
        src={product.image}
        alt={product.name}
        width={80}
        height={80}
        className="w-20 h-20 object-contain"
      />

      {/* Thông tin */}
      <div className="flex flex-col gap-1">
        {/* Tên */}
        <p className="text-sm font-medium text-gray-700">{product.name}</p>

        {/* Giá */}
        <p className="text-lg font-bold text-gray-900">
          {product.price.toLocaleString("vi-VN")} VND
        </p>

        {/* Rating sao */}
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={
                i < product.rating ? "text-yellow-400" : "text-gray-300"
              }
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
