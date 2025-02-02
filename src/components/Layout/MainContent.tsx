import { useEffect } from "react";

const MainContent = ({
  selectedModel,
  messages,
}: {
  selectedModel: string;
  messages: string[];
}) => {
  useEffect(() => {
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold">{selectedModel}</h2>
      <div className="h-1 w-full bg-gray-300 my-4"></div>
      <div className="flex-1 p-2 scroll-smooth">
        {messages.map((msg, index) => (
          <div key={index} className="flex flex-col">
            <div className="bg-blue-500 text-white p-2 rounded-lg self-end max-w-[80%] mb-2">
              {msg}
            </div>
            <div className="bg-gray-200 text-black p-2 rounded-lg self-start max-w-[80%] mb-8">
              text is: {msg}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;