"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonAction?: () => void;
  showImage?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No Agents found",
  subtitle = "Create a new one",
  buttonText,
  buttonAction,
  showImage = true,
}) => {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center">
      {/* {showImage && (
        <div className="relative h-52 w-52 mb-8">
          <Image
            src=""
            alt="Empty state"
            fill
            className="opacity-50"
          />
        </div>
      )} */}

      <h3 className="text-2xl font-semibold text-cyan-600 dark:text-gray-100">
        {title}
      </h3>

      <p className="mt-2 text-base text-gray-500 dark:text-gray-400 text-center max-w-md">
        {subtitle}
      </p>

      {buttonText && buttonAction && (
        <Button
          onClick={buttonAction}
          className="mt-6 inline-flex items-center px-4 py-2"
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;


