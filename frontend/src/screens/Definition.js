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

class Definition extends React.Component {
    render() {

        return (
        <div>
            <h1 className="self-cen-title">Self Censorship</h1>
            <h3 className='self-cen-content'>Self-censorship in higher education is defined as refraining from examining specific research questions, teaching specific topics, or sharing specific theories, evidence or ideas, through publication or public or private expression, (collectively, "professional expression"), because of fear of professional (e.g. losing job or promotion), legal (e.g. persecution or fine), or violent retaliation (e.g. harassment, assault), whether from state or non-state sources, against yourself or others (e.g. family memebers).</h3>
            <NavLink to="/userinfo"><button className="lastButton" onClick={this.questionController}>Continue</button></NavLink>
            <ImageFrame />
        </div>

    );
  }

}

export default Definition;
