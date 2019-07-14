import React, {Component} from 'react';
import Header from "./components/Header/Header";
import Customers from "./components/Customers/Customers";
import Tickets from "./components/Tickets/Tickets";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from './components/Customers/Form/Form';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      view: 'dashboard',
      customerId: 0
    }
  }

  changeView = (view) =>{ 
    console.log(view); 
    this.setState({
      view: view     
    })
  }

  toggleForm = id => {
    this.state.view === 'form' ? 
    this.setState({view: 'tickets', customerId: 0}) : 
    this.setState({view: 'form', customerId: id})
  }

  render(){
   let { view, customerId } = this.state
   console.log(view, customerId);
   
  return (
    <div className="App">
      <Header />
      <nav className="navBar">
        <button className="navButton dashboard" onClick={()=>{this.changeView("dashboard")}}
        >Dashboard</button>
        <button onClick={()=>{this.changeView("customers")}}
       className="navButton customers">Customers</button>
        <button onClick={() =>{
          this.changeView("tickets")}} 
        className="navButton tickets">Tickets</button>
      </nav>
        {view === "dashboard" ? <Dashboard />:
         view === "customers" ? <Customers toggleForm={this.toggleForm}/>:
         view === "tickets" ? <Tickets changeView={this.changeView}/>: 
         view === "form" ? <Form toggleForm={this.toggleForm} customerId={customerId}/> : null}
    </div>
  )
  }
}

export default App;
