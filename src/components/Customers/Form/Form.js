import React, {Component} from 'react';
import axios from 'axios';
import './Form.css'
import DisplayCustomer from '../DisplayCustomer/DisplayCustomer'

class Form extends Component{
constructor(){
  super();
  this.state = {
    customer: [],
    description: "",
    status: "", 
    time:"",
    customerId: 0
 
  };
}

componentDidMount(){
  let {customerId} = this.props;
  this.setState({customerId: customerId})
  axios.get(`/api/customers/${customerId}`).then( res =>{
    this.setState({customer: res.data})
  }
  )
}

handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value});
}

handleSubmit = (e) =>{
  e.preventDefault();
  
  let {description, status, time, customerId} = this.state;
  
  let{toggleForm} = this.props;

axios.post('/api/tickets', {
  description,
  status, 
  time,
  customerId
}).then((response) =>{
  console.log(response);
  toggleForm(customerId);
}).catch(err => console.log(err));
}
// createTicket=() =>{
//   Axios.post('api/tickets', {customerId: 3, description: "jdlfjaldjfdf", status: "Task"
//   }).then(res =>{
//     this.setState({tickets: res.data});
//   })
// }


  render(){
    let {id, first_name, last_name, phone, email} = this.state.customer;
    
    
    return(
    <div className="formPageDiv">
        <DisplayCustomer id={id} first_name={first_name} last_name={last_name} phone={phone} email={email}/>
    <form className="formDiv"> 
      <h1>Ticket Form</h1>
      <label >Description</label>
      <textarea name="description" onChange={this.handleChange}></textarea> 
      <label>Please enter the date and time.</label>
      <input name="time" type="date"  value={this.state.time} onChange={this.handleChange}></input>
      <label >Please enter the status.</label>
      <select name="status" value={this.state.status} onChange={this.handleChange} required>
        <option value="">None</option>
        <option className="critical" value="Critical">Critical</option>
        <option className="semi" value="Semi-Critical">Semi-Critical</option>
        <option className="task" value="Task">Task</option>
        <option className="closed" value="Closed">Closed</option>
      </select>
      <input value={this.props.customerId} name="customerId" type="hidden"></input>
        <button onClick={this.handleSubmit}>Submit</button>
    </form>
    </div>
    )
  }
 
}

export default Form;