const tickets =[
  { 
    "id": 1,
    "description":"This guy is such a jerk... wtf. He says he wants his shippment of socks replaced or his going to call the BB on us.",
    "time":"2019-07-12",
    "status":"Task",
    "customerId":1
  },
  { "id": 2,
  "description":"Brooks want needs his hardhats by mid july or he will cancel his order. Need to here from M3 on the status --- needs to ship by the 10th or ASAP",
  "time":"2019-07-12",
  "status":"Semi-Critical",
  "customerId":4
},
{ "id": 3,
"description":"Customer is not happy with the gloves that he purchased.",
"time":"2019-07-12",
"status":"Critical",
"customerId":3
},
];

let id = 4;

const createTicket = (req, res) =>{

let{description,time,status,customerId }= req.body;
console.log(status);
 tickets.push({id,customerId,description,time,status});
 id++;
 res.json(tickets);
}

const getTicket = (req, res) =>{
  console.log("helllow");
 res.status(200).json(tickets);
}

const deleteTicket = (req, res) =>{
  console.log(req.params.id);
  let deleteItem = tickets.findIndex((e)=>{
    return e.id === Number(req.params.id)
  });
  tickets.splice(deleteItem, 1);
  res.status(200).json(tickets);
}

const getStatus = (req, res) =>{
  let criticalCount = 0;
  let semiCount = 0;
  let taskCount = 0;
  let all = tickets.length;
  tickets.map(ticket =>{
  return ticket.status === "Critical" ? criticalCount++
  : ticket.status === "Semi-Critical" ? semiCount++
  : ticket.status === "Task" ? taskCount++: null
    }
  );
  res.status(200).json({all, criticalCount, semiCount, taskCount});
}


const editTicket = (req, res) =>{
  let {status, description} =req.body;

  let {id} = req.params;
  
  const selected = tickets.find(ticket => ticket.id == id );
  selected.description = description;
  selected.status = status;
res.status(200).json(tickets);
}


const statusTickets =(req, res)=>{
  console.log(req.params.status);
  let status = tickets.filter((ticket) =>{   
    return ticket.status == req.params.status
  })
  res.status(200).json(status);
}

const singleTicket=(req, res)=>{
  let single = tickets.filter(ticket=>{
  return Number(req.params.id) === ticket.id;
});
res.status(200).json(single)
}

module.exports ={
  createTicket,
  getTicket,
  deleteTicket,
  editTicket,
  getStatus,
  statusTickets,
  singleTicket
}
