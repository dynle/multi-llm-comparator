import { useState } from "react";
import LeftPanel from "@/components/Layout/LeftPanel";
import MainContent from "@/components/Layout/MainContent";
import WhiteBox from "@/components/Layout/WhiteBox";

function App() {
  const [selectedModels, setSelectedModels] = useState(["GPT-4o mini"]);
  const [messages, setMessages] = useState<{ [key: string]: string[] }>({
    "GPT-4o mini": [],
  });
  const [currentInput, setCurrentInput] = useState("");

  const handleAddModel = (model: string) => {
    if (!selectedModels.includes(model)) {
      setSelectedModels([...selectedModels, model]);
      setMessages({ ...messages, [model]: [] });
    }
  };

  const handleRemoveModel = (model: string) => {
    setSelectedModels(selectedModels.filter((m) => m !== model));
    const updatedMessages = { ...messages };
    delete updatedMessages[model];
    setMessages(updatedMessages);
  };

  const handleSend = () => {
    const updatedMessages = { ...messages };
    selectedModels.forEach((model) => {
      const userMessage = `${currentInput}`;
      let replyMessage = "";
      if (model === "GPT-4o mini") {
        // TODO: GPT-4o mini API call here
        replyMessage = `GPT-4o mini - text is: ${currentInput}`;
      } else {
        // TODO: deepseek API call here
        replyMessage = `deepseek - text is: ${currentInput}`;
      }
      // const replyMessage = `${model} - text is: ${currentInput}`;
      updatedMessages[model] = [...updatedMessages[model], userMessage, replyMessage];
    });
    setMessages(updatedMessages);
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
                <MainContent selectedModel={model} messages={messages[model]} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-[1] bg-white p-4 shadow-md">
          <WhiteBox
            message={currentInput}
            setMessage={setCurrentInput}
            handleSend={handleSend}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
