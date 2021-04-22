import React, { useState } from "react";
import "./bootstrap.min.css";
import "./App.css";
import { Button } from "react-bootstrap";
import ResultModal from "./components/Modal";
// import { render } from "@testing-library/react";

const App = () => {
  // var regexp = /^[0-1]*[:.,-]?$/g;
  const [show, setShow] = useState(false);
  const [decnum, setdecnum] = useState("");
  const [isValid, setisValid] = useState(false);
  const [decimal, setDecimal] = useState(null);

  const handleShow = () => {
    setShow(true);
    setDecimal(convertToDecimal());
    clearInput();
  };
  const handleClose = () => setShow(false);

  const handleNumChange = (e) => {
    const regexp = /^[0-1]*[:.,-]?$/g;
    if (regexp.test(e.target.value)) {
      setisValid(true);
      setdecnum(e.target.value);
    } else {
      setisValid(false);
    }
  };

  const convertToDecimal = () => {
    // function to do conversion
    return parseInt(decnum, 2);
  };

  const clearInput = () => {
    setdecnum("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {" "}
          Enter any binary number (to be converted to decimal base): &nbsp;
          <input
            type="number"
            className="form-control"
            placeholder="Enter any binary number"
            title="Binary numbers only"
            onChange={handleNumChange}
            value={decnum}
          />
          {!isValid ? (
            <p style={{ color: "red", fontSize: "12px", textAlign: "left" }}>
              Input a Binary Number
            </p>
          ) : null}
          <Button variant="primary" onClick={handleShow}>
            CONVERT
          </Button>
        </p>

        <ResultModal show={show} close={handleClose} result={decimal} />
      </header>
    </div>
  );
};

export default App;
