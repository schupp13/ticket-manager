import React, {Component} from 'react';
import Header from "./components/Header/Header";
import Customers from "./components/Customers/Customers";
import Tickets from "./components/Tickets/Tickets";
import Dashboard from "./components/Dashboard/Dashboard";
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      view: 'dashboard'
    }
  }

  render(){
   let {view} = this.state
  return (
    <div className="App">
      <Header />
      <nav className="navBar">
        <button className="navButton dashboard" onClick={() =>{
          this.setState({
            view: "dashboard"});
        }}>Dashboard</button>
        <button onClick={() =>{
          this.setState({
            view: "customers"});
        }} className="navButton customers">Customers</button>
        <button onClick={() =>{
          this.setState({
            view: "tickets"});
        }} className="navButton tickets">Tickets</button>
      </nav>
        {view === "dashboard" ? <Dashboard />:
         view === "customers" ? <Customers />:
         view === "tickets" ? <Tickets />: null};
        

    </div>
  );
  }
}

export default App;
