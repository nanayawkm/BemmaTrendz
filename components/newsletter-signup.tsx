import { Button } from "@/components/ui/button";

export default function NewsletterSignup() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#fff5f3]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="gradient-card p-6 sm:p-8 md:p-12 bg-gradient-to-br from-[#fff5f4] via-[#fff0ee] to-white shadow-xl rounded-2xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-playfair tracking-wide">Join Our Newsletter</h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
              Sign up and get 20% discount on your first purchase
            </p>
            <div className="flex flex-col sm:flex-row overflow-hidden rounded-full border border-gray-200 bg-white shadow-lg max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full border-0 px-5 sm:px-6 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-[#f34f38]/20 rounded-t-full sm:rounded-t-none sm:rounded-l-full text-base"
              />
              <Button className="rounded-b-full sm:rounded-b-none sm:rounded-r-full bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] px-5 sm:px-8 py-3 sm:py-4 text-white hover:from-[#e23d27] hover:to-[#ff5252] text-sm sm:text-base font-medium shadow-md">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
