import Link from "next/link";
import ToolSelector from "./ToolsSelector";

 const ToolsHeader = () => {
  return (
    <div className="bg-background/70 rounded-2xl p-4 border border-border">
      <div
        className="w-full px-2 mb-4"
        data-testid="tools-description-container"
      >
        <h2
          className="text-lg text-text font-medium"
          data-testid="tools-header"
        >
          Tools
        </h2>
        <p className="text-xs text-text/60" data-testid="tools-description">
          Tools are a way you can enable your voicebots to perform certain
          actions and tasks during the call. Add your tools From the{" "}
          <Link href="/tools" className="text-primary hover:underline">
            Tools Library
          </Link>{" "}
          page to your voicebots to connect with Make.com or GHL workflows. You
          can also have custom tools with your own backend.
        </p>
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-2 px-4 my-2">
          <p className="text-xs text-blue-500/75 leading-snug">
            Note: Tools have different Request and Response format as compared
            to Functions. Check our{" "}
            <a
              href="https://docs.vapi.ai/tools-calling"
              target="_blank"
              rel="noopener"
              className="text-blue-500 underline font-medium"
            >
              tools guide
            </a>{" "}
            for more details
          </p>
        </div>
      </div>
      <ToolSelector />
    </div>
  );
};

export default ToolsHeader



