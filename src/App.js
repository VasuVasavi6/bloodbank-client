import { useEffect } from "react";
import "./App.css";
import { REQUEST_URL } from "./CONSTANTS";

function App() {
  useEffect(() => {
    fetch(`${REQUEST_URL}/auth/login`, {
      method: "POST",
    }).then(() => {
      console.log("hello world");
    });
  }, []);
  return <div className="App">hello world</div>;
}

export default App;
