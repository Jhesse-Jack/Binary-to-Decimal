import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Modal from './components/modal';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dec_num: '',
    };
    this.handleNumChange = (e) => {
      this.setState({
        dec_num: e.target.value,
      });
    }
    let sum = 0;
    let i = 0;

    //the logic behind
    this.converter = () => {
      while(this.state.dec_num){
        sum = sum + Math.pow(2, i) * (this.state.dec_num % 10);
        i++;
        this.state.dec_num = parseInt(this.state.dec_num / 10);
        console.log(sum);
      }        
      alert(sum);
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p> Enter any binary number (to be converted to decimal base): 
            &nbsp;
            <input 
              type="number" 
              className="form-control"
              placeholder="Enter any binary number"
              onChange={this.handleNumChange} />
          </p>
          <button 
            type="button" 
            className="btn btn-light"
            onClick={this.converter}>
            {/* //onClick={Modal}> */}
            CONVERT
          </button>
        </header>
      </div>
    );
  }
}

export default App;
