import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        return data;
      });
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <table>
        <tr>
          <td
            onClick={() => {
              setData(data.sort());
            }}
          >
            Name
          </td>
          <td>email</td>
          <td>description</td>
        </tr>
        {data.length > 0 &&
          data.map((element) => {
            return (
              <tr>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.body}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}
