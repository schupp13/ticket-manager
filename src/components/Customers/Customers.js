import React, {Component} from 'react';
import Axios from 'axios';
import './Customers.css';


class Customers extends Component{
  constructor(props){
    super(props);
    this.state = {
      customers :[],
      
    }
  }

  componentDidMount(){
    Axios.get("/api/customers").then( response =>{
      console.log(response.data);
      this.setState({
        customers: response.data,
      }); 
      console.log(this.state.customers);
  })};

  render(){
    let customersName = this.state.customers.map((e, i) =>{
      return (<article className="customerBlock">
      <div className="plusDiv">
      <i className="far fa-plus-square customerPlus"></i>
      </div>
      <h4 className="customerId">{e.id}</h4>
      <h4 className="customerName">{e.first_name} {e.last_name}</h4>
      <p className="customerEmail">{e.email}</p>
      <p className="customerPhone">{e.phone}</p>
      <p className="customerAddress">{e.address}</p>
      </article>)
    }); 
    
    return(
      
      <section className="customerApp">
      <h1 className="customerHeader">List of Customers</h1>
      <div className="customerWrapper">
      {customersName}
      </div>
      
      </section>
    )

  }
}
export default Customers;