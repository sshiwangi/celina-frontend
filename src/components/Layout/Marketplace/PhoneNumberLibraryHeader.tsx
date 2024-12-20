"use client";
import {
  Search,
  Filter,
  Plus,
  ChevronDown,
  LucideIcon,
} from "lucide-react";
import React, { useState } from "react";

interface PhoneNumberLibraryHeaderProps {
  onSearch: (term: string) => void;
  onFilterType: (type: string) => void;
  onSortPrice: (order: "asc" | "desc") => void;
  types: string[];
}
interface ActionButtonProps {
  icon: LucideIcon; // Use LucideIcon type for the icons
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon, // Destructure as Icon (capital I)
  label,
  onClick,
  disabled = false,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`group flex items-center justify-center gap-2 px-4 py-2 rounded-lg 
      transition-all duration-300 ease-out
      ${
        disabled
          ? "bg-gray-800/40 text-gray-500 cursor-not-allowed"
          : "bg-secondary/60 hover:bg-primary/20 text-gray-400 hover:text-primary border border-gray-700/50 hover:border-primary/30"
      } font-medium text-sm shadow-lg hover:shadow-primary/20 
      transform hover:-translate-y-[1px] active:translate-y-0`}
  >
    <Icon
      className={`w-4 h-4 transition-transform duration-300 ${
        disabled ? "" : "group-hover:scale-110"
      }`}
    />
    <span>{label}</span>
  </button>
);

const FilterDropdown: React.FC<{
  value: string;
  options: string[];
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
}> = ({ value, options, onChange, placeholder, icon }) => (
  <div className="relative group">
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-primary transition-colors duration-300">
      {icon}
    </div>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full pl-10 pr-10 py-2 appearance-none
      bg-secondary/60 border border-gray-700/50
      rounded-lg text-sm text-gray-300
      transition-all duration-300
      hover:border-primary/30 hover:bg-primary/5 hover:text-primary
      focus:outline-none focus:ring-1 focus:ring-primary/30
      cursor-pointer"
    >
      <option value="" className="bg-background text-gray-300">
        {placeholder || "Select..."}
      </option>
      {options.map((option) => (
        <option
          key={option}
          value={option}
          className="bg-background text-gray-300"
        >
          {option}
        </option>
      ))}
    </select>
    <ChevronDown
      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 
      pointer-events-none transition-transform duration-300 group-hover:text-primary
      group-hover:[transform:translateY(-50%)_scale(1.1)]"
    />
  </div>
);

const PhoneNumberLibraryHeader: React.FC<PhoneNumberLibraryHeaderProps> = ({
  onSearch,
  onFilterType,
  onSortPrice,
  types,
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const priceOrders = ["Price: Low to High", "Price: High to Low"];

  return (
    <div className="sticky top-[50px] z-10 bg-gradient-to-b from-background via-background/95 to-background/90 backdrop-blur-sm">
      <div className="px-6 py-8 space-y-8">
        {/* Header Title and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Phone Number Packages
            </h2>
            <p className="text-gray-400 text-sm">
              Browse and manage your phone number collections
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <ActionButton icon={Plus} label="Add" />{" "}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div className="relative flex-grow max-w-md group">
            <Search
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 
              transition-all duration-300 
              ${
                isSearchFocused
                  ? "text-primary transform scale-110"
                  : "text-gray-400"
              }`}
            />
            <input
              type="text"
              placeholder="Search packages..."
              onChange={(e) => onSearch(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full pl-12 pr-4 py-3 bg-secondary/60 
                border border-gray-700/50 rounded-lg
                text-gray-200 placeholder-gray-500
                transition-all duration-300
                focus:outline-none focus:ring-1 focus:ring-primary/30 
                focus:border-primary/30 focus:bg-primary/5"
            />
          </div>

          {/* Type Filter */}
          <div className="w-64">
            <FilterDropdown
              value=""
              options={types}
              onChange={onFilterType}
              placeholder="Filter by Type"
              icon={<Filter className="w-4 h-4" />}
            />
          </div>

          {/* Price Sort */}
          <div className="w-64">
            <FilterDropdown
              value=""
              options={priceOrders}
              onChange={(value) =>
                onSortPrice(value.includes("Low to High") ? "asc" : "desc")
              }
              placeholder="Sort by Price"
              icon={<ChevronDown className="w-4 h-4" />}
            />
          </div>
        </div>
      </div>

      {/* Bottom Shadow */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
};

export default PhoneNumberLibraryHeader;
