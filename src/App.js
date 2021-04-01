import React, {useState} from 'react';
import './bootstrap.min.css';
import './App.css';
import { Button, Modal } from 'react-bootstrap';

const App = () => {
    let [decnum, setDecnum] = useState('');
    var decformat = /^[0-1]$/;
    function testDecimal(decnum){
      var formatOK = decformat.exec(decnum.value);
      if (!formatOK){
        console.error(decnum.value + 'isn\'t a binary number!');
      } else {
        console.log('Thanks, the number entered is binary');
      }
    }
    const finalvar = decnum
    function isBinCorrect(finalvar){
      for (var i of finalvar){
        if (i !== 0 && i !== 1){
          console.log("Not a binary number, try again");
        }
        else {
          console.log('Thanks, binary is accepted');
        }
      }
    }
    function handleNumChange(e){
      setDecnum(e.target.value);
    }
    let summation = 0;
    let i = 0;

    return (
        <div className="App">
            <header className="App-header">
                <p> Enter any binary number (to be converted to decimal base): 
                    &nbsp;
                    <input 
                        type="number"
                        className="form-control"
                        placeholder="Enter any binary number"
                        onChange={handleNumChange} />
                </p>
                <button
                  onClick={isBinCorrect}>
                  test
                </button>
                <Modale />
            </header>
        </div>
    );

    function Modale(props){
      const [show, setShow] = useState(false);
      const handleShow = () => setShow(true);
      const handleClose = () => setShow(false);
      while(decnum){
        summation = summation + Math.pow(2, i) * (decnum % 10);
        i++;
        decnum = parseInt(decnum / 10);
        console.log(summation);
      }
      return (
        <>
          <Button variant="primary" onClick={handleShow}>
            CONVERT
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title> Binary Converter </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Your answer is: {summation}
            </Modal.Body>
            <Modal.Footer>
              <Button variant = "secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )
    }
};



export default App;