import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

interface ProductCardProps {
  image: string
  title: string
  price: string
  colors?: string[]
  badge?: string
  href?: string
}

export default function ProductCard({ image, title, price, colors, badge, href = "#" }: ProductCardProps) {
  return (
    <div className="group relative">
      {badge && (
        <span className="absolute left-2 top-2 z-10 bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 text-xs text-white rounded-full shadow-sm">
          {badge}
        </span>
      )}
      <Link href={href} className="block">
        <div className="relative mb-3 overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={240}
            height={300}
            className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <button className="absolute right-2 top-2 rounded-full bg-white p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-sm">
            <Heart className="h-4 w-4 text-orange-500" />
          </button>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>
      <h3 className="mb-1 text-sm font-medium">{title}</h3>
      <p className="mb-2 font-semibold text-orange-600">{price}</p>
      {colors && (
        <div className="flex gap-1">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-full ${color} border border-gray-200 shadow-sm cursor-pointer hover:scale-110 transition-transform duration-200`}
            ></div>
          ))}
        </div>
      )}
    </div>
  )
}
