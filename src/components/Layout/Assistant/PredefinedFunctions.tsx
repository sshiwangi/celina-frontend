import { useState } from "react";
import { InfoIcon } from "lucide-react";
import FunctionItem from "./FunctionItem";
import PhoneInput from "./PhoneInput";

export default function PredefinedFunctions() {
  const [endCallEnabled, setEndCallEnabled] = useState(false);
  const [dialKeypadEnabled, setDialKeypadEnabled] = useState(false);
  const [endCallPhrases, setEndCallPhrases] = useState("bye for now,talk soon");
    const [phoneNumber, setPhoneNumber] = useState("");


  return (
    <div className="bg-background/70 rounded-2xl sm:px-4 pt-4 sm:py-4 border border-border">
      <div className="px-2 mb-4">
        <h2
          className="text-lg font-medium text-text"
          data-testid="predefined-functions-header"
        >
          Predefined Functions
        </h2>
        <p
          className="text-xs text-text/60"
          data-testid="custom-functions-description"
        >
          We've pre-built functions for common use cases. You can enable them
          and configure them below.
        </p>
      </div>

      <div className="bg-foreground rounded-xl px-4 overflow-hidden m-[-1px] border border-border shadow-md shadow-black/10">
        <FunctionItem
          title="Enable End Call Function"
          description="This will allow the assistant to end the call from its side. (Best for gpt-4 and bigger models.)"
          checked={endCallEnabled}
          onChange={() => setEndCallEnabled(!endCallEnabled)}
          testId="end-call-function"
          readMoreLink="https://docs.vapi.ai/assistants/function-calling#end-call"
        />

        <div className="h-[1px] w-full bg-border scale-110" />

        <FunctionItem
          title="Dial Keypad"
          description="This sets whether the assistant can dial digits on the keypad."
          checked={dialKeypadEnabled}
          onChange={() => setDialKeypadEnabled(!dialKeypadEnabled)}
          testId="dial-keypad-function"
          readMoreLink="https://docs.vapi.ai/assistants/function-calling#dial-keypad"
        />

        <div className="h-[1px] w-full bg-border scale-110" />

        {/* Phone Number Input */}
        <div
          className="space-y-2 py-6"
          data-testid="forwarding-phone-number-item"
        >
          <label
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 
               text-sm text-text/60 flex flex-row items-center gap-x-2"
            data-testid="forwarding-phone-number-label"
          >
            Forwarding Phone Number
            <InfoIcon className="w-[12px] h-[12px] fill-yellow-600 ml-1" />
          </label>
          <PhoneInput value={phoneNumber} onChange={setPhoneNumber} />
        </div>

        <div className="h-[1px] w-full bg-border scale-110" />

        {/* End Call Phrases */}
        <div className="space-y-2 py-6" data-testid="end-call-phrases-item">
          <label
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 
                         text-sm text-text/60 cursor-pointer flex flex-row items-center gap-x-2"
          >
            End Call Phrases
            <InfoIcon className="w-[12px] h-[12px] fill-yellow-600 ml-1" />
          </label>
          <textarea
            value={endCallPhrases}
            onChange={(e) => setEndCallPhrases(e.target.value)}
            className="flex min-h-[30px] rounded-md text-sm 
                      placeholder:text-muted-foreground focus-visible:outline-none 
                      focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed 
                      disabled:opacity-50 px-3 py-2 w-full bg-secondary text-text 
                      hover:bg-foreground border border-border shadow-sm shadow-black/10 
                      transition-all duration-150 ease-in-out"
            placeholder="Phrases that if spoken by the bot will end the call. Eg: goodbye"
            style={{ height: "56px" }}
          />
        </div>
      </div>
    </div>
  );
}
