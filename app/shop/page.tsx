import { Filter, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import Header from "@/components/header"

export default function ShopPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative">
          <div className="h-[300px] w-full relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              alt="Shop Banner"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
              <div className="container">
                <div className="max-w-md text-white p-6">
                  <h1 className="text-4xl font-bold mb-2">Shop Collection</h1>
                  <p className="mb-4">Discover our latest arrivals and bestsellers</p>
                  <div className="flex space-x-2">
                    <Link href="/" className="text-white/80 hover:text-white transition-colors">
                      Home
                    </Link>
                    <span>/</span>
                    <span className="text-orange-300">Shop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <div className="lg:w-1/4">
                <div className="bg-white-overlay p-6 rounded-3xl shadow-lg">
                  <h2 className="text-xl font-bold mb-4">Filters</h2>

                  {/* Categories */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Categories</h3>
                    <ul className="space-y-2">
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-orange-500 mr-2" />
                          <span>Women's Clothing (24)</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-orange-500 mr-2" />
                          <span>Men's Clothing (18)</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-orange-500 mr-2" />
                          <span>Accessories (12)</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-orange-500 mr-2" />
                          <span>Footwear (9)</span>
                        </label>
                      </li>
                    </ul>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>$0</span>
                        <span>$500</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="500"
                        className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                      />
                      <div className="flex space-x-2">
                        <input
                          type="number"
                          placeholder="Min"
                          className="w-full rounded-lg border border-gray-300 px-3 py-1 text-sm"
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          className="w-full rounded-lg border border-gray-300 px-3 py-1 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Colors</h3>
                    <div className="flex flex-wrap gap-2">
                      <div className="h-8 w-8 rounded-full bg-red-500 cursor-pointer border-2 border-white shadow-sm hover:scale-110 transition-transform"></div>
                      <div className="h-8 w-8 rounded-full bg-blue-500 cursor-pointer border-2 border-white shadow-sm hover:scale-110 transition-transform"></div>
                      <div className="h-8 w-8 rounded-full bg-green-500 cursor-pointer border-2 border-white shadow-sm hover:scale-110 transition-transform"></div>
                      <div className="h-8 w-8 rounded-full bg-yellow-500 cursor-pointer border-2 border-white shadow-sm hover:scale-110 transition-transform"></div>
                      <div className="h-8 w-8 rounded-full bg-purple-500 cursor-pointer border-2 border-white shadow-sm hover:scale-110 transition-transform"></div>
                      <div className="h-8 w-8 rounded-full bg-black cursor-pointer border-2 border-white shadow-sm hover:scale-110 transition-transform"></div>
                      <div className="h-8 w-8 rounded-full bg-white cursor-pointer border-2 border-gray-200 shadow-sm hover:scale-110 transition-transform"></div>
                    </div>
                  </div>

                  {/* Size */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Size</h3>
                    <div className="flex flex-wrap gap-2">
                      <button className="h-8 w-8 rounded-full bg-white border border-gray-300 text-sm hover:border-orange-500 hover:text-orange-500 transition-colors">
                        XS
                      </button>
                      <button className="h-8 w-8 rounded-full bg-white border border-gray-300 text-sm hover:border-orange-500 hover:text-orange-500 transition-colors">
                        S
                      </button>
                      <button className="h-8 w-8 rounded-full bg-white border border-gray-300 text-sm hover:border-orange-500 hover:text-orange-500 transition-colors">
                        M
                      </button>
                      <button className="h-8 w-8 rounded-full bg-white border border-gray-300 text-sm hover:border-orange-500 hover:text-orange-500 transition-colors">
                        L
                      </button>
                      <button className="h-8 w-8 rounded-full bg-white border border-gray-300 text-sm hover:border-orange-500 hover:text-orange-500 transition-colors">
                        XL
                      </button>
                    </div>
                  </div>

                  <Button className="w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-md">
                    Apply Filters
                  </Button>
                </div>
              </div>

              {/* Product Grid */}
              <div className="lg:w-3/4">
                <div className="bg-white-overlay p-6 rounded-3xl shadow-lg mb-6">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                      <Filter className="h-5 w-5 mr-2" />
                      <span>Showing 1-12 of 36 products</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">Sort by:</span>
                      <div className="relative">
                        <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500">
                          <option>Featured</option>
                          <option>Price: Low to High</option>
                          <option>Price: High to Low</option>
                          <option>Newest</option>
                          <option>Best Selling</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProductCard
                      image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                      title="Casual Gray Dress"
                      price="$59.00"
                      colors={["bg-gray-300", "bg-orange-500"]}
                      href="/product/casual-gray-dress"
                    />
                    <ProductCard
                      image="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                      title="Vintage Floral Dress"
                      price="$79.00"
                      colors={["bg-gray-200", "bg-blue-300"]}
                      href="/product/vintage-floral-dress"
                    />
                    <ProductCard
                      image="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                      title="Brown Casual Shirt"
                      price="$39.00"
                      colors={["bg-amber-800", "bg-gray-400", "bg-orange-500"]}
                      href="/product/brown-casual-shirt"
                    />
                    <ProductCard
                      image="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                      title="Casual Gray Shirt Dress"
                      price="$49.00"
                      colors={["bg-gray-300", "bg-blue-300", "bg-orange-500"]}
                      href="/product/casual-gray-shirt-dress"
                    />
                    <ProductCard
                      image="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                      title="Red Earrings Set"
                      price="$29.00"
                      badge="Sale"
                      href="/product/red-earrings-set"
                    />
                    <ProductCard
                      image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                      title="Gift Box Large Pouch"
                      price="$39.00"
                      href="/product/gift-box-large-pouch"
                    />
                    <ProductCard
                      image="https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                      title="Leather Wallet"
                      price="$49.00"
                      href="/product/leather-wallet"
                    />
                    <ProductCard
                      image="https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                      title="Blue Floral Dress"
                      price="$69.00"
                      href="/product/blue-floral-dress"
                    />
                    <ProductCard
                      image="https://images.unsplash.com/photo-1496217590455-aa63a8350eea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                      title="Summer White Dress"
                      price="$89.00"
                      colors={["bg-white", "bg-yellow-200"]}
                      href="/product/summer-white-dress"
                    />
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-center mt-8">
                    <nav className="flex items-center space-x-2">
                      <button className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors">
                        &lt;
                      </button>
                      <button className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                        1
                      </button>
                      <button className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors">
                        2
                      </button>
                      <button className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors">
                        3
                      </button>
                      <button className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors">
                        &gt;
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
