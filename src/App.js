import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpressionEngine from "./components/ExpEngine";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <ExpressionEngine />
      </div>
    </div>
  );
}

export default App;
