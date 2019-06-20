import React from "react";
import "./App.css";
import { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import {
  FacebookShareButton,
  TwitterShareButton,  FacebookIcon
} from "react-share";
import Header from "../src/Header"


function One() {
  return (
    <div>
      <h1>Function 01</h1>
      <h2>Function 02</h2>
    </div>
  );
}

var Two = function() {
  return <div>Anonymous function</div>;
};

var Three = () => <div>Arrow function</div>;

class Four extends Component {
  render() {
    return <div>Class</div>;
  }
}

function Demo(props) {
  return (
    <div className="col-5">
      <div className="card">
        <img
          src="http://placehold.it/700x300"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">{props.title}</p>
        </div>
      </div>
    </div>
  );
}

class DemoProps extends Component {
  render() {
    return (
      <div>
        <div className="col-4">
          <div className="card">
            <img
              src="http://placehold.it/700x300"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">{this.props.title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//example of map
const x = [1, 2, 3, 4, 5];
const x1 = x.map(x => x * 2);



function App() {
  console.log(window);
  return (
  
    <div className="App">
  

  <Header/>
     
    </div>
  );
}

export default App;
