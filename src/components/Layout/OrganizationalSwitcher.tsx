import { ChevronDownIcon, OrigamiIcon } from "lucide-react";
import React from "react";
 const OrganizationSwitcher: React.FC = () => {
  return (
    <button className="inline-flex items-center whitespace-nowrap text-sm font-bold group hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text px-4 py-2 w-full rounded-[10px] relative border border-primary/50 bg-primary hover:border-primary ring-inset ring-2 ring-border/40 hover:ring-border/80 hover:bg-primary hover:saturate-[1.3] h-auto pl-2 min-h-8 justify-between gap-1 active:scale-[0.98] overflow-hidden transition-all duration-150 ease-in-out">
      <div className="bg-secondary/30 p-1 rounded-md shadow-sm shadow-black/10">
        <OrigamiIcon />
      </div>
      <div className="overflow-hidden text-ellipsis ml-1 text-white">
        Organization Name
      </div>
      <ChevronDownIcon className="h-3 w-3 shrink-0 fill-white opacity-50" />
    </button>
  );
};
export default OrganizationSwitcher;
