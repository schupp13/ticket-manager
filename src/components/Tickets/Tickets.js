import React, {Component} from 'react';
import Axios from 'axios';


class Tickets extends Component{
  constructor(props){
    super(props);
    this.state = {
      tickets :[],

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

  render(){
    let {tickets} = this.state.tickets;
    return(
      
      <h1>{tickets}</h1>
    )

  }
}

export default Tickets;