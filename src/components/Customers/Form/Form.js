import React, {Component} from 'react';
import axios from 'axios';
import './Form.css'
import DisplayCustomer from '../DisplayCustomer/DisplayCustomer'
class Form extends Component{
constructor(){
  super();
  this.state = {
    customer: [],
    // 
    description: "",
    status: "", 
    time:"",
    customerId: 0

  };
}

componentDidMount(){
  let {customerId} = this.props;
  axios.get(`/api/customers/${customerId}`).then( res =>{
    this.setState({customer: res.data})
  }
  )
}

handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value});
}

handleSubmit(e){
  let {description, status, time, customerId} = this.state;
  let{toggleForm} = this.props;

  e.preventDefault();
axios.post('/api/tickets', {
  description: description,
  status: status, 
  time:time,
  customerId: customerId
}).then(() =>{toggleForm(0)})
}


  render(){
    let {id, first_name, last_name, phone, email} = this.state.customer;
    
    console.log(this.state);
    
    return(
    <div className="formPageDiv">
        <DisplayCustomer id={id} first_name={first_name} last_name={last_name} phone={phone} email={email}/>
    <form className="formDiv" onSubmit={this.handleSubmit } > 
      <h1>Ticket Form</h1>
      <label >Description</label>
      <textarea name="description" onChange={this.handleChange}></textarea> 
      <label>Please enter the date and time.</label>
      <input name="time" type="date"  value={this.state.time} onChange={this.handleChange}></input>
      <label >Please enter the status.</label>
      <select name="status" value={this.state.status} onChange={this.handleChange}>
        <option className="critical" value="Critical">Critical</option>
        <option className="semi" value="Semi-Critical">Semi-Critical</option>
        <option className="task" value="Task">Task</option>
        <option className="closed" value="Closed">Closed</option>
      </select>
      <input value={this.props.customerId} name="customerId" type="hidden"></input>
        <button>Submit</button>
    </form>
    </div>
    )
  }
 
}

export default Form;