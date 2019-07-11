import React, {Component} from 'react';


class Tickets extends Component{
  constructor(props){
    super(props);
    this.state = {
      tickets :[],

    }
  }

  render(){
    return(
      <h1>Tickets</h1>
    )

  }
}

export default Tickets;