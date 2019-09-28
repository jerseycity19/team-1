import React from 'react';
import frame from '../images/Frame.png';
import '../styles/isa-index.css';
import axios from 'axios';
import { Route, Link, Redirect} from "react-router-dom";

class Userinfo extends React.Component {
  render() {
    return (
      <div>
        <img className="logo" src="https://www.scholarsatrisk.org/wp-content/themes/sink_sar/images/logo.png"/>
        <h1>User Information</h1>
      </div>

    );
  }
}

class ImageFrame extends React.Component {
  render() {
    return (
      <div>
        <img src={frame} className="imageFrame"></img>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ID: '', completed: false };
  }

  handleSubmit = (e) => {
    let postUserInfo = { "info": {
                            "identification": this.input1.value,
                            "ageRange": this.input2.value,
                            "gender": this.input3.value,
                            "country": this.input4.value,
                            "language": this.input5.value,
                            "employment": this.input6.value,
                            "disciple": this.input7.value,
                            "sensitivity": this.input8.value,
                            "userIp": "199.253.244.19"
                        }
                      }
    let id = '';
    //alert('The value is: ' + this.input1.value + ' ' + this.input2.value + ' ' + this.input3.value + ' ' + this.input4.value + ' ' + this.input5.value + ' ' + this.input6.value + ' ' + this.input7.value + ' ' + this.input8.value);
    axios.post("http://localhost:1000/api/users", postUserInfo)
      .then(response => {
        //console.log(response);
        id = response.data.id;
        this.setState({ID: id})
      })
      .catch(function (error) {
        console.log(error);
      })
    e.preventDefault();
    setTimeout(() => {
        this.setState({completed: true}); 
    }, 1000);
  
    
    
  }
  render() {
    
    if (this.state.completed === true) {
      console.log(this.state.ID);
      return <Redirect to={{pathname: '/questionnaire', state: { id: this.state.ID }}}></Redirect>
    }
    return (
      <div className="rootParts bodyParts">
        <Userinfo />
        <div>
          <label>
            User Identification:
            <input list="user_id" ref={(input) => this.input1 = input} />
            <datalist id="user_id">
              <option value="Scholar">Scholar</option>
              <option value="Student">Student</option>
              <option value="Administrator">Administrator</option>
              <option value="Non-University">Non-University</option>
            </datalist>
          </label><br />
          <label>
            Age Range:
            <input list="age_range" ref={(input) => this.input2 = input} />
            <datalist id="age_range">
              <option value="20-29">20-29</option>
              <option value="30-39">30-39</option>
              <option value="40-49">40-49</option>
              <option value="50-59">50-59</option>
              <option value="60-69">60-69</option>
              <option value="70+">70+</option>
            </datalist>
          </label><br />
          <label>
            Gender:
            <input list="gender" ref={(input) => this.input3 = input} />
            <datalist id="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Nonbinary">Nonbinary</option>
            </datalist>
          </label><br />
          <label>
            Country:
            <input list="country" ref={(input) => this.input4 = input} />
            <datalist id="country">
              <option value="North America">North America</option>
              <option value="South/Central America">South/Central America</option>
              <option value="Middle East & North Africa">Middle East & North Africa</option>
              <option value="Sub-Saharan Africa">Sub-Saharan Africa</option>
              <option value="Southeast Asia">Southeast Asia</option>
              <option value="Europe">Europe</option>
              <option value="Central Asia">Central Asia</option>
              <option value="Pacific Islands">Pacific Islands</option>
            </datalist>
          </label><br />
          <label>
            Primary Professional Language:
            <input list="language" ref={(input) => this.input5 = input} />
            <datalist id="language">
              <option value="Arabic">Arabic</option>
              <option value="Chinese">Chinese</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Turkish">Turkish</option>
            </datalist>
          </label><br />
          <label>
            Employment Status:
            <input list="employment" ref={(input) => this.input6 = input} />
            <datalist id="employment">
              <option value="Tenure/Permanent">Tenure/Permanent</option>
              <option value="Full-Time Time-Limited Contract">Full-Time Time-Limited Contract</option>
              <option value="Adjunct/Part-Time">Adjunct/Part-Time</option>
              <option value="Part-Time No Contract">Part-Time No Contract</option>
              <option value="Not Employed">Not Employed</option>
            </datalist>
          </label><br />
          <label>
            Discipline Area:
            <input list="area" ref={(input) => this.input7 = input} />
            <datalist id="area">
              <option value="Natural Sciences">Natural Sciences</option>
              <option value="Social Sciences">Social Sciences</option>
              <option value="Arts & Humanities">Arts & Humanities</option>
              <option value="Engineering">Engineering</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Medicine">Medicine</option>
              <option value="Business/Finance">Business/Finance</option>
              <option value="Law/Human Rights">Law/Human Rights</option>
              <option value="Other">Other</option>
            </datalist>
          </label><br />
          <label>
            How sensitive is your work?
            <input list="sensitivity" ref={(input) => this.input8 = input} />
            <datalist id="sensitivity">
              <option value="Not Very Sensitive">Not Very Sensitive</option>
              <option value="Somewhat Sensitive">Somewhat Sensitive</option>
              <option value="More Sensitive Than Most">More Sensitive Than Most</option>
              <option value="Extremely Sensitive">Extremely Sensitive</option>
            </datalist>
          </label><br />
          <button className="button" type="button" value="Submit" onClick={(e) => this.handleSubmit(e)}>Submit </button>
        </div>
        <ImageFrame />
      </div>
    );
  }
}

export default App;
