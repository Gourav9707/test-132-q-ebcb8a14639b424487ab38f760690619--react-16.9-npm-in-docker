import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  const [exp, setExp] = React.useState("");
  const [reset, setReset] = React.useState(false);
  const handlecls = () => {
    setReset(false);
    setExp("");
  };
  const handledel = () => {
    if (exp === "") return;
    let str = exp.substr(0, exp.length - 1);
    setExp(str);
  };
  const handleres = () => {
    let result;
    setReset(true);
    try {
      result = evaluate(exp);
      if (result.toString() === "Infinity") setExp("Math Error");
      else setExp(result.toString());
    } catch {
      setExp("Math Error");
    }
  };
  const handleclick = (val) => {
    let finalexp;
    if (exp === "" || reset === true) {
      finalexp = val.toString();
      setReset(false);
    } else finalexp = exp + val.toString();
    setExp(finalexp);
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="calculator">
        <div className="title">Simple calculator</div>
        <div className="container">
          <div className="screen">{exp.length === 0 ? 0 : exp}</div>
          <div className="keypad">
            <div className="row">
              <button onClick={() => handlecls()} id="clear">
                AC
              </button>
              <button onClick={() => handledel()} id="delete">
                DEL
              </button>
              <button onClick={() => handleres()} id="equal">
                =
              </button>
              <button onClick={() => handleclick("/")} id="divide">
                /
              </button>
            </div>
            <div className="row">
              <button onClick={() => handleclick(7)} id="7">
                7
              </button>
              <button onClick={() => handleclick(8)} id="8">
                8
              </button>
              <button onClick={() => handleclick(9)} id="9">
                9
              </button>
              <button onClick={() => handleclick("*")} id="multiply">
                *
              </button>
            </div>
            <div className="row">
              <button onClick={() => handleclick(4)} id="4">
                4
              </button>
              <button onClick={() => handleclick(5)} id="5">
                5
              </button>
              <button onClick={() => handleclick(6)} id="6">
                6
              </button>
              <button onClick={() => handleclick("-")} id="subtract">
                -
              </button>
            </div>
            <div className="row">
              <button onClick={() => handleclick(1)} id="1">
                1
              </button>
              <button onClick={() => handleclick(2)} id="2">
                2
              </button>
              <button onClick={() => handleclick(3)} id="3">
                3
              </button>
              <button onClick={() => handleclick("+")} id="add">
                +
              </button>
            </div>
            <div className="row">
              <button onClick={() => handleclick(0)} id="0">
                0
              </button>
              <button onClick={() => handleclick(".")} id="dot">
                .
              </button>
              <button onClick={() => handleclick("%")} id="percentile">
                %
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
