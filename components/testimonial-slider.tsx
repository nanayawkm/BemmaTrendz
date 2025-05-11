import Image from "next/image";

export default function TestimonialSlider() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 font-playfair tracking-wide">Client's Testimonial</h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">What our customers say about us</p>
        </div>
        <div className="gradient-card p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[#fff5f4] via-[#fff0ee] to-white shadow-xl rounded-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12">
            <div className="hidden md:block md:w-1/3 md:pr-6">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-0 pb-[133%]">
                  <Image
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                    alt="Fashion items"
                    fill
                    sizes="(max-width: 768px) 0vw, (max-width: 1024px) 33vw, 400px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 px-4 sm:px-6 md:px-12 py-6">
              <div className="text-center">
                <p className="mb-6 sm:mb-8 text-base sm:text-xl md:text-2xl italic text-gray-700 font-light">
                  "Thank you for such beautiful clothing and exceptional
                  service! I've been a loyal customer for over 3 years and have
                  never been disappointed."
                </p>
                <div className="mb-4 sm:mb-5">
                  <div className="mx-auto h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-full border-4 border-white shadow-md relative">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                      alt="Testimonial author"
                      fill
                      sizes="(max-width: 375px) 64px, 80px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h4 className="font-semibold text-base sm:text-lg">Jessica Thompson</h4>
                <p className="text-sm sm:text-base text-gray-600">Fashion Blogger</p>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-10 flex justify-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#f34f38]"></div>
            <div className="h-2 w-2 rounded-full bg-[#f34f38] opacity-70"></div>
            <div className="h-2 w-2 rounded-full bg-[#f34f38] opacity-70"></div>
            <div className="h-2 w-2 rounded-full bg-[#f34f38] opacity-70"></div>
            <div className="h-2 w-2 rounded-full bg-[#f34f38] opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
