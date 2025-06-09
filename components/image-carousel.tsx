"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/image";

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    alt: "Bubu Dress Collection"
  },
  {
    url: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern Bubu Styles"
  },
  {
    url: "https://images.unsplash.com/photo-1583846552345-d2aa9d764209?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    alt: "Embroidered Bubu"
  },
  {
    url: "https://images.unsplash.com/photo-1599735094978-5bca5e12c50e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    alt: "Fitted Bubu"
  }
];

export default function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps"
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-[500px] relative overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {carouselImages.map((image, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative h-[500px]">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h2 className="text-4xl font-bold text-white text-center px-4">
                  {image.alt}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 