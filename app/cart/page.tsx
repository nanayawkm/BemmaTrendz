import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function CartPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="py-8">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white-overlay p-6 rounded-3xl shadow-lg">
                <div className="hidden md:grid grid-cols-12 gap-4 mb-6 text-sm font-medium text-gray-500">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Total</div>
                </div>

                {/* Cart Item 1 */}
                <div className="border-b pb-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="col-span-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden">
                            <Image
                              src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                              alt="Casual Gray Dress"
                              width={100}
                              height={100}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <button className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md hover:text-red-500 transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div>
                          <h3 className="font-medium">Casual Gray Dress</h3>
                          <div className="text-sm text-gray-500 mt-1">Size: M | Color: Gray</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">
                      <div className="md:hidden text-sm text-gray-500 mb-1">Price:</div>
                      <div className="font-medium">$59.00</div>
                    </div>
                    <div className="col-span-2 text-center">
                      <div className="md:hidden text-sm text-gray-500 mb-1">Quantity:</div>
                      <div className="flex items-center justify-center">
                        <button className="h-8 w-8 rounded-l-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                          <Minus className="h-3 w-3" />
                        </button>
                        <input
                          type="number"
                          value="1"
                          min="1"
                          className="h-8 w-12 border-t border-b border-gray-300 text-center focus:outline-none text-sm"
                        />
                        <button className="h-8 w-8 rounded-r-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">
                      <div className="md:hidden text-sm text-gray-500 mb-1">Total:</div>
                      <div className="font-medium text-orange-600">$59.00</div>
                    </div>
                  </div>
                </div>

                {/* Cart Item 2 */}
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="col-span-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden">
                            <Image
                              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                              alt="Brown Casual Shirt"
                              width={100}
                              height={100}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <button className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md hover:text-red-500 transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div>
                          <h3 className="font-medium">Brown Casual Shirt</h3>
                          <div className="text-sm text-gray-500 mt-1">Size: L | Color: Brown</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">
                      <div className="md:hidden text-sm text-gray-500 mb-1">Price:</div>
                      <div className="font-medium">$39.00</div>
                    </div>
                    <div className="col-span-2 text-center">
                      <div className="md:hidden text-sm text-gray-500 mb-1">Quantity:</div>
                      <div className="flex items-center justify-center">
                        <button className="h-8 w-8 rounded-l-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                          <Minus className="h-3 w-3" />
                        </button>
                        <input
                          type="number"
                          value="1"
                          min="1"
                          className="h-8 w-12 border-t border-b border-gray-300 text-center focus:outline-none text-sm"
                        />
                        <button className="h-8 w-8 rounded-r-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">
                      <div className="md:hidden text-sm text-gray-500 mb-1">Total:</div>
                      <div className="font-medium text-orange-600">$39.00</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <Link href="/shop" className="text-orange-500 hover:underline flex items-center gap-1">
                    <ArrowRight className="h-4 w-4 rotate-180" />
                    Continue Shopping
                  </Link>
                  <Button className="rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600 shadow-md">
                    Update Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white-overlay p-6 rounded-3xl shadow-lg">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">$98.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">$7.84</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-orange-600">$105.84</span>
                  </div>
                </div>

                {/* Coupon Code */}
                <div className="mb-6">
                  <label htmlFor="coupon" className="block text-sm font-medium mb-2">
                    Coupon Code
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="coupon"
                      placeholder="Enter coupon code"
                      className="flex-1 rounded-l-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                    <Button className="rounded-r-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700">
                      Apply
                    </Button>
                  </div>
                </div>

                <Link href="/checkout">
                  <Button className="w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-md">
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-12 mt-12 rounded-t-3xl shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)]">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-bold">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span>123 Main Street, New York, NY 10001</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>info@bemmatrendz.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Help</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Search
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Information
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Shipping Details
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Shopping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Information</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/cart" className="hover:text-orange-500 transition-colors">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link href="/checkout" className="hover:text-orange-500 transition-colors">
                    Checkout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t py-6 text-center text-sm text-gray-500">
            <p>Copyright © 2023 BemmaTrendz - All rights reserved</p>
            <div className="mt-4 flex justify-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-orange-400 to-orange-500"></div>
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-orange-300 to-orange-400"></div>
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-600"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
