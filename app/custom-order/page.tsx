"use client";

import Header from "@/components/header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import dynamic from 'next/dynamic';
import MeasurementForm from '@/components/measurement-form';

const HexColorPicker = dynamic(() => import('react-colorful').then(mod => mod.HexColorPicker), {
  ssr: false
});

// Available colors for selection
const availableColors = [
  { name: "Red", hex: "#FF0000" },
  { name: "Pink", hex: "#FFC0CB" },
  { name: "Gold", hex: "#FFD700" },
  { name: "Green", hex: "#008000" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Purple", hex: "#800080" },
  { name: "Orange", hex: "#FFA500" },
  { name: "Cyan", hex: "#00FFFF" },
  { name: "Magenta", hex: "#FF00FF" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Teal", hex: "#008080" },
  { name: "Burgundy", hex: "#800020" },
  { name: "Ivory", hex: "#FFFFF0" },
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
];

const fabricCategories = [
  {
    name: "Cotton",
    description: "Lightweight and breathable",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Silk",
    description: "Luxurious and smooth",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Linen",
    description: "Natural and durable",
    image: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Wool",
    description: "Warm and insulating",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Velvet",
    description: "Rich and plush",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Chiffon",
    description: "Light and flowing",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60"
  }
];

const bubuStyles = [
  { 
    name: "Ofosua Afric Bubu", 
    description: "Classic African-inspired design with modern elegance",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=60"
  },
  { 
    name: "Maya Bubu", 
    description: "Contemporary style with flowing silhouette",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60"
  },
  { 
    name: "Cara Bubu", 
    description: "Elegant and sophisticated design",
    image: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=800&auto=format&fit=crop&q=60"
  },
  { 
    name: "Ohemaa Bubu", 
    description: "Royal-inspired design with intricate details",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60"
  },
  { 
    name: "Adre Silk Bubu", 
    description: "Luxurious silk fabric with premium finish",
    image: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=800&auto=format&fit=crop&q=60"
  }
];

const wigCaps = [
  { name: "Classic Wig Cap", image: "https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
  { name: "Mesh Wig Cap", image: "https://images.unsplash.com/photo-1626954079979-ec4f7b05e032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
  { name: "Premium Wig Cap", image: "https://images.unsplash.com/photo-1595515106865-dd97553d7a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
];

// Predefined color palettes for inspiration
const colorPalettes = [
  { name: "Royal Elegance", primary: "#800080", secondary: "#FFD700" },
  { name: "Ocean Breeze", primary: "#0000FF", secondary: "#00FFFF" },
  { name: "Sunset Glow", primary: "#FFA500", secondary: "#FF0000" },
  { name: "Forest Harmony", primary: "#008000", secondary: "#90EE90" },
  { name: "Desert Rose", primary: "#FFC0CB", secondary: "#FFD700" },
  { name: "Midnight Mystery", primary: "#000000", secondary: "#800080" },
];

// Add this function before the CustomOrder component
function getColorName(hex: string): string {
  const colorMap: { [key: string]: string } = {
    '#FF0000': 'Red',
    '#FFC0CB': 'Pink',
    '#FFD700': 'Gold',
    '#008000': 'Green',
    '#0000FF': 'Blue',
    '#800080': 'Purple',
    '#FFA500': 'Orange',
    '#00FFFF': 'Cyan',
    '#FF00FF': 'Magenta',
    '#FFFF00': 'Yellow',
    '#008080': 'Teal',
    '#800020': 'Burgundy',
    '#FFFFF0': 'Ivory',
    '#000000': 'Black',
    '#FFFFFF': 'White',
    '#FF69B4': 'Hot Pink',
    '#4B0082': 'Indigo',
    '#A52A2A': 'Brown',
    '#808080': 'Gray',
    '#FFDAB9': 'Peach',
    '#E6E6FA': 'Lavender',
    '#F5F5DC': 'Beige',
    '#FFE4E1': 'Misty Rose',
    '#F0E68C': 'Khaki',
    '#98FB98': 'Pale Green',
    '#87CEEB': 'Sky Blue',
    '#DDA0DD': 'Plum',
    '#F0F8FF': 'Alice Blue',
    '#FAEBD7': 'Antique White',
    '#7FFFD4': 'Aquamarine'
  };

  // Convert hex to RGB
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // Find the closest named color
  let closestColor = '';
  let minDistance = Infinity;

  for (const [hexCode, colorName] of Object.entries(colorMap)) {
    const r2 = parseInt(hexCode.slice(1, 3), 16);
    const g2 = parseInt(hexCode.slice(3, 5), 16);
    const b2 = parseInt(hexCode.slice(5, 7), 16);

    const distance = Math.sqrt(
      Math.pow(r - r2, 2) + 
      Math.pow(g - g2, 2) + 
      Math.pow(b - b2, 2)
    );

    if (distance < minDistance) {
      minDistance = distance;
      closestColor = colorName;
    }
  }

  return closestColor;
}

// Define the steps for the custom order process
const ORDER_STEPS = {
  FABRIC: 'fabric',
  STYLE: 'style',
  COLOR: 'color',
  MEASUREMENTS: 'measurements',
  REVIEW: 'review'
};

// Client component for color combination preview
export default function CustomOrder() {
  const [currentStep, setCurrentStep] = useState(ORDER_STEPS.FABRIC);
  const [selectedFabric, setSelectedFabric] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [primaryColor, setPrimaryColor] = useState("#f34f38");
  const [secondaryColor, setSecondaryColor] = useState("#ff6b6b");
  const [showPrimaryPicker, setShowPrimaryPicker] = useState(false);
  const [showSecondaryPicker, setShowSecondaryPicker] = useState(false);

  const handleNextStep = () => {
    switch (currentStep) {
      case ORDER_STEPS.FABRIC:
        setCurrentStep(ORDER_STEPS.STYLE);
        break;
      case ORDER_STEPS.STYLE:
        setCurrentStep(ORDER_STEPS.COLOR);
        break;
      case ORDER_STEPS.COLOR:
        setCurrentStep(ORDER_STEPS.MEASUREMENTS);
        break;
      case ORDER_STEPS.MEASUREMENTS:
        setCurrentStep(ORDER_STEPS.REVIEW);
        break;
    }
  };

  const handlePreviousStep = () => {
    switch (currentStep) {
      case ORDER_STEPS.STYLE:
        setCurrentStep(ORDER_STEPS.FABRIC);
        break;
      case ORDER_STEPS.COLOR:
        setCurrentStep(ORDER_STEPS.STYLE);
        break;
      case ORDER_STEPS.MEASUREMENTS:
        setCurrentStep(ORDER_STEPS.COLOR);
        break;
      case ORDER_STEPS.REVIEW:
        setCurrentStep(ORDER_STEPS.MEASUREMENTS);
        break;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case ORDER_STEPS.FABRIC:
  return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Fabric</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Select from our premium collection of fabrics, each chosen for its quality, comfort, and style.
              </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fabricCategories.map((fabric) => (
                <div
                  key={fabric.name}
                  onClick={() => setSelectedFabric(fabric.name)}
                  className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedFabric === fabric.name
                      ? "ring-2 ring-[#f34f38] shadow-xl scale-[1.02]"
                      : "hover:shadow-lg hover:scale-[1.01]"
                  }`}
                >
                  <div className="relative w-full h-64">
                    <Image 
                      src={fabric.image}
                      alt={fabric.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="font-bold text-xl text-white mb-2">{fabric.name}</h4>
                      <p className="text-white/90 text-sm">{fabric.description}</p>
                      <div className={`mt-4 flex items-center text-white/90 text-sm ${
                        selectedFabric === fabric.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      } transition-opacity duration-300`}>
                        <span className="mr-2">Selected</span>
                        {selectedFabric === fabric.name && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedFabric && (
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Selected fabric: <span className="font-semibold text-gray-900">{selectedFabric}</span>
                </p>
              </div>
            )}
          </div>
        );

      case ORDER_STEPS.STYLE:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Select Your Style</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose from our exclusive collection of Bubu styles, each crafted with precision and cultural significance.
              </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bubuStyles.map((style) => (
                <button
                  key={style.name}
                  onClick={() => setSelectedStyle(style.name)}
                  className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedStyle === style.name
                      ? "ring-2 ring-[#f34f38] shadow-xl scale-[1.02]"
                      : "hover:shadow-lg hover:scale-[1.01]"
                  }`}
                >
                  <div className="relative w-full h-64">
                    <Image 
                      src={style.image}
                      alt={style.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="font-bold text-xl text-white mb-2">{style.name}</h4>
                      <p className="text-white/90 text-sm mb-2">{style.description}</p>
                      <div className={`mt-4 flex items-center text-white/90 text-sm ${
                        selectedStyle === style.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      } transition-opacity duration-300`}>
                        <span className="mr-2">Selected</span>
                        {selectedStyle === style.name && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {selectedStyle && (
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Selected style: <span className="font-semibold text-gray-900">{selectedStyle}</span>
                </p>
              </div>
            )}
          </div>
        );

      case ORDER_STEPS.COLOR:
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-center">Choose Your Colors</h2>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="mb-8">
                    <h3 className="font-medium mb-3">Primary Color</h3>
                    <div className="relative">
                        <button
                        className="w-full h-12 rounded-lg border-2 border-gray-200 flex items-center justify-between px-4"
                        onClick={() => setShowPrimaryPicker(!showPrimaryPicker)}
                      >
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-8 h-8 rounded-full border border-gray-200"
                            style={{ backgroundColor: primaryColor }}
                          />
                          <span className="font-medium">{getColorName(primaryColor)}</span>
                        </div>
                        <span className="text-gray-500">▼</span>
                      </button>
                      {showPrimaryPicker && (
                        <div className="absolute z-10 mt-2 p-4 bg-white rounded-lg shadow-xl border border-gray-200">
                          <HexColorPicker color={primaryColor} onChange={setPrimaryColor} />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-medium mb-3">Secondary Color</h3>
                    <div className="relative">
                        <button
                        className="w-full h-12 rounded-lg border-2 border-gray-200 flex items-center justify-between px-4"
                        onClick={() => setShowSecondaryPicker(!showSecondaryPicker)}
                      >
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-8 h-8 rounded-full border border-gray-200"
                            style={{ backgroundColor: secondaryColor }}
                          />
                          <span className="font-medium">{getColorName(secondaryColor)}</span>
                        </div>
                        <span className="text-gray-500">▼</span>
                      </button>
                      {showSecondaryPicker && (
                        <div className="absolute z-10 mt-2 p-4 bg-white rounded-lg shadow-xl border border-gray-200">
                          <HexColorPicker color={secondaryColor} onChange={setSecondaryColor} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="font-medium p-3 bg-gray-50 border-b">Color Combination Preview</h3>
                  <div className="p-6">
                    <div className="flex flex-col items-center">
                      <div className="flex mb-6 w-full h-40 rounded-lg overflow-hidden shadow-md">
                        <div className="w-1/2" style={{ backgroundColor: primaryColor }}></div>
                        <div className="w-1/2" style={{ backgroundColor: secondaryColor }}></div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full mb-2" style={{ backgroundColor: primaryColor }}></div>
                          <span className="text-sm font-medium">{getColorName(primaryColor)}</span>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full mb-2" style={{ backgroundColor: secondaryColor }}></div>
                          <span className="text-sm font-medium">{getColorName(secondaryColor)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case ORDER_STEPS.MEASUREMENTS:
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-center">Your Measurements</h2>
            <MeasurementForm />
          </div>
        );

      case ORDER_STEPS.REVIEW:
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-center">Review Your Order</h2>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Selected Fabric</h3>
                  <p className="text-gray-600">
                    {selectedFabric ? `${selectedFabric} (Cotton)` : 'Not selected'}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Selected Style</h3>
                  <p className="text-gray-600">{selectedStyle || 'Not selected'}</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Color Combination</h3>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full mb-2" style={{ backgroundColor: primaryColor }}></div>
                      <span className="text-sm font-medium">{getColorName(primaryColor)}</span>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full mb-2" style={{ backgroundColor: secondaryColor }}></div>
                      <span className="text-sm font-medium">{getColorName(secondaryColor)}</span>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-2">Embrace Comfort, Elevate Your Style</h1>
          <p className="text-gray-500 text-center mb-8">Create your perfect custom piece with our premium tailoring service</p>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-4xl w-full">
              {Object.values(ORDER_STEPS).map((step, index) => (
                <div 
                  key={step}
                  className={`bg-white p-4 rounded-lg shadow-md text-center ${
                    currentStep === step ? 'ring-2 ring-[#f34f38]' : ''
                  }`}
                >
                  <div className={`w-10 h-10 ${
                    currentStep === step ? 'bg-[#f34f38]' : 'bg-gray-200'
                  } text-white rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <span>{index + 1}</span>
              </div>
                  <h3 className="font-medium capitalize">{step}</h3>
              </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="mb-8">
            {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between max-w-4xl mx-auto">
            {currentStep !== ORDER_STEPS.FABRIC && (
              <Button
                onClick={handlePreviousStep}
                className="bg-gray-200 text-gray-800 hover:bg-gray-300"
              >
                Previous Step
              </Button>
            )}
            {currentStep !== ORDER_STEPS.REVIEW && (
              <Button
                onClick={handleNextStep}
                className="bg-[#f34f38] text-white hover:bg-[#e23d27] ml-auto"
              >
                Next Step
              </Button>
            )}
            {currentStep === ORDER_STEPS.REVIEW && (
              <div className="flex justify-center mt-8">
                <Link href="/payment-terms">
                  <Button className="px-8 py-6 text-lg bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] hover:from-[#ff6b6b] hover:to-[#f34f38]">
                    Place Order
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
            <div>
              <h3 className="mb-4 font-bold">About BemmaTrendz</h3>
              <p className="text-gray-600 text-sm">Specializing in custom Bubu dresses and casual comfortable clothing with high-quality materials and expert craftsmanship. We create stylish, everyday wear that combines comfort with contemporary African fashion.</p>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>info@bemmatrendz.com</li>
                <li>+1 (555) 123-4567</li>
                <li>
                  <a 
                    href="https://wa.me/15551234567" 
                    className="flex items-center gap-1 text-[#25D366] hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.019c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.72.045.477-.096.682z"/>
                    </svg>
                    WhatsApp Order
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-[#f34f38]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#f34f38]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#f34f38]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t py-6 text-center text-sm text-gray-500">
            <p>Copyright © 2023 BemmaTrendz - All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper function to describe color combinations
function getColorCombinationDescription(primary: string, secondary: string): string {
  const primaryName = getColorName(primary);
  const secondaryName = getColorName(secondary);
  return `${primaryName} and ${secondaryName}`;
}