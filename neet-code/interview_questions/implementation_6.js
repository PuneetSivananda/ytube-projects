import "./styles.css";
import { useState, useEffect } from "react";

// cost arr = [{name: "N1", age:2}, {name: "N2", age:3},{name: "N3", age:4},{name: "N4", age:2}]
// list display original list
// button
// on click of button display unique names
const DisplayME = () => {
  const [count, setCount] = useState(["N1", "N2", "N3", "N1"]);

  return (
    <div>
      List:
      {/* {JSON.stringify(count)} */}
      {count.map((item) => {
        return <li>{item}</li>;
      })}
      <br />
      <button
        onClick={() => {
          setCount([...new Set(count)]);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <DisplayME />
    </div>
  );
}
