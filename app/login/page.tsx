"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className="flex flex-col h-screen items-center justify-center bg-[#00A8F3] px-4 relative">
      <div className="w-full max-w-md flex flex-col items-center z-10">
        {/* Logo - Căn giữa */}
        <div className="bg-white p-4 rounded-full shadow-md mb-8 flex items-center justify-center w-24 h-24">
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Container Form */}
        <div className="w-full flex flex-col gap-5">
          {/* Input Tên đăng nhập */}
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none bg-[#00A8F3] rounded-full w-5 h-5 flex items-center justify-center">
              <Image
                src="/user-2 1.png"
                alt="User Icon"
                width={12}
                height={12}
              />
            </div>
            <input
              type="text"
              placeholder="Tên đăng nhập"
              className="w-full bg-white text-gray-700 pl-10 pr-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-blue-300 shadow-sm transition-all"
            />
          </div>

          {/* Input Mật khẩu */}
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none bg-[#00A8F3] rounded-full w-5 h-5 flex items-center justify-center">
              <Image
                src="/padlock 1.png"
                alt="Lock Icon"
                width={12}
                height={12}
              />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              className="w-full bg-white text-gray-700 pl-10 pr-10 py-3 rounded-md outline-none focus:ring-2 focus:ring-blue-300 shadow-sm transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Hàng Checkbox và Quên mật khẩu */}
          <div className="flex items-center justify-between text-white text-sm px-1 mt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none hover:opacity-90 transition-opacity">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
              />
              Lưu đăng nhập
            </label>
            <a href="#" className="hover:underline opacity-90 font-medium">
              Bạn quên mật khẩu?
            </a>
          </div>
          {/* Nút Đăng nhập */}
          <button
            type="button"
            onClick={() => router.push("/shop")}
            className="w-full mt-2 py-3 border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-[#00A8F3] transition-all duration-200 uppercase tracking-wide shadow-lg"
          >
            Đăng nhập
          </button>
        </div>
        {/* Footer Text */}
        <div className="mt-20 text-center text-white text-xs opacity-70 leading-relaxed font-light">
          <p>
            Nếu bạn có thắc mắc hay cần giải đáp, vui lòng liên hệ số điện
            thoại: <span className="font-bold underline ml-1">19001000</span>
          </p>
          <p className="mt-1">Bản quyền thuộc về AnyBim</p>
        </div>
      </div>
    </main>
  );
}
