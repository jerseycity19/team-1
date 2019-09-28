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
        topThreeCountries: ['Turkey', 'Syria', 'Iran'],
        reccuringPings: ["199.253.244.19", "199.233.214.19", "199.213.234.29"],
        killings: "",
        imprisonment: "",
        prosecution: "",
        lossOfPosition: "",
        travelRestrictions: "",
        other: ""       
      }
    };




    componentDidMount() {
        axios.get("http://localhost:1000/api/metrics")
            .then(res => {
                this.setState({
                    killings: res.data.killings,
                    imprisonment: res.data.imprisonment,
                    prosecution: res.data.prosecution,
                    lossOfPosition: res.data.lossOfPosition,
                    travelRestrictions: res.data.travelRestrictions,
                    other: res.data.other
                })
            })
        this.interval = setInterval(() => this.setState({ totalNumberSubmissions: this.state.totalNumberSubmissions += this.state.totalNumberSubmissions % 3 }), 30000);
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
                <p>Recurring IPs (Potential Fakes): {this.state.reccuringPings[0]}, {this.state.reccuringPings[1]}, {this.state.reccuringPings[2]}</p>
                <p>Killings: {this.state.killings}</p>
                <p>Imprisonment: {this.state.imprisonment}</p>
                <p>Prosecution: {this.state.prosecution}</p>
                <p>Loss of Position: {this.state.lossOfPosition}</p>
                <p>Travel Restrictions: {this.state.travelRestrictions}</p>
                <p>Other: {this.state.other}</p>
            </div>
        )

    }  
}
export default AdminPanel;
