import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PaymentTerms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-8 text-center">
            Payment Terms
          </h1>
          
          <div className="space-y-6">
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Payment Structure
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#f34f38] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Initial Payment (70%)</h3>
                    <p className="text-gray-600 mt-1">
                      Required to begin production of your order. This payment secures your materials and initiates the manufacturing process.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#f34f38] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Final Payment (30%)</h3>
                    <p className="text-gray-600 mt-1">
                      Due upon receipt of your order. This payment ensures quality control and successful delivery of your items.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Important Notes
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#f34f38] mr-2">•</span>
                  All payments are processed securely through Paystack
                </li>
                <li className="flex items-start">
                  <span className="text-[#f34f38] mr-2">•</span>
                  Production will begin only after receiving the initial payment
                </li>
                <li className="flex items-start">
                  <span className="text-[#f34f38] mr-2">•</span>
                  Final payment must be completed before delivery
                </li>
                <li className="flex items-start">
                  <span className="text-[#f34f38] mr-2">•</span>
                  For any questions about payment terms, please contact our support team
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center space-y-4 pt-6">
              <Link href="/custom-order">
                <Button variant="outline" className="px-8">
                  Back to Order
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="px-8 bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] hover:from-[#ff6b6b] hover:to-[#f34f38]">
                  Contact Support
                </Button>
              </Link>
              <form action="https://checkout.paystack.com/your-paystack-reference" method="POST">
                <Button 
                  type="submit"
                  className="px-8 py-6 text-lg bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] hover:from-[#ff6b6b] hover:to-[#f34f38] text-white flex items-center gap-2"
                >
                  Continue to Payment
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 