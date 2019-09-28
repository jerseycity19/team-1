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

class Questionnaire extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        id: this.props.location.state.id,
        questionNumber: 0,
        questions: [{question: '', qid: ''}],
        questionLength: 0,
        answers: [],
        selectedAnswer: '',
        lastQuestion: false,
        postArray: { "answers": []}
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
            questionArray.push({ question: res.data[i].text, qid: res.data[i]._id });
            let currAnswer = [];
            for (let j = 0; j < res.data[i].responses.length; j++) {
              currAnswer.push({ label: res.data[i].responses[j], value: j + 1 });
            }
            answerArray.push(currAnswer)
          }
          this.setState({questions: questionArray, questionLength: questionArray.length, answers: answerArray});

        })
    }; 

    questionController = () => {
      if (this.state.questionNumber < this.state.questionLength - 1) {
        let ansObj = { "userId": this.state.id, "response": this.state.selectedAnswer, "questionId": this.state.questions[this.state.questionNumber].qid }
        let tempObj = this.state.postArray;
        tempObj.answers.push(ansObj.label);
        this.setState({questionNumber: this.state.questionNumber += 1, postArray: tempObj})
        console.log(this.state.postArray);
        //axios.post("http://localhost:1000/api/answers")
      }
      else {
        this.setState({lastQuestion: true});
        axios.post("http://localhost:1000/api/answers", this.state.postArray)
        .then(response => {
          //console.log(response);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
      }
      //console.log(this.state.selectedAnswer);
      //this.setState({selectedAnswer: ''});
    };

    handleChange = selectedAnswer => {
      this.setState({selectedAnswer})
      //console.log(this.state.selectedAnswer);
    };

    render() {
    //console.log(this.state.id);
    //console.log(this.state.answers);
    let index = this.state.questionNumber;
    const { selectedAnswer } = this.state.selectedAnswer;
    if (!this.state.lastQuestion) {
      return (
        <div class="question" className="questionPlacement">
          <h5 class="select">{this.state.questions[index].question}</h5>
          <div class="select"><Select value={selectedAnswer} options={ this.state.answers[index]} onChange={this.handleChange}></Select></div>
          <button class="button select" onClick={this.questionController}>Next Question</button><br />
          <div class="progress"><ProgressBar animated now={14 * index} /></div>
          <ImageFrame />
        </div>

    );
  }
  else {
    return (
      <div>
        <h1 className="SIA">Submit Information Anonymously</h1>
        <NavLink to="/"><button className="lastButton" onClick={this.questionController}>Submit</button></NavLink>
        <ImageFrame />
      </div>

  );
  }

  }
}

export default Questionnaire;
