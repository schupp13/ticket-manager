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
      error: '',
      findCustomer: ""


    }
  }

  componentDidMount(){
    Axios.get("/api/customers").then( response =>{
      this.setState({
        customers: response.data,
       }) 
  })
};

handleChange = (event) => {
console.log("helloooooooooooo")
  Axios.get(`/api/customers?id=${event.target.value}`).then(response =>{
    this.setState({customers: response.data});
  })
}
  render(){

    let {customers} = this.state;
    console.log(customers);
    return(  
      <section className="customerApp">
      <h1 className="pageHeader">Customer List</h1>
      <form>
      <input name="findCustomer" placeholder="Customer#" onChange={this.handleChange} className="customerSearch"></input>
      </form>
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