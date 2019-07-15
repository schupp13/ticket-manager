import React, {Component} from 'react';
import Status from '../Status/Status'
import Notifications from '../Notifications/Notifications'
import './Dashboard.css'

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      Dashboard : [],

    }
  }

  goToTickets = (e)=>{
    // e.stopPropagation();
    console.log("hello")
    let {changeView} = this.props
    changeView("tickets");
  }

  render(){
    return(
      <section className="dashboardDiv">
        <h1 className="pageHeader">Dashboard</h1>
        <div onClick={this.goToTickets}>
        <Status />
        </div>
        <Notifications />
      </section>
    )
  }
}

export default Dashboard;