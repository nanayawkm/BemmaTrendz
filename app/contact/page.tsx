"use client";

import Header from "@/components/header";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-display text-center mb-12">Contact Us</h1>
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-display mb-6 text-center">You can contact us by</h2>
          
          <div className="space-y-6">
            {/* Instagram */}
            <a
              href="https://instagram.com/bemmatrendz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#f34f38] text-white rounded-lg hover:bg-[#e03e27] transition-colors"
            >
              <Instagram className="w-8 h-8" />
              <div>
                <h3 className="font-semibold">Instagram</h3>
                <p className="text-sm opacity-90">@bemmatrendz</p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/bemmatrendz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#f34f38] text-white rounded-lg hover:bg-[#e03e27] transition-colors"
            >
              <Facebook className="w-8 h-8" />
              <div>
                <h3 className="font-semibold">Facebook</h3>
                <p className="text-sm opacity-90">BemmaTrendz</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/your_phone_number"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#f34f38] text-white rounded-lg hover:bg-[#e03e27] transition-colors"
            >
              <MessageCircle className="w-8 h-8" />
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-sm opacity-90">Chat with us</p>
              </div>
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">We're here to help you with any questions about our products or services.</p>
            <p className="text-sm text-gray-500">Response time: Usually within 24 hours</p>
          </div>
        </div>
      </main>
    </div>
  );
} 