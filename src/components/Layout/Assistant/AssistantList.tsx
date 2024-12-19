"use client";


interface AssistantsListProps {
  assistants: Array<{ name: string; isActive?: boolean }>;
}

 const AssistantList: React.FC<AssistantsListProps> = ({
  assistants,
}) => {
  return (
    <div
      className="flex flex-col w-full sm:max-w-[320px] p-4 hide-scrollbar gap-y-2 hidden sm:flex"
      role="list"
      data-testid="assistants-list"
    >
      {assistants.map((assistant, index) => (
        <div
          key={index}
          className={`group flex flex-col p-2 rounded-lg w-full border border-transparent hover:bg-background/50 cursor-pointer transition-all duration-150 ease-in-out ${
            assistant.isActive ? "bg-primary/10" : "bg-transparent"
          }`}
        >
          <div className="flex justify-between items-center transition-all duration-150 ease-in-out">
            <div className="flex flex-col justify-between items-start">
              <div className="ellipsis-text font-semibold text-sm text-text">
                {assistant.name}
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

