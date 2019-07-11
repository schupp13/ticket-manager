const express = require("express");
const app = express();
const customerController = require("./controllers/customerCotroller");

//allows me to use body
app.use(express.json());


app.get("/api",(req, res)=>{
  res.send("Hellow");
});

app.get("/api/customers", customerController.getCustomers)





const PORT = 5050;
app.listen(PORT, ()=>{
  console.log(`listening on ${PORT}`);
})