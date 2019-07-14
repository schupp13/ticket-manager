import React, {Component} from 'react';
import Axios from 'axios';
import './Customers.css';
// import Form from './Form/Form';
import DisplayCustomer from './DisplayCustomer/DisplayCustomer';


class Customers extends Component{
  constructor(props){
    super(props);
    this.state = {
      customers :[],
      viewForm: false,
      error: ''
    }
  }

  componentDidMount(){
    Axios.get("/api/customers").then( response =>{
      this.setState({
        customers: response.data,
       }) 
  })

};

  // form = (customerID) =>{
  //   Axios.get(`/api/customers/${customerID}`).then(response => {
      
  //   });
  //   if (this.state.viewForm === true) {
      
  //   }
  //   console.log(customerID + "clicked");
  // }

  render(){
     
    let {customers} = this.state;
    return(  
      <section className="customerApp">
      <h1 className="pageHeader">Customer List</h1>
      <div className="customerWrapper">
        {customers.map( customer =>{
          return <DisplayCustomer 
          id={customer.id}
          first_name ={ customer.first_name}
          last_name ={ customer.last_name}
          email = {customer.email}
          phone = {customer.phone}
          key = {customer.id}
          toggleForm={this.props.toggleForm}
          />
        })}
      
      </div>
      <p>{this.state.error}</p>
      </section>
    )

  }
}
export default Customers;