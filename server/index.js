const express = require("express");
const app = express();
const customerController = require("./controllers/customerController");
const ticketController = require("./controllers/ticketController");
const notificationController = require("./controllers/notificationController");


//allows me to use body
app.use(express.json());

app.get("/api",(req, res)=>{
  res.send("Hellow");
});

// CUSTOMER CALLS
app.get("/api/customers", customerController.getCustomers)
app.get("/api/customers/:id", customerController.getCustomer);



// TICKET CALLS
app.get("/api/tickets", ticketController.getTicket);
app.post("/api/tickets", ticketController.createTicket);
app.delete("/api/tickets/:id" , ticketController.deleteTicket);
app.put("/api/tickets/:id" , ticketController.editTicket);
app.get("/api/tickets/:id" , ticketController.singleTicket);

// STATUS CALLS
app.get("/api/status", ticketController.getStatus);
app.get("/api/status/:status", ticketController.statusTickets)

// NOTIFICATION CALLS 
app.get("/api/notifications", notificationController.getNotifications);
app.post("/api/notifications", notificationController.createNotifications);
app.delete("/api/notifications/:id", notificationController.deleteNotification);



const PORT = 5050;
app.listen(PORT, ()=>{
  console.log(`listening on ${PORT}`);
})