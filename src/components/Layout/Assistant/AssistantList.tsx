"use client";

interface AssistantsListProps {
  tabs: Array<{ name: string; isActive?: boolean }>;
  onTabClick: (index: number) => void;
}

const AssistantList: React.FC<AssistantsListProps> = ({ tabs, onTabClick }) => {
  return (
    <div
      className="flex flex-col w-full sm:max-w-[320px] p-4 hide-scrollbar gap-y-2 hidden sm:flex"
      role="list"
      data-testid="assistants-list"
    >
      {tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => onTabClick(index)}
          className={`group flex flex-col p-2 rounded-lg w-full border border-transparent hover:bg-cyan-700/50 cursor-pointer transition-all duration-150 ease-in-out ${
            tab.isActive ? "bg-cyan-500" : "bg-transparent"
          }`}
        >
          <div className="flex justify-between items-center transition-all duration-150 ease-in-out">
            <div className="flex flex-col justify-between items-start">
              <div className="ellipsis-text font-semibold text-sm text-text">
                {tab.name}
              </div>
              <div className="flex gap-1.5 items-center overflow-hidden">
                <p className="ellipsis-text text-sm text-text/40"></p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssistantList;
