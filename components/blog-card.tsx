import Image from "next/image";
import Link from "next/link";
import { Calendar, MessageSquare } from "lucide-react";

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  comments: number;
}

export default function BlogCard({
  image,
  title,
  date,
  comments,
}: BlogCardProps) {
  return (
    <div className="group h-full flex flex-col">
      <div className="mb-3 xs:mb-5 overflow-hidden rounded-xl xs:rounded-2xl shadow-md relative h-0 pb-[60%]">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={240}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
      <div className="space-y-2 xs:space-y-3 flex-grow flex flex-col p-1 xs:p-2">
        <div className="flex items-center gap-4 xs:gap-6 text-[10px] xs:text-xs text-gray-500">
          <div className="flex items-center gap-1 xs:gap-1.5">
            <Calendar className="h-3 w-3 xs:h-3.5 xs:w-3.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1 xs:gap-1.5">
            <MessageSquare className="h-3 w-3 xs:h-3.5 xs:w-3.5" />
            <span>{comments} Comments</span>
          </div>
        </div>
        <h3 className="font-medium text-sm xs:text-base group-hover:text-[#f34f38] transition-colors line-clamp-2">
          <Link href="#">{title}</Link>
        </h3>
        <Link
          href="#"
          className="inline-block text-xs xs:text-sm font-medium text-gray-500 hover:text-[#f34f38] transition-colors mt-auto"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
