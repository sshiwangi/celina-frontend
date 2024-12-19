"use client";

import { Search, ChevronDown, Copy, Plus, RefreshCw } from "lucide-react";
import React from "react";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  label,
  onClick,
  disabled = false,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full justify-center ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group border hover:border-border hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text h-9 px-3 rounded-lg bg-white/5 border-white/20 space-x-2 whitespace-nowrap flex items-center ${
      disabled ? "!cursor-not-allowed" : "hover:bg-white/20"
    }`}
  >
    {React.cloneElement(icon as React.ReactElement, {
      className: "fill-icon text-text w-3 h-3 mr-1",
    })}
    <span>{label}</span>
  </button>
);

interface FilterDropdownProps {
  value: string;
  placeholder?: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  value,
  placeholder,
}) => (
  <button
    type="button"
    role="combobox"
    className="w-full px-3 flex [&>svg]:h-5 [&>svg]:w-5 justify-between items-center read-only:bg-background disabled:cursor-not-allowed disabled:opacity-50 transition duration-300 border-default-300 text-default-500 focus:outline-none focus:border-default-500/50 disabled:bg-default-200 placeholder:text-accent-foreground/50 [&>svg]:stroke-default-600 border rounded-lg h-10 text-sm"
  >
    <span style={{ pointerEvents: "none" }}>
      {value || placeholder || "Select..."}
    </span>
    <ChevronDown />
  </button>
);

const PhoneNumberLibraryHeader = () => {
  return (
    <div className="sticky bg-foreground top-[calc(50px)] z-10 pb-6 shadow-lg">
      <div className="space-y-4">
        {/* Title and Action Buttons */}
        <div className="flex items-center justify-between pt-8 px-4 mb-6">
          <h2 className="text-lg font-bold">Explore all voices</h2>
          <div className="flex gap-2 items-center">
            <ActionButton icon={<Copy />} label="Clone" />
            <ActionButton icon={<Plus />} label="Add" />
            <ActionButton icon={<RefreshCw />} label="Sync" disabled />
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center mt-24 justify-between px-4 gap-4">
          {/* Search Bar */}
          <div className="w-[48%] relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-[14px]" />
            <input
              type="text"
              placeholder="Search by keyword, id, use..."
              className="flex h-9 w-full text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[hsl(240,5%,50%)] outline-none focus-visible:ring-1 ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-background text-text hover:bg-background/90 focus:bg-background/85 border rounded-md px-10 py-5 shadow-sm shadow-black/10 transition-all duration-150 ease-in-out border-input"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="w-[20%]">
            <FilterDropdown value="11labs" />
          </div>
          <div className="w-[20%]">
            <FilterDropdown value="all" />
          </div>
          <div className="w-[20%]">
            <FilterDropdown placeholder="Select Accent" value="lala" />
          </div>
        </div>

        {/* Additional Space */}
        <div className="flex mt-24 mb-4 justify-end px-4" />
      </div>
    </div>
  );
};

export default PhoneNumberLibraryHeader;
