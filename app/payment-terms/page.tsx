"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from 'next/dynamic';

// Dynamically import the form with no SSR
const PaymentForm = dynamic(() => import('@/components/payment-form'), {
  ssr: false,
  loading: () => (
    <Button 
      className="px-8 py-6 text-lg bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] hover:from-[#ff6b6b] hover:to-[#f34f38] text-white flex items-center gap-2 font-montserrat"
    >
      Loading Payment...
    </Button>
  )
});

export default function PaymentTerms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-8 text-center tracking-wide">
            Payment Terms
          </h1>
          
          <div className="space-y-8">
            <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-6">
                Payment Structure
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f34f38] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-montserrat font-medium text-lg text-gray-900">Initial Payment</h3>
                      <div className="text-right">
                        <div className="flex items-baseline justify-end">
                          <span className="text-sm font-medium text-black mr-1">₵</span>
                          <span className="text-2xl font-bold text-black tracking-tight">350.00</span>
                        </div>
                        <span className="text-sm text-gray-500">70% of total</span>
                      </div>
                    </div>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Required to begin production of your order. This payment secures your materials and initiates the manufacturing process.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f34f38] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-montserrat font-medium text-lg text-gray-900">Final Payment</h3>
                      <div className="text-right">
                        <div className="flex items-baseline justify-end">
                          <span className="text-sm font-medium text-black mr-1">₵</span>
                          <span className="text-2xl font-bold text-black tracking-tight">150.00</span>
                        </div>
                        <span className="text-sm text-gray-500">30% of total</span>
                      </div>
                    </div>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Due upon receipt of your order. This payment ensures quality control and successful delivery of your items.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-orange-200">
                  <div className="flex justify-between items-center">
                    <span className="font-montserrat font-medium text-lg text-gray-900">Total Amount</span>
                    <div className="text-right">
                      <div className="flex items-baseline justify-end">
                        <span className="text-base font-medium text-black mr-1">₵</span>
                        <span className="text-3xl font-bold text-black tracking-tight">500.00</span>
                      </div>
                      <span className="text-sm text-gray-500">Including all fees</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-6">
                Important Notes
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#f34f38] mr-3 text-lg">•</span>
                  <span className="font-montserrat font-light leading-relaxed">All payments are processed securely through Paystack</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f34f38] mr-3 text-lg">•</span>
                  <span className="font-montserrat font-light leading-relaxed">Production will begin only after receiving the initial payment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f34f38] mr-3 text-lg">•</span>
                  <span className="font-montserrat font-light leading-relaxed">Final payment must be completed before delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f34f38] mr-3 text-lg">•</span>
                  <span className="font-montserrat font-light leading-relaxed">For any questions about payment terms, please contact our support team</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center space-y-4 pt-8">
              <Link href="/custom-order">
                <Button variant="outline" className="px-8 font-montserrat">
                  Back to Order
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="px-8 bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] hover:from-[#ff6b6b] hover:to-[#f34f38] font-montserrat">
                  Contact Support
                </Button>
              </Link>
              <PaymentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 