"use client";

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
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import QuubeLogo from "@/components/quube-logo";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps"
  });

  const autoplay = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(autoplay, 3000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Elegant fashion model in white dress"
    },
    {
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Summer collection showcase"
    },
    {
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Casual street style fashion"
    },
    {
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Modern fashion collection"
    },
    {
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Luxury fashion showcase"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      <main className="mx-auto max-w-7xl px-4">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20">
          <div className="container">
            <div className="hero-gradient p-8 md:p-12 bg-gradient-to-br from-[#f34f38]/10 via-[#f34f38]/5 to-transparent">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 space-y-6 pb-8 md:pb-0">
                  <h1 className="font-playfair text-4xl font-bold md:text-5xl lg:text-6xl leading-tight tracking-wide">
                    <span className="block text-[#b82e1a] mb-2">Embrace</span>
                    <span className="block text-[#b82e1a] mb-2">Comfort,</span>
                    <span className="block text-[#b82e1a] mb-2">Elevate</span>
                    <span className="block text-[#b82e1a]">Your Style</span>
                  </h1>
                  <p className="text-gray-600 text-lg max-w-md font-montserrat">
                    Discover the latest fashion trends and express yourself with
                    our curated collection
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/shop">
                      <Button className="rounded-full bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] px-8 py-6 text-white shadow-lg hover:from-[#e23d27] hover:to-[#ff5252] transition-all duration-300">
                        SHOP NOW
                      </Button>
                    </Link>
                    <Link href="/gallery">
                      <Button
                        variant="ghost"
                        className="px-6 py-6 text-[#f34f38] font-semibold bg-transparent border-none shadow-none hover:underline hover:bg-transparent focus:ring-0 focus:outline-none"
                      >
                        EXPLORE
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-[#f34f38]10 opacity-70"></div>
                  <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full bg-[#f34f38]5 opacity-70"></div>
                  <div className="rounded-3xl overflow-hidden shadow-xl relative z-10">
                    <div className="relative">
                      <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                          {heroSlides.map((slide, index) => (
                            <div key={index} className="flex-[0_0_100%] min-w-0">
                              <Image
                                src={slide.image}
                                alt={slide.alt}
                                width={600}
                                height={700}
                                className="mx-auto object-cover h-[500px] w-full"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
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
            <div className="gradient-card p-8 bg-gradient-to-br from-white via-[#fff5f4] to-[#fff0ee] shadow-xl rounded-2xl">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <ProductCard
                  image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                  title="Casual Gray Dress"
                  price="$59.00"
                  href="/product/casual-gray-dress"
                />
                <ProductCard
                  image="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                  title="Vintage Floral Dress"
                  price="$79.00"
                  href="/product/vintage-floral-dress"
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
                  <Button className="rounded-full bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] px-8 py-2 text-white shadow-md hover:from-[#e23d27] hover:to-[#ff5252] transition-all duration-300">
                    VIEW ALL PRODUCTS
                  </Button>
                </Link>
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
            <div className="gradient-card p-8 bg-gradient-to-br from-white via-[#fff5f4] to-[#fff0ee] shadow-xl rounded-2xl">
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
                  <Button className="rounded-full bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] px-8 py-2 text-white shadow-md hover:from-[#e23d27] hover:to-[#ff5252] transition-all duration-300">
                    VIEW ALL CATEGORIES
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Order Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Custom Orders</h2>
              <p className="text-gray-500">
                Design your perfect outfit with our custom tailoring service
              </p>
            </div>
            <div className="gradient-card p-8 bg-gradient-to-br from-white via-[#fff5f4] to-[#fff0ee] shadow-xl rounded-2xl text-center">
              <div className="max-w-2xl mx-auto mb-6">
                <p className="text-lg mb-4">Bring your vision to life with our expert tailors and premium fabrics.</p>
                <Link href="/custom-order" className="inline-block">
                  <Button className="rounded-full bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] px-8 py-3 text-white shadow-md hover:from-[#e23d27] hover:to-[#ff5252] transition-all duration-300">
                    START CUSTOM ORDER
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <Image 
                    src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Premium Fabric"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover"
                    priority
                  />
                  <div className="p-3">
                    <h3 className="font-medium">Premium Fabrics</h3>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <Image 
                    src="https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Custom Designs"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover"
                    priority
                  />
                  <div className="p-3">
                    <h3 className="font-medium">Custom Designs</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="py-12">
          <div className="container">
            <div className="bg-white-overlay p-6 md:p-8 rounded-3xl shadow-lg bg-gradient-to-br from-white via-[#fff5f4] to-[#fff0ee]">
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
        <InstagramFeed instagramUrl="https://instagram.com/bemmatrendz" />
      </main>

      {/* Footer */}
      <footer className="bg-white pt-12 mt-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
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
                <li className="mt-3">
                  <a 
                    href="https://wa.me/15551234567" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 bg-[#25D366] text-white px-3 py-2 rounded-lg hover:bg-[#128C7E] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.019c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.72.045.477-.096.682z"/>
                    </svg>
                    <span>Order via WhatsApp</span>
                  </a>
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
                    href="/custom-order"
                    className="hover:text-[#f34f38] transition-colors"
                  >
                    Custom Orders
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
              <div className="h-6 w-6 rounded-full bg-[#f34f38]"></div>
              <div className="h-6 w-6 rounded-full bg-[#f34f38]"></div>
              <div className="h-6 w-6 rounded-full bg-[#f34f38]"></div>
            </div>
            <div className="mt-4 text-right pr-4">
              <a 
                href="https://quubetech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-[#b82e1a] transition-colors duration-300 inline-flex items-center gap-1.5"
              >
                webdesign by <QuubeLogo />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
