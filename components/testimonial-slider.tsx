import Image from "next/image";

export default function TestimonialSlider() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Client's Testimonial</h2>
          <p className="text-gray-500">What our customers say about us</p>
        </div>
        <div className="gradient-card p-8">
          <div className="flex items-center">
            <div className="hidden md:block md:w-1/3">
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                  alt="Fashion items"
                  width={300}
                  height={400}
                  className="mx-auto h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 px-4 md:px-12">
              <div className="text-center">
                <p className="mb-6 text-lg italic text-gray-600">
                  "Thank you for such beautiful clothing and exceptional
                  service! I've been a loyal customer for over 3 years and have
                  never been disappointed."
                </p>
                <div className="mb-4">
                  <div className="mx-auto h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                      alt="Testimonial author"
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <h4 className="font-semibold">Jessica Thompson</h4>
                <p className="text-sm text-gray-500">Fashion Blogger</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-1">
            <div className="h-2 w-2 rounded-full bg-[#f34f38]"></div>
            <div className="h-2 w-2 rounded-full bg-[#f34f38]"></div>
            <div className="h-2 w-2 rounded-full bg-[#f34f38]"></div>
            <div className="h-2 w-2 rounded-full bg-[#f34f38]"></div>
            <div className="h-2 w-2 rounded-full bg-[#f34f38]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
