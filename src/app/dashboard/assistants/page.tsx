import AssistantDetails from "@/components/Layout/Assistant/AssistantDetails";
import AssistantList from "@/components/Layout/Assistant/AssistantList";
import AssistantNav from "@/components/Layout/Assistant/AssistantNav";
import MobileAssistantList from "@/components/Layout/Assistant/MobileAssistantList";
import ModelConfig from "@/components/Layout/Assistant/ModelConfig";

export default function AssistantsPage() {
  const assistantData = {
    name: "Ava",
    
  };

const assistantListData = [
  { name: assistantData.name, isActive: true },
  { name: "Rupa", isActive: false }, // Adding another assistant for the list
];

  return (
    <>
      <div
        data-testid="assistant-menu"
        className="border-r border-border hide-scrollbar h-[200px] sm:h-full w-full sm:max-w-[320px]"
      >
        <AssistantNav />
        <AssistantList assistants={assistantListData} />
        <MobileAssistantList assistants={assistantListData} />
      </div>

      <div
        className="flex flex-col hide-scrollbar w-full px-2"
        data-testid="assistant-viewer"
      >
        <AssistantDetails assistant={assistantData} />{" "}
        <ModelConfig
          providerValue="openai"
          modelValue="gpt-3.5-turbo"
          temperatureValue={0.7}
          maxTokens={250}
          firstMessage="Hello, this is Ava. How may I assist you today?"
          systemPrompt="Ava is a sophisticated AI training assistant..."
          detectEmotion={true}
        />
        {/* Pass full data object as is */}
      </div>
    </>
  );
}
