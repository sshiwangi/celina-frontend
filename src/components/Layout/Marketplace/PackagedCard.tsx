"use client";
import React from "react";
import { Copy, Star, Phone, ChevronRight } from "lucide-react";
import { PhonePackage } from "@/types/marketPlace";

interface PackageCardProps {
  package: PhonePackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg }) => {
  return (
    <div className="group relative bg-secondary rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0px_0px_24px_2px_rgba(55,170,157,0.3)]">
      {/* Top Banner - Type Indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-300/60 to-blue-300"></div>

      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-white group-hover:text-cyan-300/90 transition-colors">
              {pkg.title}
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-3 py-1 text-xs font-semibold bg-cyan-300/60 text-white rounded-full border border-primary/20">
                {pkg.type}
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                <span className="text-sm text-yellow-400">{pkg.rating}</span>
              </div>
            </div>
          </div>
         
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {pkg.description}
        </p>

        {/* Stats Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-gray-400">
            <Phone className="w-4 h-4" />
            <span className="text-sm">{pkg.numberOfPhoneNumbers} numbers</span>
          </div>
        </div>

        {/* Footer - Price & Action */}
        <div className="flex flex-col w-full items-center justify-between pt-4 border-t border-white/10">
          <div className="flex w-full flex-col">
            <span className="text-sm text-gray-400">Price</span>
            <span className="text-2xl font-bold text-white">
              ${pkg.priceUSD}
              <span className="text-sm text-gray-400 font-normal">
                /package
              </span>
            </span>
          </div>

          <button className="flex w-full justify-center mt-4 items-center gap-2 px-4 py-2 bg-cyan-300/60 hover:bg-cyan-500/30 text-white rounded-lg transition-colors group">
            <span className="text-sm font-semibold">View Details</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Hover Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
};

export default PackageCard;
