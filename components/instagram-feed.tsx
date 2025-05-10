import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export default function InstagramFeed() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Instagram</h2>
          <p className="text-gray-500">Follow us on Instagram for more inspiration</p>
        </div>
        <div className="gradient-card p-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Link href="#" className="group relative overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Instagram post"
                width={300}
                height={300}
                className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 to-black/0 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </Link>
            <Link href="#" className="group relative overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Instagram post"
                width={300}
                height={300}
                className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 to-black/0 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </Link>
            <Link href="#" className="group relative overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Instagram post"
                width={300}
                height={300}
                className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 to-black/0 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </Link>
            <Link href="#" className="group relative overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Instagram post"
                width={300}
                height={300}
                className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 to-black/0 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
