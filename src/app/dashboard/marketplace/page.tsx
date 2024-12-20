"use client";
import React, { useState, useMemo } from "react";
import Navbar from "@/components/Layout/Marketplace/Navbar";
import PhoneNumberLibraryHeader from "@/components/Layout/Marketplace/PhoneNumberLibraryHeader";
import { marketPlaceData } from "@/components/Layout/Marketplace/MarketPlaceData";
import PackageCard from "@/components/Layout/Marketplace/PackagedCard";
import { PhonePackage } from "@/types/marketPlace";
import { featuredPhonePackages } from "@/utils/featured_mock_data";
import FeaturedPackagesSlider from "@/components/Layout/Marketplace/FeaturedSlider";

function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceOrder, setPriceOrder] = useState<"asc" | "desc" | "">("");

  // Get unique types from packages
  const types = useMemo(() => {
    return Array.from(
      new Set(
        marketPlaceData.phoneNumberMarketplace.featuredPackages.map(
          (pkg) => pkg.type
        )
      )
    );
  }, []);

  // Filter and sort packages
  const filteredPackages = useMemo(() => {
    let filtered = marketPlaceData.phoneNumberMarketplace.featuredPackages;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (pkg) =>
          pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pkg.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply type filter
    if (selectedType) {
      filtered = filtered.filter((pkg) => pkg.type === selectedType);
    }

    // Apply price sorting
    if (priceOrder) {
      filtered = [...filtered].sort((a, b) => {
        if (priceOrder === "asc") {
          return a.priceUSD - b.priceUSD;
        } else {
          return b.priceUSD - a.priceUSD;
        }
      });
    }

    return filtered;
  }, [searchTerm, selectedType, priceOrder]);

  return (
    <div className="w-full hide-scrollbar overflow-hidden">
      <Navbar />
      <div className="bg-foreground/10 h-[1px] w-[100%] rounded-full scale-100">
        <span className="opacity-0">.</span>
      </div>

      <FeaturedPackagesSlider packages={featuredPhonePackages} />

      <PhoneNumberLibraryHeader
        onSearch={setSearchTerm}
        onFilterType={setSelectedType}
        onSortPrice={setPriceOrder}
        types={types}
      />

      <div className="relative bg-background/60 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
          {filteredPackages.map((pkg: PhonePackage) => (
            <PackageCard key={pkg.packageId} package={pkg} />
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="flex justify-center items-center py-12">
            <p className="text-gray-400">
              No packages found matching your criteria
            </p>
          </div>
        )}

        {filteredPackages.length > 0 && (
          <div className="flex justify-center mt-8">
            <button className="items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group rounded-lg border border-border/50 hover:bg-secondary/50 hover:border-border hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text h-10 px-4 py-2 w-[200px] block truncate hover:no-underline">
              Load more ...
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Marketplace;
