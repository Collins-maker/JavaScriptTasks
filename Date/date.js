let currentDate=new Date();

let day= currentDate.getDate();
let month=currentDate.getMonth() +1;
let year=currentDate.getFullYear();

let orderedDate=day + "/" + month + "/" + year;

console.log(orderedDate);