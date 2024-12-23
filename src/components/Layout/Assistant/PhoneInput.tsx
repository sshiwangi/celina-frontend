"use client";

import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/ui/Modal";
import { Phone } from "lucide-react";

const PhoneInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="flex w-full PhoneInput">
      {/* Indian Country Code Button */}
      <button
        className="items-center justify-center whitespace-nowrap ring-1 ring-transparent 
                 text-sm font-bold disabled:pointer-events-none disabled:opacity-50 
                 active:scale-[0.98] p-1.5 h-10 px-4 py-2 rounded-e-none rounded-s-lg 
                 pl-3 pr-1 flex max-h-[36px] gap-1 bg-secondary text-text 
                 hover:bg-foreground border border-border shadow-sm shadow-black/10 
                 transition-all duration-150 ease-in-out w-[100px]"
        type="button"
      >
        <span className="flex items-center truncate">
          <div className="bg-foreground/20 rounded-sm flex w-6 h-4">
            <span className="inline object-contain w-6 h-4 overflow-hidden rounded-[3px] shadow-sm shadow-black/10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3">
                <path fill="#FFF" d="M0 0h512v341.3H0z" />
                <path fill="#FF9811" d="M0 0h512v113.8H0z" />
                <path fill="#FFF" d="M0 113.8h512v113.8H0z" />
                <path fill="#138808" d="M0 227.6h512v113.8H0z" />
                <circle fill="#000080" cx="256" cy="170.7" r="34.1" />
                <circle fill="#FFF" cx="256" cy="170.7" r="30.7" />
                <path
                  fill="#000080"
                  d="m256 154.7 2.1 6.3h6.6l-5.3 3.9 2 6.3-5.4-3.9-5.3 3.9 2-6.3-5.4-3.9h6.6zm-20.3 15.4h6.5l2.1-6.3 2 6.3h6.6l-5.3 3.9 2 6.3-5.4-3.9-5.3 3.9 2-6.3zm40.6 0h6.5l2.1-6.3 2 6.3h6.6l-5.3 3.9 2 6.3-5.4-3.9-5.3 3.9 2-6.3z"
                />
              </svg>
            </span>
          </div>
          <span className="ml-2">+91</span>
        </span>
      </button>

      {/* Phone Number Input */}
      <input
        type="tel"
        placeholder="9876543210"
        data-testid="mobile-number-input"
        name="phoneNumber"
        value={value}
        onChange={(e) => {
          // Only allow numbers
          const numericValue = e.target.value.replace(/[^0-9]/g, "");
          if (numericValue.length <= 10) {
            onChange(numericValue);
          }
        }}
        className="flex h-9 w-full rounded-md text-sm file:border-0 file:bg-transparent 
                 file:text-sm file:font-medium outline-none focus-visible:ring-1 ring-ring 
                 disabled:cursor-not-allowed disabled:opacity-50 px-3 py-1 rounded-s-none 
                 rounded-e-lg placeholder:text-placeholder bg-secondary text-text 
                 hover:bg-foreground border shadow-sm shadow-black/10 transition-all 
                 duration-150 ease-in-out PhoneInputInput border-input"
      />
    </div>
  );
};

export default PhoneInput
