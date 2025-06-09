import Image from "next/image"
import Link from "next/link"
import { CreditCard, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          {/* Checkout Steps */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center">
                  1
                </div>
                <span className="text-sm mt-1">Shipping</span>
              </div>
              <div className="flex-1 h-1 bg-orange-200 mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center">
                  2
                </div>
                <span className="text-sm mt-1">Payment</span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                  3
                </div>
                <span className="text-sm mt-1">Confirmation</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Billing & Shipping */}
            <div className="lg:col-span-2">
              <div className="bg-white-overlay p-6 rounded-3xl shadow-lg mb-8">
                <h2 className="text-xl font-bold mb-6">Billing & Shipping</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="country" className="block text-sm font-medium mb-1">
                    Country / Region *
                  </label>
                  <select
                    id="country"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2"
                    placeholder="House number and street name"
                  />
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium mb-1">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      id="zip"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-orange-500 mr-2" />
                    <span className="text-sm">Ship to a different address?</span>
                  </label>
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium mb-1">
                    Order Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Notes about your order, e.g. special notes for delivery"
                  ></textarea>
                </div>
              </div>
              
              {/* Payment Methods */}
              <div className="bg-white-overlay p-6 rounded-3xl shadow-lg">
                <h2 className="text-xl font-bold mb-6">Payment Method</h2>
                
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 bg-orange-50 border-orange-200">
                    <label className="flex items-center">
                      <input type="radio" name="payment" className="text-orange-500 mr-2" checked />
                      <span className="font-medium">Credit Card</span>
                    </label>
                    
                    <div className="mt-4 pl-6">
                      <div className="mb-4">
                        <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">
                          Card Number *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="cardNumber"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="1234 5678 9012 3456"
                          />
                          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium mb-1">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            id="expiry"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium mb-1">
                            CVV *
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="123"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="nameOnCard" className="block text-sm font-medium mb-1">
                          Name on Card *
                        </label>
                        <input
                          type="text"
                          id="nameOnCard"
                          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <label className="flex items-center">
                      <input type="radio" name="payment" className="text-orange-500 mr-2" />
                      <span className="font-medium">PayPal</span>
                    </label>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <label className="flex items-center">
                      <input type="radio" name="payment" className="text-orange-500 mr-2" />
                      <span className="font-medium">Apple Pay</span>
                    </label>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-md">
                    Place Order
                  </Button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white-overlay p-6 rounded-3xl shadow-lg sticky top-24">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {/* Product 1 */}
                  <div className="flex gap-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                        alt="Casual Gray Dress"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">Casual Gray Dress</h3>
                      <div className="text-xs text-gray-500">Size: M | Color: Gray</div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">1 × $59.00</span>
                        <span className="text-sm font-medium">$59.00</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product 2 */}
                  <div className="flex gap-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                        alt="Brown Casual Shirt"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">Brown Casual Shirt</h3>
                      <div className="text-xs text-gray-500">Size: L | Color: Brown</div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">1 × $39.00</span>
                        <span className="text-sm font-medium">$39.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4 space-y-3 mb-6">
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
                  <div className="border-t pt-3 flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-orange-600">$105.84</span>
                  </div>
                </div>
                
                {/* Coupon Code */}
                <div className="mb-6">
                  <label htmlFor="checkout-coupon" className="block text-sm font-medium mb-2">
                    Coupon Code
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="checkout-coupon"
                      placeholder="Enter coupon code"
                      className="flex-1 rounded-l-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                    <Button className="rounded-r-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700">
                      Apply
                    </Button>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-green-800">
                    Your personal data will be used to process your order, support your experience, and for other purposes described in our privacy policy.
                  </p>
                </div>
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
                  <Link href="#" className="hover:text-orange-500 transition-colors">Search</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">Help</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">Information</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">Shipping Details</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">Contact</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">About</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">Size Guide</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">Shopping & Returns</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">Privacy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Information</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">My Account</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">Login</Link>
                </li>
                <li>
                  <Link href="/cart" className="hover:text-orange-500 transition-colors">Cart</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">Wishlist</Link>
                </li>
                <li>
                  <Link href="/checkout" className="hover:text-orange-500 transition-colors">Checkout</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t py-6 text-center text-sm text-gray-500">
            <p>Copyright © 2023 BemmaTrendz - All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
