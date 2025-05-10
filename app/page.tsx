import BlogCard from "@/components/blog-card";
import BrandLogo from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Image from "next/image";
import InstagramFeed from "@/components/instagram-feed";
import Link from "next/link";
import NewsletterSignup from "@/components/newsletter-signup";
import ProductCard from "@/components/product-card";
import PromotionCard from "@/components/promotion-card";
import TestimonialSlider from "@/components/testimonial-slider";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      <main className="mx-auto max-w-7xl px-4">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20">
          <div className="container">
            <div className="hero-gradient p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 space-y-6 pb-8 md:pb-0">
                  <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                    Find Your <span className="text-[#f34f38]">Perfect</span>{" "}
                    Style
                  </h1>
                  <p className="text-gray-600 text-lg max-w-md">
                    Discover the latest fashion trends and express yourself with
                    our curated collection
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="rounded-full orange-gradient-btn px-8 py-6 text-white shadow-lg">
                      SHOP NOW
                    </Button>
                    <Button
                      variant="ghost"
                      className="px-6 py-6 text-[#f34f38] font-semibold bg-transparent border-none shadow-none hover:underline hover:bg-transparent focus:ring-0 focus:outline-none"
                    >
                      EXPLORE
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-[#f34f38]10 opacity-70"></div>
                  <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full bg-[#f34f38]5 opacity-70"></div>
                  <div className="rounded-3xl overflow-hidden shadow-xl relative z-10">
                    <Image
                      src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Fashion model with stylish outfit"
                      width={600}
                      height={700}
                      className="mx-auto object-cover h-[500px] w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">New Arrivals</h2>
              <p className="text-gray-500">Discover our latest collection</p>
            </div>
            <div className="gradient-card p-8">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <ProductCard
                  image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                  title="Casual Gray Dress"
                  price="$59.00"
                  colors={["bg-gray-300", "bg-[#f34f38]"]}
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
                  colors={["bg-amber-800", "bg-gray-400", "bg-[#f34f38]"]}
                  href="/product/brown-casual-shirt"
                />
                <ProductCard
                  image="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                  title="Casual Gray Shirt Dress"
                  price="$49.00"
                  colors={["bg-gray-300", "bg-blue-300", "bg-[#f34f38]"]}
                  href="/product/casual-gray-shirt-dress"
                />
              </div>
              <div className="mt-8 text-center">
                <Link href="/shop" className="inline-block">
                  <Button className="rounded-full orange-gradient-btn px-8 py-2 text-white shadow-md">
                    VIEW ALL PRODUCTS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="py-12">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Special Offers</h2>
              <p className="text-gray-500">
                Limited time deals you don't want to miss
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="gradient-card p-6 relative overflow-hidden">
                <div className="space-y-3 relative z-10">
                  <span className="inline-block px-3 py-1 bg-[#f34f38]10 text-[#f34f38] rounded-full text-xs font-medium">
                    40% OFF
                  </span>
                  <h3 className="text-xl font-bold">Special Make</h3>
                  <p className="text-gray-600">
                    Exclusive collection with premium quality
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border-[#f34f38] text-[#f34f38] hover:bg-[#f34f38]10"
                  >
                    SHOP NOW
                  </Button>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Sunglasses and shoes"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="gradient-card p-6 relative overflow-hidden">
                <div className="space-y-3 relative z-10">
                  <span className="inline-block px-3 py-1 bg-[#f34f38]10 text-[#f34f38] rounded-full text-xs font-medium">
                    NEW ARRIVALS
                  </span>
                  <h3 className="text-xl font-bold">Combo Offer</h3>
                  <p className="text-gray-600">
                    Buy two items and get one free
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border-[#f34f38] text-[#f34f38] hover:bg-[#f34f38]10"
                  >
                    SHOP NOW
                  </Button>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Leather bag"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="gradient-card p-6 relative overflow-hidden">
                <div className="space-y-3 relative z-10">
                  <span className="inline-block px-3 py-1 bg-[#f34f38]10 text-[#f34f38] rounded-full text-xs font-medium">
                    20% OFF
                  </span>
                  <h3 className="text-xl font-bold">New Arrival</h3>
                  <p className="text-gray-600">
                    Fresh styles for the new season
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border-[#f34f38] text-[#f34f38] hover:bg-[#f34f38]10"
                  >
                    SHOP NOW
                  </Button>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Clothing on mannequin"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Categories */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Trending Categories</h2>
              <p className="text-gray-500">Popular picks from our customers</p>
            </div>
            <div className="gradient-card p-8">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <ProductCard
                  image="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                  title="Red Earrings Set"
                  price="$29.00"
                  badge="Sale"
                  href="/product/red-earrings-set"
                />
                <ProductCard
                  image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                  title="Gift Box Large Pouch"
                  price="$39.00"
                  href="/product/gift-box-large-pouch"
                />
                <ProductCard
                  image="https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                  title="Leather Wallet"
                  price="$49.00"
                  href="/product/leather-wallet"
                />
                <ProductCard
                  image="https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                  title="Blue Floral Dress"
                  price="$69.00"
                  href="/product/blue-floral-dress"
                />
              </div>
              <div className="mt-8 text-center">
                <Link href="/shop" className="inline-block">
                  <Button className="rounded-full orange-gradient-btn px-8 py-2 text-white shadow-md">
                    VIEW ALL CATEGORIES
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-12">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Our Brands</h2>
              <p className="text-gray-500">
                Quality partnerships we're proud of
              </p>
            </div>
            <div className="gradient-card p-8">
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                <BrandLogo name="Clothing" />
                <BrandLogo name="SUNSET" />
                <BrandLogo name="VIPSTER" />
                <BrandLogo name="BARCELONA" />
              </div>
            </div>
          </div>
        </section>

        {/* Promotions */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <PromotionCard
                title="35% Offer"
                subtitle="SHOP NOW"
                image="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                bgColor="bg-white-overlay"
              />
              <PromotionCard
                title="Mega Sale Meta"
                subtitle="Upto 40% Off"
                description="Free Delivery"
                image="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                bgColor="bg-white-overlay"
              />
              <PromotionCard
                title="Special Deals"
                subtitle="Upto 40% Off"
                image="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                bgColor="bg-white-overlay"
              />
              <PromotionCard
                title="Special Deals"
                subtitle="Upto 40% Off"
                image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                bgColor="bg-white-overlay"
              />
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="py-12">
          <div className="container">
            <div className="bg-white-overlay p-6 md:p-8 rounded-3xl shadow-lg">
              <h2 className="mb-8 text-center text-2xl font-bold">
                From Our Blog
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <BlogCard
                  image="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                  title="How to Style Your Outfit"
                  date="July 23, 2023"
                  comments={5}
                />
                <BlogCard
                  image="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                  title="Trending for Fall Season"
                  date="August 15, 2023"
                  comments={3}
                />
                <BlogCard
                  image="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                  title="Best Shoes for Summer"
                  date="June 10, 2023"
                  comments={8}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialSlider />

        {/* Newsletter */}
        <NewsletterSignup />

        {/* Instagram Feed */}
        <InstagramFeed />
      </main>

      {/* Footer */}
      <footer className="bg-white pt-12 mt-12 border-t border-gray-100">
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
                  <Link
                    href="#"
                    className="hover:text-[#f34f38] transition-colors"
                  >
                    Search
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#f34f38] transition-colors"
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#f34f38] transition-colors"
                  >
                    Information
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#f34f38] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#f34f38] transition-colors"
                  >
                    Shipping Details
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#f34f38] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#f34f38] transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#f34f38] transition-colors"
                  >
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#f34f38] transition-colors"
                  >
                    Shopping & Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#f34f38] transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Information</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#f34f38] transition-colors"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#f34f38] transition-colors"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    className="hover:text-[#f34f38] transition-colors"
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#f34f38] transition-colors"
                  >
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/checkout"
                    className="hover:text-[#f34f38] transition-colors"
                  >
                    Checkout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t py-6 text-center text-sm text-gray-500">
            <p>Copyright © 2023 BemmaTrendz - All rights reserved</p>
            <div className="mt-4 flex justify-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#f34f38] to-[#f34f38]"></div>
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#f34f38] to-[#f34f38]"></div>
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#f34f38] to-[#f34f38]"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
