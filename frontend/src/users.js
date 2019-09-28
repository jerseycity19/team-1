import React from "react";
import { Route, Link} from "react-router-dom";
import axios from 'axios';

const User = ({ match }) => <p>{match.params.id}</p>;

class Users extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        QuestionNumber: 0,
        questions: [],
        questionLength: 0
      }

      this.questionController = this.questionController.bind(this);
    }

    componentDidMount() {
      axios.get('http://localhost:1000/api/questions')
        .then(res => {
          //const message1 = res.data.message;
          console.log(res);
          //this.setState({message: message1})
          let questionArray = [];
          for (let i = 0; i < res.data.length; i++) {
            questionArray.push(res.data[i].text);
          }
          this.setState({questions: questionArray, questionLength: questionArray.length});

        })
      this.setState({questionLength: this.state.questions.length});
    }

    questionController() {
      if (this.state.QuestionNumber < this.state.questionLength - 1) {
        this.setState({QuestionNumber: this.state.QuestionNumber += 1})
      }
      else {
        alert("MAX NUM QUESTIONS REACHED");
      }
    }



    render() {
    console.log(this.state.QuestionNumber);
    let index = this.state.QuestionNumber;
    return (
        <div>
          {/* <ul>
            <li>
              <Link to="/users/1">User 1 </Link>
            </li>
            <li>
              <Link to="/users/2">User 2 </Link>
            </li>
            <li>
              <Link to="/users/3">User 3 </Link>
            </li>
          </ul> */}
          <button onClick={this.questionController}>Next Question</button>
          <p>{this.state.message}</p>
          <p>{this.state.questions[index]}</p>
          <Route path="/users/:id" component={User} />
        </div>

    );
  }
}

export default Users;
