import { useState } from "react";
import "./App.css";
import TodoHeader from "./Compunents/todoHeader";

function App() {
  const [inputSearch, setinputSearch] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-4 py-8 sm:px-6 lg:px-10 lg:py-16">
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <TodoHeader inputSearch={inputSearch} setinputSearch={setinputSearch} />
      </div>
    </div>
  );
}

export default App;
