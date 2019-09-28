import React from "react";
import Select from "react-select";
import { Route, Link, NavLink} from "react-router-dom";
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';

class AdminPanel extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        totalNumberSubmissions: 100,
        topThreeCountries: ['Turkey', 'Syria', 'Iran']
      }


    };


    componentDidMount() {
        this.interval = setInterval(() => this.setState({ totalNumberSubmissions: this.state.totalNumberSubmissions += this.state.totalNumberSubmissions % 3 }), 1000);
    }
    componentWillUnmount() {
    clearInterval(this.interval);
    }
      

    updateState = () => {
        this.setState({totalNumberSubmissions: this.state.totalNumberSubmissions += 1})
    }

    render() {
        return (
            <div>
                <p>Total number of submissions: {this.state.totalNumberSubmissions}</p>
                <p>Current Top Three Countries with SAR: {this.state.topThreeCountries[0]}, {this.state.topThreeCountries[1]}, {this.state.topThreeCountries[2]}</p>
            </div>
        )

    }  
}
export default AdminPanel;
