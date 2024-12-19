import AssistantDetails from "@/components/Layout/Assistant/AssistantDetails";
import AssistantList from "@/components/Layout/Assistant/AssistantList";
import AssistantNav from "@/components/Layout/Assistant/AssistantNav";
import MobileAssistantList from "@/components/Layout/Assistant/MobileAssistantList";
import ModelConfig from "@/components/Layout/Assistant/ModelConfig";

export default function AssistantsPage() {
  const assistantData = {
    name: "Ava",
    id: "b99cb6c3-e7bf-47ff-ae6b-3ef9fd12dbf3",
    metrics: {
      cost: {
        value: "$0.09",
        stats: [
          { color: "rgb(93, 254, 202)", width: "54.3478%", isFirst: true },
          { color: "rgb(219, 39, 119)", width: "10.8696%" },
          { color: "rgb(14, 165, 233)", width: "10.8696%" },
          { color: "rgb(252, 211, 77)", width: "23.913%", isLast: true },
        ],
      },
      latency: {
        value: "700",
        stats: [
          { color: "rgb(219, 39, 119)", width: "14.2857%", isFirst: true },
          { color: "rgb(14, 165, 233)", width: "35.7143%" },
          { color: "rgb(252, 211, 77)", width: "35.7143%" },
          { color: "rgb(192, 38, 211)", width: "14.2857%", isLast: true },
        ],
      },
    },
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
