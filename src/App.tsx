import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";

function App() {
  const [selectedModel, setSelectedModel] = useState("GPT-4o mini");

  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <aside className="w-1/6 bg-gray-100 p-4">
        <h2 className="text-xl font-bold">Models</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="#"
              className="text-blue-500 cursor-pointer"
              onClick={() => setSelectedModel("GPT-4o mini")}
            >
              GPT-4o mini
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-blue-500 cursor-pointer"
              onClick={() => setSelectedModel("deepseek")}
            >
              deepseek
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-gray-50 p-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-8">Multiple-LLM-Comparator</h1>

        {/* Gray Background Area */}
        <div className="bg-gray-200 p-6 rounded-lg h-[calc(100vh-64px)] flex flex-col space-y-4">
          {/* Big Box with Title */}
          <div className="bg-white p-4 rounded-lg shadow-md flex-1 flex flex-col">
            <h2 className="text-2xl font-bold mb-4">{selectedModel}</h2>
            <div className="bg-gray-100 flex-1 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Main Content for {selectedModel}</p>
            </div>
          </div>

          {/* White Box with Button */}
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 flex-none h-1/5">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg p-2"
            />
            <button
              className={buttonVariants({})}
            >
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
