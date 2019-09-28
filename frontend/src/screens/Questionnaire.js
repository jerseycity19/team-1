import React from "react";
import Select from "react-select";
import { Route, Link, NavLink} from "react-router-dom";
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';

class Questionnaire extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        questionNumber: 0,
        questions: [],
        questionLength: 0,
        answers: [],
        selectedAnswer: '',
        lastQuestion: false,
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
              currAnswer.push({ label: res.data[i].responses[j], value: j + 1});
            }
            answerArray.push(currAnswer)
          }
          this.setState({questions: questionArray, questionLength: questionArray.length, answers: answerArray});

        })
    };

    questionController = () => {
      if (this.state.questionNumber < this.state.questionLength - 1) {
        this.setState({questionNumber: this.state.questionNumber += 1})
        //axios.post("http://localhost:1000/api/answers")
      }
      else {
        this.setState({lastQuestion: true});
      }
      console.log(this.state.selectedAnswer);
      this.setState({selectedAnswer: ''});
    };

    handleChange = selectedAnswer => {
      this.setState({selectedAnswer})
      //console.log(this.state.selectedAnswer);
    };

    render() {
    //console.log(this.state.answers);
    let index = this.state.questionNumber;
    const { selectedAnswer } = this.state.selectedAnswer;
    if (!this.state.lastQuestion) {
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
          <Select value={selectedAnswer} options={ this.state.answers[index]} onChange={this.handleChange}></Select>
          <button onClick={this.questionController}>Next Question</button>
          <div>
          <ProgressBar striped variant="success" now={(14 * index)} />
          </div>
        </div>

    );
  }
  else {
    return (
      <div>
        <h1>Complete!</h1>
        <NavLink to="/"><button onClick={this.questionController}>Finish</button></NavLink>
        
      </div>

  );
  }
    
  }
}

export default Questionnaire;
