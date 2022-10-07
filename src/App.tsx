import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { FP } from "./components";

const Em = ({ children }: { children: React.ReactNode }) => (
  <em style={{ background: "yellow", color: "black" }}>{children}</em>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <FP as="div">Hello Text world</FP>

        <FP as="h1">
          Edit <code>src/App.tsx</code> and save to reload.
        </FP>

        {/* Example: passing a specific component prop */}
        <FP color="violet">Hello world</FP>

        {/* Example: the 'as' prop can also take in a custom component*/}
        <FP as={Em}>This is important</FP>

        <FP
          as="a"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </FP>
      </header>
    </div>
  );
}

export default App;
