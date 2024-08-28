import { useEffect, useState } from "react";
import "./App.css";

let api: any;

function App() {
  const [data, setData] = useState<any>(null);
  const availableApis = (window as any).pitcher.getAvailableApis();
  const isUi = availableApis.includes("ui");

  useEffect(() => {
    if (isUi) {
      api = (window as any).pitcher.useUi();
    }
  }, []);

  return (
    <>
      {isUi && (
        <div className="flex flex-col gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              api.selectContent({}).then((d: any) => setData(d));
            }}
          >
            UI select content
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              console.log(api);
              api
                .selectCanvases({
                  selections: [],
                })
                .then((d: any) => setData(d));
            }}
          >
            UI select canvases
          </button>
        </div>
      )}
      <div>{JSON.stringify(data, null, 2)}</div>
    </>
  );
}

export default App;
