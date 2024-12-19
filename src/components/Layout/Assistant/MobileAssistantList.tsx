interface AssistantsListProps {
  assistants: Array<{ name: string; isActive?: boolean }>;
}
const MobileAssistantList: React.FC<AssistantsListProps> = ({ assistants }) => {
  const activeAssistant = assistants.find((a) => a.isActive) || assistants[0];

  return (
    <div className="sm:hidden w-[300px] sm:max-w-[320px] p-4">
      <button className="inline-flex items-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group rounded-lg border border-border/50 hover:bg-secondary/50 hover:border-border hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text h-10 px-4 py-2 w-full justify-between">
        <span>{activeAssistant.name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-down ml-2 h-4 w-4 shrink-0 opacity-50"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
    </div>
  );
};

export default MobileAssistantList;
