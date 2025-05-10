"use client";

import Image from "next/image";

const fabricCategories = [
  {
    name: "Silk",
    description: "Luxurious and smooth fabric perfect for elegant designs",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Cotton",
    description: "Comfortable and breathable fabric for everyday wear",
    image: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Lace",
    description: "Delicate and intricate fabric for special occasions",
    image: "https://images.unsplash.com/photo-1583846552345-d2aa9d764209?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Velvet",
    description: "Rich and plush fabric for luxurious designs",
    image: "https://images.unsplash.com/photo-1599735094978-5bca5e12c50e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

export default function FabricCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12">Fabric Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fabricCategories.map((category, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-80 w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-display font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 