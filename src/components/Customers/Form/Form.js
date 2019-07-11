import React, {Component} from 'react';
import './Form.css'

class Form extends Component{
constructor(){
  super();
  this.state ={
    customerID: this.props.customerID
  };
}

componentDidMount(){

}

  render(){
    
    
    return(
      
    <form className="formDiv">
      <h1>Ticket Form</h1>
      <label for="description">Description</label>
      <textarea name="description"></textarea> 
      <label for="time">Please enter the date and time.</label>
      <input name="time" type="datetime-local"></input>
      <label for="status">Please enter the status.</label>
      <select name="status">
        <option className="critical" value="critical">Critical</option>
        <option className="semi" value="semi-critical">Semi-Critical</option>
        <option className="task" value="task">Task</option>
        <option className="closed" value="closed">Closed</option>
      </select>
        <button onClick={() => {
          this.props.toggleForm()
        }}>Submit</button>
    </form>
    )
  }
 
}

export default Form;