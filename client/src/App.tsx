import { Button } from "@nextui-org/button";
import { useState } from "react";
const App = () => {
  const [name, setName] = useState("Tanmayee");
  return (
    <div className="w-full h-screen flex-col gap-10 flex justify-center items-center bg-black">
      <h1 className="text-red-800 font-bold text-4xl bg-black">{name}</h1>
      <Button
        color="primary"
        onClick={() => {
          setName("Kundu");
        }}
      >
        Change
      </Button>
    </div>
  );
};

export default App;
