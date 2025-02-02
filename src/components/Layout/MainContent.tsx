const MainContent = ({ selectedModel }: { selectedModel: string }) => (
  <div className="flex flex-col h-full">
    <h2 className="text-2xl font-bold">{selectedModel}</h2>
    <div className="h-1 w-full bg-gray-300 my-4"></div>
    <div className="flex-1 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Main Content for {selectedModel}</p>
    </div>
  </div>
);

export default MainContent;