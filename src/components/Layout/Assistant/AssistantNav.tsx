"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

 const AssistantNav = () => {
  return (
    <div className="flex p-4 sticky top-0 border-b border-border bg-foreground/5 backdrop-blur-lg gap-x-2">
      <Button className="gap-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white h-10 px-4 py-2 inline-flex w-full items-center justify-center whitespace-nowrap text-sm font-bold group rounded-lg ring-1 ring-cyan-500/20 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 border-t-[1px] border-b-[0px] border-l-[0px] border-r-[0px] border-white/30 hover:border-white/40 active:border-b-0 active:border-l-0 active:border-r-0 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-cyan-500/30">
        <span className="text-white/80 group-hover:text-white font-bold">
          Create Assistant
        </span>
        <Plus className="ml-2 w-4 h-4 text-white/50 group-hover:text-white/70 group-hover:rotate-90 transition-all duration-150 ease-in-out" />
      </Button>

      
    </div>
  );
};

export default AssistantNav;
