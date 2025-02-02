import { useEffect } from "react";

const PromptInput = ({
  prompt,
  setPrompt,
  handleSend,
}: {
  prompt: string;
  setPrompt: (value: string) => void;
  handleSend: () => void;
}) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.metaKey && e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSend]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="⌘+ENTER to send"
        className="flex-1 border border-gray-300 rounded-lg p-2 resize-none"
      ></textarea>
      <div className="flex justify-between items-center mt-2">
        <span className="text-gray-500 text-sm">{prompt.length} characters</span>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default PromptInput;