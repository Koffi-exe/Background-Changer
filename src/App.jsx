import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen grid" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-self-center self-end py-12">
          <div>
            <button
              onClick={()=>setColor("violet")}
              type="button"
              className="px-4 py-2 rounded-full mx-2 border-solid border-2 border-[black] bg-[violet]"
            >
              violet
            </button>
          </div>
          <div>
            <button
              onClick={()=>setColor("black")}
              type="button"
              className="px-4 py-2 rounded-full mx-2 text-white border-solid border-2 border-[black] bg-[Black]"
            >
              Black
            </button>
          </div>
          <div>
            <button
              onClick={()=>setColor("red")}
              type="button"
              className="px-4 py-2 rounded-full mx-2 border-solid border-2 border-[black] bg-[Red]"
            >
              Red
            </button>
          </div>
          <div>
            <button
              onClick={()=>setColor("blue")}
              type="button"
              className="px-4 py-2 rounded-full mx-2 border-solid border-2 border-[black] bg-[Blue]"
            >
              Blue
            </button>
          </div>
          <div>
            <button
              onClick={()=>setColor("yellow")}
              type="button"
              className="px-4 py-2 rounded-full mx-2 border-solid border-2 border-[black] bg-[Yellow]"
            >
              Yellow
            </button>
          </div>
          <div>
            <button
              onClick={()=>setColor("white")}
              type="button"
              className="px-4 py-2 rounded-full mx-2 border-solid border-2 border-[black] bg-[White]"
            >
              White
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
