import React, {Component} from 'react';
import Axios from 'axios';
import './Tickets.css';
import DisplayTicket from './DisplayTicket/DisplayTicket'


class Tickets extends Component{
  constructor(props){
    super(props);
    this.state = {
      tickets: [],

 //edit variables
 
    }
  }  
  
  componentDidMount(){
    Axios
    .get("/api/tickets").then( response =>{
      this.setState({
        tickets: response.data,
       }) 
  })
  }
  
 

  deleteTicket = (id) =>{
    Axios
    .delete(`api/tickets/${id}`).then( response =>{
      this.setState({
        tickets: response.data
      });
    });
  }

  editTicket = (id, description, status) =>{
    Axios
    .put(`api/tickets/${id}`,{description, status}).then( response =>{
      this.setState({
        tickets: response.data,
      });
    });

    this.props.changeView("tickets");
}
  
  render(){
    let viewTickets = this.state.tickets.map((ticket, index)=>{
        return <DisplayTicket 
        key={ticket.id}
        ticket={ticket}
        deleteTicket = {this.deleteTicket}
        editTicket ={this.editTicket}
        
        />
    })
    return(    
     <section className="ticketPageDiv">
       <h1 className="pageHeader">Ticket List</h1>
       <div className="ticketSection">
      {/* ticketBox >  */}
       {viewTickets}
       </div>
     </section>
      )
}
}

export default Tickets;