// Dates

let d= new Date()
// console.log(d.toString()); //Tue Feb 18 2025 05:12:14 GMT+0000 (Coordinated Universal Time)
// console.log(d.toDateString()); //Tue Feb 18 2025
// console.log(d.toISOString()); // 2025-02-18T05:12:14.741Z
// console.log(d.toLocaleString()); //2/18/2025, 5:12:14 AM
// console.log(d.toJSON());  //2025-02-18T05:12:14.741Z
// console.log(d.toLocaleDateString());  //2/18/2025


console.log(typeof d);

// let myCreatedDate = new Date(2023, 11 , 23)
// let myCreatedDate = new Date(2023, 11 , 23 , 5 , 3)
let myCreatedDate = new Date("01-14-2023")



// console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getHours());

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "timeZone"
})








