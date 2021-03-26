import React, {useState} from 'react';
import './bootstrap.min.css';
import './App.css';
import { Button, Modal } from 'react-bootstrap';

const App = () => {
    let [decnum, setDecnum] = useState('');
    function handleNumChange(e){
      setDecnum(e.target.value);
      // var numbers = [0-1]
      // if(decnum.match(numbers)){
      //   setDecnum(e.target.value)
      // }
      // else {
      //   alert("Your number should be between 0 and 1");
      // }
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