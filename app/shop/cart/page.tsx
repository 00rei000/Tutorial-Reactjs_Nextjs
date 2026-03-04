"use client";

import { useState } from "react";
import Image from "next/image";
import { CartItem } from "../../types/cartItems";
import { cartData } from "../../data/cartData";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(cartData);

  // Tăng số lượng
  const increase = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrease = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const remove = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subTotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const tax = subTotal * 0.1; // Giả sử thuế là 10%
  const total = subTotal + tax; // Thuế 10%

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-gray-200 pb-3 mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Cart</h1>
        <span className="text-gray-500 text-sm">
          {items.length} items in bag
        </span>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 border-b border-gray-200 pb-4 relative"
          >
            {/* Nút X xóa sản phẩm */}
            <button
              onClick={() => remove(item.id)}
              className="absolute top-0 right-0 w-5 h-5 bg-gray-200 rounded-full text-gray-600 hover:bg-red-400 hover:text-white text-xs flex items-center justify-center"
            >
              ✕
            </button>
            {/* Ảnh */}
            <Image
              src={item.product.image}
              alt={item.product.name}
              width={100}
              height={100}
              className="w-24 h-24 object-contain"
            />

            {/* Thông tin */}
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{item.product.name}</p>
              <p className="text-sm text-gray-500 mt-1">
                {item.product.description}
              </p>

              {/* Giá + Số lượng */}
              <div className="flex items-center justify-between mt-2">
                <p className="text-lg font-bold text-gray-900">
                  {item.product.price.toLocaleString("vi-VN")} VND
                </p>

                {/* Tăng giảm số lượng */}
                <div className="flex items-center gap-3 border border-gray-300 rounded px-3 py-1">
                  <button
                    onClick={() => increase(item.id)}
                    className="text-lg font-bold text-gray-700 hover:text-blue-500 leading-none"
                  >
                    +
                  </button>
                  <span className="text-gray-800 w-4 text-center leading-none">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => decrease(item.id)}
                    className="text-lg font-bold text-gray-700 hover:text-blue-500 leading-none"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tổng tiền */}
      <div className="flex flex-col items-end gap-2 mt-6 border-t border-gray-200 pt-4">
        <div className="flex justify-between w-72">
          <span className="text-gray-600">SubTotal</span>
          <span className="font-medium">
            {subTotal.toLocaleString("vi-VN")} VND
          </span>
        </div>
        <div className="flex justify-between w-72">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">{tax.toLocaleString("vi-VN")} VND</span>
        </div>
        <div className="flex justify-between w-72 border-t border-gray-300 pt-2">
          <span className="font-bold text-gray-800">Total</span>
          <span className="font-bold text-gray-900">
            {total.toLocaleString("vi-VN")} VND
          </span>
        </div>
      </div>
    </div>
  );
}
