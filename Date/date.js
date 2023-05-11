let currentDate=new Date();

let day= currentDate.getDate();
let month=currentDate.getMonth() +1;
let year=currentDate.getFullYear();

//displaying dates using the format of day/momnth/year

let orderedDate=day + "/" + month + "/" + year;

console.log(orderedDate);