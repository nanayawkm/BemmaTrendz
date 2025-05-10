import Image from "next/image"
import Link from "next/link"
import { Star, Truck, ShieldCheck, Heart, Share2, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import Header from "@/components/header"

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm mb-6">
            <Link href="/" className="text-gray-500 hover:text-orange-500 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="text-gray-500 hover:text-orange-500 transition-colors">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 font-medium">Casual Gray Dress</span>
          </div>

          <div className="bg-white-overlay p-6 rounded-3xl shadow-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Casual Gray Dress"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="rounded-xl overflow-hidden border-2 border-orange-500">
                    <Image
                      src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                      alt="Casual Gray Dress Thumbnail 1"
                      width={150}
                      height={150}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border-2 border-transparent hover:border-orange-500 transition-colors">
                    <Image
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                      alt="Casual Gray Dress Thumbnail 2"
                      width={150}
                      height={150}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border-2 border-transparent hover:border-orange-500 transition-colors">
                    <Image
                      src="https://images.unsplash.com/photo-1496217590455-aa63a8350eea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                      alt="Casual Gray Dress Thumbnail 3"
                      width={150}
                      height={150}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border-2 border-transparent hover:border-orange-500 transition-colors">
                    <Image
                      src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                      alt="Casual Gray Dress Thumbnail 4"
                      width={150}
                      height={150}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Casual Gray Dress</h1>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">(24 reviews)</span>
                  </div>
                  <p className="text-2xl font-bold text-orange-600 mb-4">$59.00</p>
                  <p className="text-gray-600 mb-4">
                    A versatile and comfortable casual gray dress perfect for any occasion. Made with high-quality
                    fabric that ensures comfort and durability.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Color Selection */}
                  <div>
                    <h3 className="font-medium mb-2">Color</h3>
                    <div className="flex gap-2">
                      <button className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white shadow-md hover:scale-110 transition-transform"></button>
                      <button className="h-8 w-8 rounded-full bg-orange-500 border-2 border-white shadow-md hover:scale-110 transition-transform"></button>
                      <button className="h-8 w-8 rounded-full bg-blue-300 border-2 border-white shadow-md hover:scale-110 transition-transform"></button>
                    </div>
                  </div>

                  {/* Size Selection */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">Size</h3>
                      <button className="text-sm text-orange-500 hover:underline">Size Guide</button>
                    </div>
                    <div className="flex gap-2">
                      <button className="h-10 w-10 rounded-full bg-white border border-gray-300 text-sm hover:border-orange-500 hover:text-orange-500 transition-colors">
                        XS
                      </button>
                      <button className="h-10 w-10 rounded-full bg-white border border-gray-300 text-sm hover:border-orange-500 hover:text-orange-500 transition-colors">
                        S
                      </button>
                      <button className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white border border-transparent">
                        M
                      </button>
                      <button className="h-10 w-10 rounded-full bg-white border border-gray-300 text-sm hover:border-orange-500 hover:text-orange-500 transition-colors">
                        L
                      </button>
                      <button className="h-10 w-10 rounded-full bg-white border border-gray-300 text-sm hover:border-orange-500 hover:text-orange-500 transition-colors">
                        XL
                      </button>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <h3 className="font-medium mb-2">Quantity</h3>
                    <div className="flex items-center">
                      <button className="h-10 w-10 rounded-l-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                        -
                      </button>
                      <input
                        type="number"
                        value="1"
                        min="1"
                        className="h-10 w-16 border-t border-b border-gray-300 text-center focus:outline-none"
                      />
                      <button className="h-10 w-10 rounded-r-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                        +
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-md">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full border-orange-500 text-orange-500 hover:bg-orange-50"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full border-orange-500 text-orange-500 hover:bg-orange-50"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="border-t pt-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Truck className="h-4 w-4 text-orange-500" />
                    <span>Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ShieldCheck className="h-4 w-4 text-orange-500" />
                    <span>2 year warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description Tabs */}
          <div className="bg-white-overlay p-6 rounded-3xl shadow-lg mb-12">
            <div className="border-b mb-6">
              <div className="flex flex-wrap -mb-px">
                <button className="inline-block p-4 border-b-2 border-orange-500 text-orange-500 font-medium">
                  Description
                </button>
                <button className="inline-block p-4 border-b-2 border-transparent hover:text-orange-500 hover:border-orange-200 transition-colors">
                  Additional Information
                </button>
                <button className="inline-block p-4 border-b-2 border-transparent hover:text-orange-500 hover:border-orange-200 transition-colors">
                  Reviews (24)
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <p>
                This casual gray dress is a versatile addition to any wardrobe. Made from a soft, breathable blend of
                cotton and polyester, it offers both comfort and durability for all-day wear.
              </p>
              <p>
                The relaxed fit and knee-length design make it suitable for various occasions, from casual outings to
                semi-formal events when paired with the right accessories. The subtle gray tone ensures it can be easily
                matched with different colors and styles.
              </p>
              <h3 className="font-medium mt-4">Features:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Soft cotton-polyester blend (60% cotton, 40% polyester)</li>
                <li>Relaxed fit with slight stretch for comfort</li>
                <li>Side pockets</li>
                <li>Machine washable</li>
                <li>Available in multiple colors</li>
              </ul>
            </div>
          </div>

          {/* Related Products */}
          <div className="bg-white-overlay p-6 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <ProductCard
                image="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                title="Vintage Floral Dress"
                price="$79.00"
                colors={["bg-gray-200", "bg-blue-300"]}
                href="/product/vintage-floral-dress"
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                title="Casual Gray Shirt Dress"
                price="$49.00"
                colors={["bg-gray-300", "bg-blue-300", "bg-orange-500"]}
                href="/product/casual-gray-shirt-dress"
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
