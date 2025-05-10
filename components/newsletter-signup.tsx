import { Button } from "@/components/ui/button";

export default function NewsletterSignup() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="gradient-card p-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-2">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Sign up and get 20% discount on your first purchase
            </p>
            <div className="flex overflow-hidden rounded-full border border-gray-200 bg-white shadow-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full border-0 px-4 py-3 focus:outline-none"
              />
              <Button className="rounded-r-full orange-gradient-btn px-6 text-white">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
