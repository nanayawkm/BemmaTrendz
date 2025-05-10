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
    <div className="group">
      <div className="mb-4 overflow-hidden rounded-2xl shadow-md">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={350}
          height={200}
          className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="h-3 w-3" />
            <span>{comments} Comments</span>
          </div>
        </div>
        <h3 className="font-medium group-hover:text-[#f34f38] transition-colors">
          <Link href="#">{title}</Link>
        </h3>
        <Link
          href="#"
          className="inline-block text-sm font-medium text-gray-500 hover:text-[#f34f38] transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
