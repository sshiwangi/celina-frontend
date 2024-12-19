"use client"
import { ArrowRightIcon, GitGraphIcon } from "lucide-react";

const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex justify-center items-center w-[330px]">
        <div className="text-left text-muted-foreground">
          <div className="flex justify-left">
            <GitGraphIcon className="mb-2 w-[80px] h-[80px] fill-icon/20" />
          </div>
          <h2 className="text-xl font-medium text-text">Track & Manage</h2>
          <p className="text-md text-text/40 mb-4">
            Track how your assistants are performing, how much you're spending,
            and more.
          </p>
          <p className="text-md text-text/40">
            Looks like there are no metrics here - create an assistant to start
            seeing your metrics.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-x-2 mt-4 w-[330px]">
        <button className="inline-flex w-full items-center justify-center whitespace-nowrap text-sm font-bold transition-all duration-150 ease-in-out active:scale-[0.98] group rounded-lg ring-2 ring-primary/80 bg-primary/80 hover:saturate-[1.3] hover:bg-primary hover:ring-primary border-t-[1px] border-white/30 hover:border-white/40 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-primary/30 h-10 px-4 py-2">
          <span className="text-white group-hover:text-white/90 font-bold">
            Get Started
          </span>
          <ArrowRightIcon className="ml-2 fill-white/50 group-hover:fill-white/70 group-hover:translate-x-2 transition-all duration-100 ease-in-out w-[16px] h-[16px]" />
        </button>
      </div>
    </div>
  );
};

export default EmptyState