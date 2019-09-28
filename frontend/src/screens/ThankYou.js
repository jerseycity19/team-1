import React from "react";
import Select from "react-select";
import { Route, Link, NavLink} from "react-router-dom";
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../styles/isa-index.css';
import frame from '../images/Frame.png';

class ImageFrame extends React.Component {
  render() {
    return (
      <div>
        <img src={frame} className="imageFrame"></img>
      </div>
    );
  }
}

class ThankYou extends React.Component {
    render() {
        return (
        <div>
            <h1 className="SIA">Thank you for sharing your views.</h1>
            <NavLink to="/"><button className="lastButton" onClick={this.questionController}>Home</button></NavLink>
            <ImageFrame />
        </div>

    );
  }

}

export default ThankYou;
