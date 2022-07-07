
import "./App.css";

import { Card } from "./component/card/index";
import { Product } from "./pages/product/index";
function App() {
  return (
    <div className="App">
      <div
        style={{
          height: "100%",
          display: "flex",
          // border: "1px solid black",
          padding: "3em",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* <Card /> */}
        <Product />
      </div>
    </div>
  );
}

export default App;
