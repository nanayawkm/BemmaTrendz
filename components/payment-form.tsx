"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCallback } from "react";

export default function PaymentForm() {
  const handlePayment = useCallback(async () => {
    try {
      // Initialize Paystack payment
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 35000, // Amount in kobo (₦350.00)
          email: 'customer@example.com', // This should be dynamic in production
          callback_url: `${window.location.origin}/payment-success`,
        }),
      });

      const data = await response.json();
      
      if (data.authorization_url) {
        window.location.href = data.authorization_url;
      }
    } catch (error) {
      console.error('Payment initialization failed:', error);
      // Handle error appropriately
    }
  }, []);

  return (
    <Button 
      onClick={handlePayment}
      className="px-8 py-6 text-lg bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] hover:from-[#ff6b6b] hover:to-[#f34f38] text-white flex items-center gap-2 font-montserrat"
    >
      Continue to Payment
      <ArrowRight className="w-5 h-5" />
    </Button>
  );
} 