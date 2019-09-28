import React from "react";
import Select from "react-select";
import { Route, Link} from "react-router-dom";
import axios from 'axios';

const User = ({ match }) => <p>{match.params.id}</p>;

class Users extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        questionNumber: 0,
        questions: [],
        questionLength: 0,
        answers: [],
        selectedAnswer: '',
      }

      this.questionController = this.questionController.bind(this);
      this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {
      axios.get('http://localhost:1000/api/questions')
        .then(res => {
          //const message1 = res.data.message;
          //console.log(res);
          //this.setState({message: message1})
          //console.log(res);
          let questionArray = [];
          let answerArray = [];
          for (let i = 0; i < res.data.length; i++) {
            questionArray.push(res.data[i].text);
            let currAnswer = [];
            for (let j = 0; j < res.data[i].responses.length; j++) {
              currAnswer.push({ label: res.data[i].responses[j], value: j});
            }
            answerArray.push(currAnswer)
          }
          this.setState({questions: questionArray, questionLength: questionArray.length, answers: answerArray});

        })
    };

    questionController() {
      if (this.state.questionNumber < this.state.questionLength - 1) {
        this.setState({questionNumber: this.state.questionNumber += 1})
      }
      else {
        alert("MAX NUM QUESTIONS REACHED");
      }
    };

    handleChange = selectedAnswer => {
      this.setState({selectedAnswer})
      console.log(this.state.selectedAnswer);
    };

    render() {
    console.log(this.state.answers);
    let index = this.state.questionNumber;
    const { selectedAnswer } = this.state.selectedAnswer;
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
          <p>{this.state.questions[index]}</p>
          <Select options={ this.state.answers[index]} onChange={this.handleChange}></Select>
          <button onClick={this.questionController}>Next Question</button>
          
          <Route path="/users/:id" component={User} />
        </div>

    );
  }
}

export default Users;
