import React, {Component} from 'react'

class DisplayTicket extends Component{
  constructor(props){
    super(props);
    this.state = {
      status: this.props.ticket.status,
      description: this.props.ticket.description,
      editTest: false
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    let {id, status, description, customerId, time} = this.props.ticket;
  return (<article  className="ticketBox">
  <div className="ticketTop">
   <div className="topLeft">
     <p>Ticket ID: {id}</p>
     <p>Customer ID: {customerId}</p>
     <p>Date: {time}</p> 
     <p>Status: {status}</p>
   </div>

   <div className="topRight">
  
   <i onClick={() =>{
     this.props.deleteTicket(id);
     }} class="fas fa-trash"></i>
   </div>
  </div>
  <div className="ticketDescriptionDiv">
    <h2>Description:</h2>
    <i className="far fa-edit edit" onClick={() =>{this.setState({editTest: !this.state.editTest})}}></i>
    
   <p> {description}</p>
   {this.state.editTest ? <form className="updateForm">
     
     <textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea>
     <select name="status" value={this.state.status} onChange={this.handleChange}>
       <option className="critical" value="Critical">Critical</option>
       <option className="semi" value="Semi-Critical">Semi-Critical</option>
       <option className="task" value="Task">Task</option>
       <option className="closed" value="Closed">Closed</option>
    </select>
    <button onClick={()=>{
      this.props.editTicket(id, this.state.description, this.state.status)}}></button>
   </form>: null}
   
   </div>
 </article>
 
  )}
}

export default DisplayTicket;