import Image from "next/image"
import { Button } from "@/components/ui/button"

interface PromotionCardProps {
  title: string
  subtitle: string
  description?: string
  image: string
  bgColor?: string
}

export default function PromotionCard({
  title,
  subtitle,
  description,
  image,
  bgColor = "bg-gray-100",
}: PromotionCardProps) {
  return (
    <div className={`relative overflow-hidden ${bgColor} p-6 rounded-3xl shadow-lg`}>
      <div className="relative z-10 space-y-3">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="font-medium">{subtitle}</p>
        {description && <p className="text-sm text-gray-600">{description}</p>}
        <Button
          variant="outline"
          className="rounded-full border-orange-500 text-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white"
        >
          SHOP NOW
        </Button>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
