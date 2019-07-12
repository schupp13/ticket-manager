import React from 'react';
// STYLES FOR THIS COMPONENT ARE LOCATED IN CUSTOMERS.CSS

 const DisplayCustomer = (props) =>{
   let{id, first_name, last_name, email,phone, form} = props;
   return(
  <article className="customerBlock">
  <div className="plusIdDiv">
    {}
    <i onClick={() => props.toggleForm(id)} className="far fa-plus-square customerPlus"></i>
    <h4 className="customerId">{id}</h4>
  </div>
  <h4 className="customerName">Name: {first_name} {last_name}</h4>
  <h3>Contact Info</h3>
  <p className="customerEmail">{email}</p>
  <p className="customerPhone">{phone}</p>
  </article>)
 }
 export default DisplayCustomer;