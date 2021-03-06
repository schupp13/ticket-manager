const customers = [{
  "id": 1,
  "first_name": "Raymond",
  "last_name": "Holtum",
  "email": "rholtum0@google.com.br",
  "tickets": [],
  "phone": "9406380492",
}, {
  "id": 2,
  "first_name": "Brooks",
  "last_name": "Ion",
  "email": "bion1@dedecms.com",
  "tickets": [],
  "phone": "2092431348",
}, {
  "id": 3,
  "first_name": "Garrott",
  "last_name": "Tapenden",
  "email": "gtapenden2@dailymail.co.uk",
  "tickets": [],
  "phone": "3149804966",
}, {
  "id": 4,
  "first_name": "Averil",
  "last_name": "Berryann",
  "email": "aberryann3@cisco.com",
  "tickets": [],
  "phone": "2712810014",
}, {
  "id": 5,
  "first_name": "Lorie",
  "last_name": "Stiling",
  "email": "lstiling4@example.com",
  "tickets": [],
  "phone": "3337490835",
}, {
  "id": 6,
  "first_name": "Carny",
  "last_name": "MacFayden",
  "email": "cmacfayden5@last.fm",
  "tickets": [],
  "phone": "2875473107",
}, {
  "id": 7,
  "first_name": "Addie",
  "last_name": "Drinkhill",
  "email": "adrinkhill6@cpanel.net",
  "tickets": [],
  "phone": "4917361125",
}, {
  "id": 8,
  "first_name": "Tonye",
  "last_name": "Halwill",
  "email": "thalwill7@about.me",
  "tickets": [],
  "phone": "5919811353",
}, {
  "id": 9,
  "first_name": "Beatriz",
  "last_name": "MacDonell",
  "email": "bmacdonell8@blogspot.com",
  "tickets": [],
  "phone": "1779513706",
}, {
  "id": 10,
  "first_name": "Zed",
  "last_name": "Leeman",
  "email": "zleeman9@1und1.de",
  "tickets": [],
  "phone": "5466518653",
}, {
  "id": 11,
  "first_name": "Jules",
  "last_name": "Hew",
  "email": "jhewa@com.com",
  "tickets": [],
  "phone": "5454907588",
}, {
  "id": 12,
  "first_name": "Sid",
  "last_name": "Cranstone",
  "email": "scranstoneb@state.tx.us",
  "tickets": [],
  "phone": "3582051346",
}, {
  "id": 13,
  "first_name": "Giuseppe",
  "last_name": "Sandiford",
  "email": "gsandifordc@state.tx.us",
  "tickets": [],
  "phone": "5793462160",
}, {
  "id": 14,
  "first_name": "Lisbeth",
  "last_name": "Wickerson",
  "email": "lwickersond@over-blog.com",
  "tickets": [],
  "phone": "4177125148",
}, {
  "id": 15,
  "first_name": "Barth",
  "last_name": "Ballentime",
  "email": "bballentimee@cmu.edu",
  "tickets": [],
  "phone": "4653075100",
}, {
  "id": 16,
  "first_name": "Katrine",
  "last_name": "Roe",
  "email": "kroef@is.gd",
  "tickets": [],
  "phone": "7894320270",
}, {
  "id": 17,
  "first_name": "Binni",
  "last_name": "Turmell",
  "email": "bturmellg@psu.edu",
  "tickets": [],
  "phone": "7767544792",
}, {
  "id": 18,
  "first_name": "Linus",
  "last_name": "Engledow",
  "email": "lengledowh@chicagotribune.com",
  "tickets": [],
  "phone": "2986987917",
}, {
  "id": 19,
  "first_name": "Clive",
  "last_name": "Spillane",
  "email": "cspillanei@vistaprint.com",
  "tickets": [],
  "phone": "2019169023",
}, {
  "id": 20,
  "first_name": "Vernon",
  "last_name": "Despenser",
  "email": "vdespenserj@xrea.com",
  "tickets": [],
  "phone": "5003333090",
}, {
  "id": 21,
  "first_name": "Ced",
  "last_name": "Plaschke",
  "email": "cplaschkek@engadget.com",
  "tickets": [],
  "phone": "9664767228",
}, {
  "id": 22,
  "first_name": "Erek",
  "last_name": "Cremins",
  "email": "ecreminsl@free.fr",
  "tickets": [],
  "phone": "4299897360",
}, {
  "id": 23,
  "first_name": "Fey",
  "last_name": "McGeachey",
  "email": "fmcgeacheym@hao123.com",
  "tickets": [],
  "phone": "9997166899",
}, {
  "id": 24,
  "first_name": "Bonita",
  "last_name": "Claige",
  "email": "bclaigen@guardian.co.uk",
  "tickets": [],
  "phone": "6874447107",
}, {
  "id": 25,
  "first_name": "Jaime",
  "last_name": "Gallymore",
  "email": "jgallymoreo@reverbnation.com",
  "tickets": [],
  "phone": "1495646079",
}];

const getCustomers = (req, res) =>{
  if(req.query.id){
    let filter = customers.filter(customer =>{
        return Number(req.query.id) === Number(customer.id)
    })
    res.status(200).json(filter)
  }else{
  res.status(200).json(customers);
  }
};

//THIS ONE IS SINGULAR
const getCustomer = (req, res) =>{
  let customer = customers.find(element => {
    if(element.id === Number(req.params.id)){
      return element
    };
  });
  res.status(200).json(customer);
  
}

const singleCustomer=(req, res)=>{
  let single = customers.filter(customer=>{
  return Number(req.params.id) === customer.id;
});
res.status(200).json(single)
}



module.exports = {
  customers,
  getCustomers,
  getCustomer,
  singleCustomer
};


