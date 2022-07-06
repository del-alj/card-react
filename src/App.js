import logo from "./logo.svg";
import "./App.css";

import { Card } from "./component/card/index";
function App() {
  return (
    <div className="App">
      <div
        style={{
          height: "100%",
          display: "flex",
          border: "1px solid black",
          padding: "3em",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Card />
      </div>
    </div>
  );
}

export default App;
