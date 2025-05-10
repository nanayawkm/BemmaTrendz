"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';

interface Measurements {
  chest: string;
  waist: string;
  hips: string;
  height: string;
  shoulderWidth: string;
  inseam: string;
}

export default function MeasurementForm() {
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [sideImage, setSideImage] = useState<File | null>(null);
  const [frontPreview, setFrontPreview] = useState<string>('');
  const [sidePreview, setSidePreview] = useState<string>('');
  const [measurements, setMeasurements] = useState<Measurements>({
    chest: '',
    waist: '',
    hips: '',
    height: '',
    shoulderWidth: '',
    inseam: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'front' | 'side') => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === 'front') {
        setFrontImage(file);
        setFrontPreview(URL.createObjectURL(file));
      } else {
        setSideImage(file);
        setSidePreview(URL.createObjectURL(file));
      }
    }
  };

  const handleMeasurementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeasurements(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formData = new FormData();
      if (frontImage) formData.append('frontImage', frontImage);
      if (sideImage) formData.append('sideImage', sideImage);
      formData.append('measurements', JSON.stringify(measurements));

      const response = await fetch('/api/measurements', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Measurements submitted successfully!'
        });
        // Reset form
        setFrontImage(null);
        setSideImage(null);
        setFrontPreview('');
        setSidePreview('');
        setMeasurements({
          chest: '',
          waist: '',
          hips: '',
          height: '',
          shoulderWidth: '',
          inseam: ''
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Error submitting measurements. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Image Upload Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Front Image Upload */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Front View Photo
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                {frontPreview ? (
                  <div className="relative h-48 w-full">
                    <Image
                      src={frontPreview}
                      alt="Front preview"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                ) : (
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="front-image"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-[#f34f38] hover:text-[#e23d27] focus-within:outline-none"
                  >
                    <span>Upload a file</span>
                    <input
                      id="front-image"
                      name="front-image"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, 'front')}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          {/* Side Image Upload */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Side View Photo
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                {sidePreview ? (
                  <div className="relative h-48 w-full">
                    <Image
                      src={sidePreview}
                      alt="Side preview"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                ) : (
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="side-image"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-[#f34f38] hover:text-[#e23d27] focus-within:outline-none"
                  >
                    <span>Upload a file</span>
                    <input
                      id="side-image"
                      name="side-image"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, 'side')}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Manual Measurements Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Manual Measurements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="chest" className="block text-sm font-medium text-gray-700">
                Chest (cm)
              </label>
              <input
                type="number"
                name="chest"
                id="chest"
                value={measurements.chest}
                onChange={handleMeasurementChange}
                placeholder="e.g., 92"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f34f38] focus:ring-[#f34f38] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="waist" className="block text-sm font-medium text-gray-700">
                Waist (cm)
              </label>
              <input
                type="number"
                name="waist"
                id="waist"
                value={measurements.waist}
                onChange={handleMeasurementChange}
                placeholder="e.g., 76"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f34f38] focus:ring-[#f34f38] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="hips" className="block text-sm font-medium text-gray-700">
                Hips (cm)
              </label>
              <input
                type="number"
                name="hips"
                id="hips"
                value={measurements.hips}
                onChange={handleMeasurementChange}
                placeholder="e.g., 98"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f34f38] focus:ring-[#f34f38] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                Height (cm)
              </label>
              <input
                type="number"
                name="height"
                id="height"
                value={measurements.height}
                onChange={handleMeasurementChange}
                placeholder="e.g., 165"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f34f38] focus:ring-[#f34f38] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="shoulderWidth" className="block text-sm font-medium text-gray-700">
                Shoulder Width (cm)
              </label>
              <input
                type="number"
                name="shoulderWidth"
                id="shoulderWidth"
                value={measurements.shoulderWidth}
                onChange={handleMeasurementChange}
                placeholder="e.g., 38"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f34f38] focus:ring-[#f34f38] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="inseam" className="block text-sm font-medium text-gray-700">
                Inseam (cm)
              </label>
              <input
                type="number"
                name="inseam"
                id="inseam"
                value={measurements.inseam}
                onChange={handleMeasurementChange}
                placeholder="e.g., 76"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f34f38] focus:ring-[#f34f38] sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-[#f34f38] hover:bg-[#e23d27] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f34f38] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Measurements'}
          </button>
        </div>

        {/* Status Message */}
        {submitStatus.type && (
          <div
            className={`mt-4 p-4 rounded-md ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800'
                : 'bg-red-50 text-red-800'
            }`}
          >
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
} 