import { useEffect, useRef } from "react";

const MainContent = ({
  selectedModel,
  messages,
}: {
  selectedModel: string;
  messages: string[];
}) => {
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold">{selectedModel}</h2>
      <div className="h-1 w-full bg-gray-300 my-4"></div>
      <div className="flex-1 overflow-y-auto p-2">
        {messages.map((msg, index) => (
          <div key={index} className="flex flex-col">
            <div className="bg-blue-500 text-white p-2 rounded-lg self-end">
              {msg}
            </div>
            <div className="bg-gray-200 text-black p-2 rounded-lg self-start mt-2">
              text is: {msg}
            </div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
    </div>
  );
};

export default MainContent;