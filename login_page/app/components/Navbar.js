'use client'
import { useState } from 'react';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/dashboard" legacyBehavior>
            <a>Clothing Dashboard</a>
          </Link>
        </div>

        <div className="md:flex md:items-center hidden">
          <ul className="md:flex md:space-x-6 text-white">
            <li className="py-2 md:py-0">
              <Link href="/dashboard" legacyBehavior>
                <a className="hover:text-gray-400">Dashboard</a>
              </Link>
            </li>

            <li className="relative group py-2 md:py-0">
              <a className="hover:text-gray-400 focus:outline-none">
                Products
              </a>
              <div className="invisible absolute flex-col z-50 group-hover:visible group-hover:bg-gray-700 bg-gray-700 text-white rounded w-100">
                <Link href="/products/clothing" legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-600">Clothing</a>
                </Link>
                <Link href="/products/accessories" legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-600">Accessories</a>
                </Link>
                <Link href="/products/shoes" legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-600">Shoes</a>
                </Link>
              </div>
            </li>

            <li className="relative group py-2 md:py-0">
              <a className="hover:text-gray-400 focus:outline-none">
                Users
              </a>
              <div className="invisible absolute flex-col z-50 group-hover:visible group-hover:bg-gray-700 bg-gray-700 text-white rounded w-100">
                <Link href="/users/admins" legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-600">Admins</a>
                </Link>
                <Link href="/users/customers" legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-600">Customers</a>
                </Link>
              </div>
            </li>

            <li className="py-2 md:py-0">
              <Link href="/orders" legacyBehavior>
                <a className="hover:text-gray-400">Orders</a>
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="/" legacyBehavior>
                <a className="hover:text-gray-400">Logout</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
