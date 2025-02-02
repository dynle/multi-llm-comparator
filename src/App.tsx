import { useState } from "react";
import LeftPanel from "@/components/Layout/LeftPanel";
import MainContent from "@/components/Layout/MainContent";
import WhiteBox from "@/components/Layout/WhiteBox";

function App() {
  const [selectedModel, setSelectedModel] = useState("GPT-4o mini");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    alert(`Entered text: ${message}`);
  };

  return (
    <div className="flex min-h-screen">
      <LeftPanel setSelectedModel={setSelectedModel} />
      <main className="flex-1 bg-gray-200 p-8 flex flex-col">
        <MainContent selectedModel={selectedModel} />
        <WhiteBox message={message} setMessage={setMessage} handleSend={handleSend} />
      </main>
    </div>
  );
}

export default App;