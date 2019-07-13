const express = require("express");
const app = express();
const customerController = require("./controllers/customerCotroller");
const ticketController = require("./controllers/ticketController");

//allows me to use body
app.use(express.json());


app.get("/api",(req, res)=>{
  res.send("Hellow");
});

app.get("/api/customers", customerController.getCustomers)
app.get("/api/customers/:id", customerController.getCustomer);

app.get("/api/tickets", ticketController.getTicket);
app.post("/api/tickets", ticketController.createTicket);
app.delete("/api/tickets/:id" , ticketController.deleteTicket);
app.put("/api/tickets/:id" , ticketController.editTicket);


const PORT = 5050;
app.listen(PORT, ()=>{
  console.log(`listening on ${PORT}`);
})