import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  colors?: string[];
  badge?: string;
  href?: string;
}

export default function ProductCard({
  image,
  title,
  price,
  colors,
  badge,
  href = "#",
}: ProductCardProps) {
  return (
    <div className="group relative h-full flex flex-col">
      {badge && (
        <span className="absolute left-3 top-3 z-10 bg-[#f34f38] px-3 py-1 text-xs text-white rounded-full shadow-sm">
          {badge}
        </span>
      )}
      <Link href={href} className="block flex-grow">
        <div className="relative mb-3 xs:mb-4 overflow-hidden rounded-xl xs:rounded-2xl bg-white shadow-md h-0 pb-[125%]">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={300}
            height={350}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <button className="absolute right-2 xs:right-3 top-2 xs:top-3 rounded-full bg-white p-1.5 xs:p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-md hover:bg-gray-50">
            <Heart className="h-4 w-4 xs:h-5 xs:w-5 text-[#f34f38]" />
          </button>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>
      <div className="flex flex-col p-1 xs:p-2">
        <h3 className="mb-1 xs:mb-2 text-sm xs:text-base font-medium line-clamp-1">{title}</h3>
        <p className="mb-2 xs:mb-3 font-semibold text-black text-base xs:text-lg">{price}</p>
        {colors && (
          <div className="flex gap-2 mt-auto">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`h-5 w-5 rounded-full ${color} border border-gray-200 shadow-sm cursor-pointer hover:scale-110 transition-transform duration-200`}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
