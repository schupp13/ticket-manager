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
  <div className="allTickets">{all}</div>
  
    <div className="criticalTickets smallDot">{critical}</div>
    <div className="semiTickets smallDot">{semi}</div>
    <div className="tasks smallDot">{task}</div>  
</div>
)
  }
}
export default Status;