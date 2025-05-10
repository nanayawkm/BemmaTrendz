import Image from "next/image";
import { Button } from "@/components/ui/button";

interface PromotionCardProps {
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  bgColor?: string;
}

export default function PromotionCard({
  title,
  subtitle,
  description,
  image,
  bgColor = "bg-gray-100",
}: PromotionCardProps) {
  return (
    <div
      className={`relative overflow-hidden ${bgColor} p-8 rounded-3xl shadow-lg flex flex-col justify-between min-h-[280px]`}
    >
      <div className="relative space-y-3 max-w-[55%] z-10">
        <span className="inline-block px-3 py-1 bg-[#f34f38]10 text-[#f34f38] rounded-full text-xs font-medium mb-2">
          SPECIAL OFFER
        </span>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm font-medium">{subtitle}</p>
        {description && <p className="text-xs text-gray-600">{description}</p>}
        <Button
          variant="outline"
          className="rounded-full border-[#f34f38] text-[#f34f38] hover:bg-[#f34f38] hover:text-white mt-4"
        >
          SHOP NOW
        </Button>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-52 md:h-52 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={400}
          className="object-cover w-full h-full rounded-tl-[3rem]"
          priority
        />
      </div>
    </div>
  );
}
