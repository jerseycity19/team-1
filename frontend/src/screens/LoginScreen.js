import React from "react";
import Select from "react-select";
import { Route, Link, Redirect} from "react-router-dom";
import axios from 'axios';

class LoginScreen extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        success: false,
        username: '',
        password: ''
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeUser = this.handleChangeUser.bind(this);
      this.handleChangePass = this.handleChangePass.bind(this);
    };

    handleSubmit() {
        if (this.state.username === "" && this.state.password === "") {
            this.setState({success: true})
        }
        else {
            alert("Invalid Credentials.");
        }
    }

    handleChangeUser(event) {
        this.setState({ username: event.target.value });
    }

    handleChangePass(event) {
        this.setState({ password: event.target.value});
    }

    render() {
    //console.log(this.state.answers);
    if (this.state.success === true) {
        return <Redirect to="/admin"></Redirect>
    }
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:<input type="text" name="name" value={this.state.username} onChange={this.handleChangeUser} />
                </label>
                <br></br>
                <label>
                    Password:<input type="text" name="name" value={this.state.password} onChange={this.handleChangePass} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );    
  }
}

export default LoginScreen;
