//Falsy:
// false
// 0
// ""
// udenfined
// null
// NaN
//Truthy
//'0', ' ' [] 
let number = 12;
if(number  || number == 0 ){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}