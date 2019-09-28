import React from "react";
import { Route, Link} from "react-router-dom";
import axios from 'axios';

const User = ({ match }) => <p>{match.params.id}</p>;

class Users extends React.Component {
    state = {
      message: "temp"
    }

    componentDidMount() {
      axios.get('http://localhost:1000/')
        .then(res => {
          const message1 = res.data.message;
          console.log(res);
          this.setState({message: message1})
        })
    }

    render() {
    console.log("test");
    return (
        <div>
            <h1>Users</h1>
          <strong>select a user</strong>
          <ul>
            <li>
              <Link to="/users/1">User 1 </Link>
            </li>
            <li>
              <Link to="/users/2">User 2 </Link>
            </li>
            <li>
              <Link to="/users/3">User 3 </Link>
            </li>
          </ul>
          <p>{this.state.message}</p>
          <Route path="/users/:id" component={User} />
        </div>

    );
  }
}

export default Users;
