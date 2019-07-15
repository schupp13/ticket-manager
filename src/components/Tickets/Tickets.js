import React, {Component} from 'react';
import Axios from 'axios';
import './Tickets.css';
import DisplayTicket from './DisplayTicket/DisplayTicket';
import Status from '../Status/Status'


class Tickets extends Component{
  constructor(props){
    super(props);
    this.state = {
      tickets: [],
      errror: "",

 //edit variables
      idSearch: ""
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

  // filterList=(tickets)=>{
  //   this.setState({
  //     tickets
  //   });
  // }


  filterAll =()=>{
    Axios.get("/api/tickets").then( response =>{
      this.setState({
        tickets: response.data,
       }) 
  })
  }

  filterStatus= (status) =>{
    Axios.get(`/api/status/${status}`).then( response =>{
     
        this.setState({tickets: response.data})  
  })
  }

  pickTicket = (ticketId) =>{
    console.log("hitting");
    Axios.get(`/api/tickets/${ticketId}`).then(response =>{

      this.setState({tickets: response.data})
      this.props.changeView("tickets")
    }
    )
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
    let d = new Date();
        let date2 = d.toLocaleDateString();
    // posting to notifications also
    Axios.post('/api/notifications', { notification: description + " " + status,date: date2}).then((response) =>{
      this.props.changeView("notifications");
      
    }).catch(error=>{
      console.log(error);
      this.setState({error: "an error has occured, please try again later"});
    })

    
}

handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value});

  Axios.get(`/api/tickets/${event.target.value}`).then(response =>{
    this.setState({tickets: response.data});
  }).catch(error=>{
    console.log(error);
    this.setState({error: "an error has occured, please try again later"});
  })
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
       <div className="TicketListHeader">
       
       <div>
       <Status />
       </div>
       </div>
       
       <div className="filterListDiv"> 
           <div className="filterSearch">   
              <form>
              <input name="idSearch" placeholder="Ticket ID" onChange={this.handleChange}></input>
             
              </form>
            </div>
            <div className="filterOptions">
              <button name="allFilter" className="allButton ticketButton" onClick={this.filterAll}></button>
              <button name="criticalFilter" className="criticalButton ticketButton" onClick={()=>{this.filterStatus("Critical")}}></button>
              <button name="semiFilter" className="semiButton ticketButton" onClick={()=>{this.filterStatus("Semi-Critical")}}> </button>
              <button name="taskFilter" className="taskButton ticketButton"onClick={()=>{this.filterStatus("Task")}}></button>
           </div>    
         </div>
       
       
       <div className="ticketSection">
      {/* ticketBox >  */}
       {viewTickets}
       {this.state.error ? <p>{this.state.error}</p> : null}
       </div>
     </section>
      )
}
}

export default Tickets;