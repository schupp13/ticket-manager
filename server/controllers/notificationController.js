const notifications =[{
  "id": 1,
  "notification": "maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat",
  "date": "6/22/2019"
}, {
  "id": 2,
  "notification": "luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas",
  "date": "6/10/2019"
}, {
  "id": 3,
  "notification": "quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc",
  "date": "6/9/2019"
}, {
  "id": 4,
  "notification": "lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi",
  "date": "6/30/2019"
}, {
  "id": 5,
  "notification": "in felis donec semper sapien a libero nam dui proin leo",
  "date": "6/7/2019"
}, {
  "id": 6,
  "notification": "morbi non quam nec dui luctus rutrum nulla tellus in",
  "date": "6/7/2019"
}, {
  "id": 7,
  "notification": "donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem",
  "date": "6/14/2019"
}, {
  "id": 8,
  "notification": "consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus",
  "date": "6/3/2019"
}, {
  "id": 9,
  "notification": "rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo",
  "date": "6/18/2019"
}, {
  "id": 10,
  "notification": "congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas",
  "date": "6/24/2019"
}, {
  "id": 11,
  "notification": "odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis",
  "date": "6/5/2019"
}, {
  "id": 12,
  "notification": "duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus",
  "date": "6/29/2019"
}, {
  "id": 13,
  "notification": "tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum",
  "date": "6/25/2019"
}, {
  "id": 14,
  "notification": "at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel",
  "date": "6/7/2019"
}, {
  "id": 15,
  "notification": "venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula",
  "date": "6/20/2019"
}, {
  "id": 16,
  "notification": "libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",
  "date": "6/3/2019"
}, {
  "id": 17,
  "notification": "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante",
  "date": "6/28/2019"
}, {
  "id": 18,
  "notification": "dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum",
  "date": "6/17/2019"
}, {
  "id": 19,
  "notification": "ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec",
  "date": "7/5/2019"
}, {
  "id": 20,
  "notification": "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum",
  "date": "6/11/2019"
}]


let id = notifications.length + 1

const getNotifications = (req, res) =>{
  res.status(200).json(notifications);
};


const createNotifications = (req, res) =>{
    let {date, notification} =req.body
    console.log(date, notification);
    notifications.push({id,date,notification});
    id++;
res.status(200).json(notifications);
}

const deleteNotification = (req, res) =>{
  console.log(req.params.id);
  let deleteItem = notifications.findIndex((e)=>{
    return e.id === Number(req.params.id)
  });
  notifications.splice(deleteItem, 1);
  res.status(200).json(notifications);
}



module.exports = {
  getNotifications,
  createNotifications,
  deleteNotification
};