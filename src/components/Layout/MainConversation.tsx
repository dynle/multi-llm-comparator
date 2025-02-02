import { useRef, useEffect } from "react";

const MainConversation = ({
  selectedModel,
  prompts,
}: {
  selectedModel: string;
  prompts: string[];
}) => {
  const promptEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (promptEndRef.current) {
      promptEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [prompts]);

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold">{selectedModel}</h2>
      <div className="h-1 w-full bg-gray-300 my-1"></div>
      <div className="flex-1 overflow-y-auto p-2 border-t max-h-[calc(100vh-300px)]">
        {prompts.map((prompt, index) => (
          <div key={index} className="flex flex-col">
            {index % 2 === 0 ? (
              <div className="bg-blue-500 text-white p-2 rounded-lg self-end max-w-[80%] mb-2">
                {prompt}
              </div>
            ) : (
              <div className="bg-gray-200 text-black p-2 rounded-lg self-start max-w-[80%] mb-2">
                {prompt}
              </div>
            )}
          </div>
        ))}
        <div ref={promptEndRef} />
      </div>
    </div>
  );
};

export default MainConversation;