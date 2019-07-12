const tickets =[
  {"description":"fasdfasdf",
    "time":"2019-07-16T16%3A05",
    "status":"Task",
    "customerId":1
  },
];

const createTicket = (req, res) =>{
  let{description, time,status, customerId }= req.body;
 tickets.push({description, time,status, customerId});
 res.json(tickets);
}

const getTicket = (req, res) =>{
  console.log("helllow");
 res.send(200).json(tickets);
}

module.exports ={
  createTicket,
  getTicket
}
