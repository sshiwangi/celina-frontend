import PredefinedFunctions from "./PredefinedFunctions";
import ToolsHeader from "./ToolsHeader";

const ToolsTab = () => {
  return (
    <div className="space-y-4">
      <ToolsHeader />
      {/* Functions list will go here */}

      <PredefinedFunctions />
    </div>
  );
};

export default ToolsTab;
