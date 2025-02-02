const LeftPanel = ({ setSelectedModel }: { setSelectedModel: (model: string) => void }) => (
  <aside className="w-1/6 bg-gray-50 p-4">
    <h2 className="text-xl font-bold">AI Models</h2>
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
);

export default LeftPanel;