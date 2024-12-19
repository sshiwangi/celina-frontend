"use client";

import { Users } from "lucide-react";
import Link from "next/link";

interface AssistantItemProps {
  name: string;
  isActive?: boolean;
}

const AssistantItem: React.FC<AssistantItemProps> = ({ name, isActive }) => {
  return (
    <div className="mt-[5px] relative pl-8">
      <div className="absolute z-0 top-[7px] left-[18px] w-3 h-3 border-b-2 border-l-2 border-border rounded-bl-full" />
      <Link href="/assistants" className="hover:!no-underline">
        <div className="z-10">
          <div
            className={`transition-all duration-100 ease-in-out active:scale-[0.98] rounded-[11px] mb-1 border border-transparent ${
              isActive
                ? "bg-primary/10 border-primary/10"
                : "hover:bg-hover/50 hover:border-border/50"
            } max-w-full min-w-[37px]`}
          >
            <div className="flex items-center justify-between p-1.5 rounded-lg cursor-pointer select-none">
              <div className="flex gap-2 items-center">
                <div className="bg-secondary p-1 rounded-md shadow-sm shadow-black/20">
                  <Users className="w-3.5 h-3.5 text-icon/30" />
                </div>
                <div>
                  <p
                    className={`chakra-text line-clamp-1 ${
                      isActive ? "!text-text" : "!text-text/60"
                    }`}
                  >
                    {name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AssistantItem;