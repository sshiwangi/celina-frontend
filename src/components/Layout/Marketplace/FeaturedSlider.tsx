"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Copy } from "lucide-react";
import Image from "next/image";

interface FeaturedPackage {
  id: string;
  name: string;
  image: string;
  bestFor: string[];
  rating: number;
  numberOfPhoneNumbers: number;
  pricePerNumber: number;
}

interface FeaturedSliderProps {
  packages: FeaturedPackage[];
}

const VISIBLE_CARDS = 4;

const FeaturedPackagesSlider: React.FC<FeaturedSliderProps> = ({
  packages,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slideLeft = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev === 0 ? packages.length - VISIBLE_CARDS : prev - 1
    );
  };

  const slideRight = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev === packages.length - VISIBLE_CARDS ? 0 : prev + 1
    );
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 px-4">Featured Packages</h2>

      <div className="relative group">
        {/* Navigation Buttons */}
        <button
          onClick={slideLeft}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>

        {/* Cards Container */}
        <div className="relative overflow-hidden px-4">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / VISIBLE_CARDS)
              }%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex-none w-[calc(25%-12px)] relative rounded-lg overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                {/* Background Image */}
                <div className="w-full h-full overflow-hidden">
                  <Image src={pkg.image} alt={pkg.name} layout="fill" objectFit="contain" />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

                <div className="absolute inset-0 p-4 flex flex-col">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-white text-lg font-bold">
                        {pkg.name}
                      </h3>
                      {/* <span className="inline-block px-2 py-0.5 text-xs bg-blue-500/10 border border-blue-500/30 rounded-lg">
                        {pkg.provider}
                      </span> */}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div>
                      <p className="text-white font-medium mb-1">Best for:</p>
                      <p className="text-white/80 text-sm">
                        {pkg.bestFor.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={slideRight}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: packages.length - VISIBLE_CARDS + 1 }).map(
          (_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 
              ${
                currentIndex === idx
                  ? "bg-primary w-4"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default FeaturedPackagesSlider;
