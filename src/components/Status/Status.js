import React, {Component}from 'react';
import Axios from 'axios';
import './Status.css'


class Status extends Component{
  constructor(){
    super();
    this.state ={
      all: '',
      critical: '',
      semi: '',
      task: '', 
    }
  }

  componentDidMount(){
    Axios.get('api/status').then( response =>{
      let {all, criticalCount, semiCount, taskCount} = response.data;
      this.setState({
        all: all,
        critical: criticalCount,
        semi: semiCount,
        task: taskCount

      })
    })
  }

 

  render(){
    let {all, critical, semi, task}  = this.state
return(
<div className="statusDiv">
  <div className="statusTicketDiv">
    <p>All Tickets</p>
  <div className="allTickets">{all}</div>
  </div>
  <div className="statusTicketDiv" >
  <p>Critical</p>
    <div className="criticalTickets smallDot">{critical}</div>
  </div>
  <div className="statusTicketDiv">
  <p>Semi</p>
    <div className="semiTickets smallDot">{semi}</div>
  </div>
  <div className="statusTicketDiv">
  <p>Task</p>
    <div className="tasks smallDot">{task}</div>  
    </div>
</div>
)
  }
}
export default Status;