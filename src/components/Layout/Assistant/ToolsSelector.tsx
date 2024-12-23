import { ChevronDown } from "lucide-react";

const ToolSelector = () => {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <div className="space-y-2 flex flex-1">
        <button
          className="whitespace-nowrap ring-1 ring-transparent text-sm font-bold 
                   disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] group 
                   hover:border-border hover:shadow-sm hover:shadow-black/10 hover:text-text 
                   flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between 
                   bg-secondary text-text hover:bg-foreground border-border shadow-sm 
                   shadow-black/10 transition-all duration-150 ease-in-out"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
        >
          <div className="flex items-center justify-between w-full mx-auto">
            <span className="text-sm text-muted-foreground mx-3">
              Select Tools
            </span>
            <ChevronDown className="h-4 cursor-pointer text-muted-foreground mx-2" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ToolSelector;


