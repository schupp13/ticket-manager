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
      console.log(response.data);
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
    let {changeView} = this.props
    Axios
    .put(`api/tickets/${id}`,{description, status}).then( response =>{
      this.setState({
        tickets: response.data,
      });
    });

    changeView('hello');
}
  
  render(){
   console.log(this.state.tickets)
    let viewTickets = this.state.tickets.map((ticket, index)=>{
        return <DisplayTicket 
        ticket={ticket}
        deleteTicket = {this.deleteTicket}
        editTicket ={this.editTicket}
        
        />
    })
    return(    
     <section className="ticketPageDiv">
       <h1 className="customerHeader">Ticket List</h1>
       <div className="ticketSection">
      {/* ticketBox >  */}
       {viewTickets}
       </div>
     </section>
      )
}
}

export default Tickets;