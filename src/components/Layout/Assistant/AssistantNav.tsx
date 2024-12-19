"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

 const AssistantNav = () => {
  return (
    <div className="flex p-4 sticky top-0 border-b border-border bg-foreground/5 backdrop-blur-lg gap-x-2">
      <Button className="inline-flex w-full items-center justify-center whitespace-nowrap text-sm font-bold group rounded-lg ring-2 ring-primary/80 bg-primary/80 hover:saturate-[1.3] hover:bg-primary hover:ring-primary border-t-[1px] border-b-[0px] border-l-[0px] border-r-[0px] border-white/30 hover:border-white/40 active:border-b-0 active:border-l-0 active:border-r-0 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-primary/30">
        <span className="text-white/80 group-hover:text-white font-bold">
          Create Assistant
        </span>
        <Plus className="ml-2 w-4 h-4 text-white/50 group-hover:text-white/70 group-hover:rotate-90 transition-all duration-150 ease-in-out" />
      </Button>

      
    </div>
  );
};

export default AssistantNav;
