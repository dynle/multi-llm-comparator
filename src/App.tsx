import { useState } from "react";
import LeftPanel from "@/components/Layout/LeftPanel";
import MainConversation from "@/components/Layout/MainConversation";
import PromptInput from "@/components/Layout/PromptInput";

function App() {
  const [selectedModels, setSelectedModels] = useState(["GPT-4o mini"]);
  const [prompts, setPrompts] = useState<{ [key: string]: string[] }>({
    "GPT-4o mini": [],
  });
  const [currentInput, setCurrentInput] = useState("");

  const handleAddModel = (model: string) => {
    if (!selectedModels.includes(model)) {
      setSelectedModels([...selectedModels, model]);
      setPrompts({ ...prompts, [model]: [] });
    }
  };

  const handleRemoveModel = (model: string) => {
    setSelectedModels(selectedModels.filter((m) => m !== model));
    const updatedPrompts = { ...prompts };
    delete updatedPrompts[model];
    setPrompts(updatedPrompts);
  };

  const handleSend = () => {
    // TODO: LLM API call here
    const updatedPrompts = { ...prompts };
    selectedModels.forEach((model) => {
      const userPrompt = `${currentInput}`;
      let replyPrompt = "";
      if (model === "GPT-4o mini") {
        // TODO: GPT-4o mini API call here
        replyPrompt = `GPT-4o mini - text is: ${currentInput}`;
      } else {
        // TODO: deepseek API call here
        replyPrompt = `deepseek - text is: ${currentInput}`;
      }
      updatedPrompts[model] = [...updatedPrompts[model], userPrompt, replyPrompt];
    });
    setPrompts(updatedPrompts);
    setCurrentInput("");
  };

  return (
    <div className="flex min-h-screen">
      <LeftPanel setSelectedModel={handleAddModel} />
      <div className="flex flex-col flex-1">
        <div className="flex-[7] flex bg-gray-200 p-4 gap-4">
          {selectedModels.map((model) => (
            <div key={model} className="flex-1 min-w-[300px] flex flex-col">
              <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow-lg relative flex flex-col">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveModel(model);
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                >
                  X
                </button>
                <MainConversation selectedModel={model} prompts={prompts[model]} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-[1] bg-white p-4 shadow-md">
          <PromptInput
            prompt={currentInput}
            setPrompt={setCurrentInput}
            handleSend={handleSend}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
