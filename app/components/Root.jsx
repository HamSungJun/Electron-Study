import React from "react";
import ReactDOM from "react-dom";
import "./Root.css";

const Root = () => (
  <div>
    <h1 className="header">Electron React</h1>
  </div>
);

ReactDOM.render(<Root />, document.getElementById("root"));
