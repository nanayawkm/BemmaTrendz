"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import styles from "./gallery.module.css";

const galleryItems = [
  {
    name: "Ofosua Afric Bubu",
    frontImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=60",
    backImage: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60",
    description: "Classic African-inspired design with modern elegance"
  },
  {
    name: "Maya Bubu",
    frontImage: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=800&auto=format&fit=crop&q=60",
    backImage: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60",
    description: "Contemporary style with flowing silhouette"
  },
  {
    name: "Cara Bubu",
    frontImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=60",
    backImage: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=800&auto=format&fit=crop&q=60",
    description: "Elegant and sophisticated design"
  },
  {
    name: "Ohemaa Bubu",
    frontImage: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60",
    backImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=60",
    description: "Royal-inspired design with intricate details"
  },
  {
    name: "Adre Silk Bubu",
    frontImage: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=800&auto=format&fit=crop&q=60",
    backImage: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60",
    description: "Luxurious silk fabric with premium finish"
  }
];

export default function Gallery() {
  const [flippedItems, setFlippedItems] = useState<{ [key: string]: boolean }>({});

  const toggleFlip = (itemName: string) => {
    setFlippedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Collection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our exclusive collection of Bubu styles. Click on any image to see the back view.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.name}
              className={`group ${styles.group}`}
            >
              <div
                className={`relative w-full h-[500px] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${styles.transformStyle3d} ${
                  flippedItems[item.name] ? styles.rotateY180 : ''
                }`}
                onClick={() => toggleFlip(item.name)}
              >
                {/* Front */}
                <div className={`absolute w-full h-full ${styles.backfaceHidden} ${
                  flippedItems[item.name] ? 'hidden' : 'block'
                }`}>
                  <Image
                    src={item.frontImage}
                    alt={`${item.name} - Front`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-white/90 text-sm">{item.description}</p>
                      <p className="text-white/80 text-sm mt-2">Click to see back view</p>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className={`absolute w-full h-full ${styles.backfaceHidden} ${styles.rotateY180} ${
                  flippedItems[item.name] ? 'block' : 'hidden'
                }`}>
                  <Image
                    src={item.backImage}
                    alt={`${item.name} - Back`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-white/90 text-sm">Back View</p>
                      <p className="text-white/80 text-sm mt-2">Click to see front view</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 