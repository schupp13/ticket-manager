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

  render(){
    return(
      <section className="dashboardDiv">
        <h1 className="pageHeader">Dashboard</h1>
        <Status />
        <Notifications />
      </section>
    )
  }
}

export default Dashboard;