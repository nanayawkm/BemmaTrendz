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

      {/* Hero Section - Fullscreen */}
      <section className="relative w-full bg-gradient-to-br from-[#f34f38]/40 via-[#f34f38]/25 to-[#f34f38]/10 min-h-[80vh] sm:min-h-screen flex items-center">
        <div className="w-full px-0">
          <div className="py-10 sm:py-16 md:py-24 lg:py-28 rounded-none">
            <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-none relative z-10">
              <div className="flex flex-col md:flex-row md:items-start lg:items-center gap-8 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 justify-between">
                <div className="md:w-5/12 lg:w-5/12 xl:w-5/12 space-y-5 sm:space-y-6 md:space-y-8 pb-4 sm:pb-6 md:pb-0 md:pl-0 lg:pl-0 xl:pl-0">
                  <h1 className="font-playfair text-[3rem] xs:text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] font-extrabold leading-tight text-center text-[#b82e1a] drop-shadow-[0_4px_16px_rgba(0,0,0,0.18)]">
                    <span className="block mb-4 sm:mb-6 md:mb-8">Embrace Comfort,</span>
                    <span className="block">Elevate Your Style.</span>
                  </h1>
                  <p className="text-gray-700 text-base xs:text-lg sm:text-xl max-w-lg font-montserrat text-left">
                    Discover the latest fashion trends and express yourself with our curated collection.
                  </p>
                  <div className="flex flex-wrap gap-4 xs:gap-5 sm:gap-6 justify-start">
                    <Link href="/shop">
                      <Button className="rounded-full bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] px-5 xs:px-7 sm:px-9 py-3 xs:py-4 sm:py-6 text-white shadow-lg hover:from-[#e23d27] hover:to-[#ff5252] transition-all duration-300 text-sm xs:text-base sm:text-lg">
                        SHOP NOW
                      </Button>
                    </Link>
                    <Link href="/gallery">
                      <Button
                        variant="ghost"
                        className="px-4 xs:px-5 sm:px-7 py-3 xs:py-4 sm:py-6 text-[#f34f38] font-semibold bg-transparent border-none shadow-none hover:underline hover:bg-transparent focus:ring-0 focus:outline-none text-sm xs:text-base sm:text-lg"
                      >
                        EXPLORE
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="md:w-7/12 lg:w-7/12 xl:w-6/12 relative md:pr-0 lg:pr-0 xl:pr-0">
                  <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-[#f34f38]/20 opacity-80"></div>
                  <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-[#f34f38]/15 opacity-80"></div>
                  <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
                    <div className="relative">
                      <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                          {heroSlides.map((slide, index) => (
                            <div key={index} className="flex-[0_0_100%] min-w-0">
                              <div className="relative h-0 pb-[100%] sm:pb-[90%] md:pb-[75%] lg:pb-[65%]">
                                <Image
                                  src={slide.image}
                                  alt={slide.alt}
                                  fill
                                  priority
                                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 800px"
                                  className="absolute inset-0 object-cover"
                                />
                              </div>
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
        </div>
      </section>

      {/* Main Content - Smaller Container */}
      <main className="w-full px-0 mt-20 sm:mt-24 md:mt-28">
        {/* New Arrivals */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-center font-playfair tracking-wide text-black">New Arrivals</h2>
            <p className="text-gray-600 text-center mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">Discover our latest collection of fashionable items, designed to elevate your style.</p>
            <div className="p-6 sm:p-8 md:p-10 bg-white shadow-xl rounded-2xl text-center">
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 md:grid-cols-4">
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
              <div className="mt-8 sm:mt-10 md:mt-12 text-center">
                <Link href="/shop" className="inline-block">
                  <Button className="rounded-full bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] px-5 xs:px-7 sm:px-9 py-3 text-white shadow-lg hover:from-[#e23d27] hover:to-[#ff5252] transition-all duration-300 text-sm xs:text-base">
                    VIEW ALL PRODUCTS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Categories */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#fff5f3]">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 font-playfair tracking-wide">Trending Categories</h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">Popular picks from our customers.</p>
            </div>
            <div className="p-6 sm:p-8 md:p-10 bg-white shadow-xl rounded-2xl">
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 md:grid-cols-4">
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
              <div className="mt-8 sm:mt-10 md:mt-12 text-center">
                <Link href="/shop" className="inline-block">
                  <Button className="rounded-full bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] px-5 xs:px-7 sm:px-9 py-3 text-white shadow-lg hover:from-[#e23d27] hover:to-[#ff5252] transition-all duration-300 text-sm xs:text-base">
                    VIEW ALL CATEGORIES
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Order Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 font-playfair tracking-wide">Custom Orders</h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                Design your perfect outfit with our custom tailoring service.
              </p>
            </div>
            <div className="p-6 sm:p-8 md:p-10 bg-white shadow-xl rounded-2xl text-center">
              <div className="max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10">
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">Bring your vision to life with our expert tailors and premium fabrics.</p>
                <Link href="/custom-order" className="inline-block">
                  <Button className="rounded-full bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] px-5 xs:px-7 sm:px-9 py-3 sm:py-4 text-white shadow-lg hover:from-[#e23d27] hover:to-[#ff5252] transition-all duration-300 text-sm xs:text-base">
                    START CUSTOM ORDER
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-0 pb-[80%]">
                    <Image 
                      src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                      alt="Premium Fabric"
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 300px"
                      className="absolute inset-0 object-cover hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-medium text-base sm:text-lg">Premium Fabrics</h3>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-0 pb-[80%]">
                    <Image 
                      src="https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                      alt="Custom Designs"
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 300px"
                      className="absolute inset-0 object-cover hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-medium text-base sm:text-lg">Custom Designs</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#fff5f3]">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 font-playfair tracking-wide">From Our Blog</h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">Fashion tips and trends to keep you stylish</p>
            </div>
            <div className="p-6 sm:p-8 md:p-10 bg-white shadow-xl rounded-2xl">
              <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
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
        {/* <TestimonialSlider /> */}

        {/* Newsletter */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 font-playfair tracking-wide text-black">Join our newsletter</h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">Stay updated with the latest trends and exclusive offers.</p>
            </div>
            <div className="p-6 sm:p-8 md:p-10 bg-white shadow-xl rounded-2xl text-center">
              <form className="flex flex-col sm:flex-row gap-4 justify-center">
                <input type="email" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f34f38]" />
                <button type="submit" className="px-6 py-2 bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] text-white rounded-lg shadow-lg hover:from-[#e23d27] hover:to-[#ff5252] transition-all duration-300">Subscribe</button>
              </form>
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        {/* <InstagramFeed instagramUrl="https://instagram.com/bemmatrendz" /> */}
      </main>

      {/* Footer */}
      <footer className="bg-white pt-6 xs:pt-8 sm:pt-12 mt-6 xs:mt-8 sm:mt-12 border-t border-gray-100">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 pb-4 xs:pb-6 sm:pb-8 md:grid-cols-4">
            <div>
              <h3 className="mb-2 xs:mb-4 font-bold text-sm xs:text-base">Contact Us</h3>
              <ul className="space-y-1 xs:space-y-2 text-xs xs:text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span>123 Main Street, New York, NY 10001</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>info@bemmatrendz.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="mt-3 xs:mt-4">
                  <a 
                    href="https://wa.me/15551234567" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center sm:justify-start gap-1 xs:gap-2 bg-[#25D366] text-white px-3 xs:px-4 py-2 xs:py-3 sm:px-3 sm:py-2 rounded-lg hover:bg-[#128C7E] transition-colors shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 xs:w-5 xs:h-5 sm:w-4 sm:h-4">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.019c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.72.045.477-.096.682z"/>
                    </svg>
                    <span className="font-medium text-xs xs:text-sm">Order via WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 xs:mb-4 font-bold text-sm xs:text-base">Help</h3>
              <ul className="space-y-1 xs:space-y-2 text-xs xs:text-sm text-gray-600">
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
              <h3 className="mb-2 xs:mb-4 font-bold text-sm xs:text-base">Support</h3>
              <ul className="space-y-1 xs:space-y-2 text-xs xs:text-sm text-gray-600">
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
              <h3 className="mb-2 xs:mb-4 font-bold text-sm xs:text-base">Information</h3>
              <ul className="space-y-1 xs:space-y-2 text-xs xs:text-sm text-gray-600">
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
