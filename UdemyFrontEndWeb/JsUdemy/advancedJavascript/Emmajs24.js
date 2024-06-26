// Advanced Arrays
// We are doing the map method
// Normally to create an array and print it with using forEach we do
// const array = [2, 4, 6, 8];
// array.forEach((num) =>{
//     console.log(num);
// })
// But now we use mostly map, filter , reduce to work on arrays in real life
// so now we want to use forEach first to multiply all the elements in the array by 2 then use map to make it easier

const array = [1, 2, 4, 6, 10];
const double = [];
const newArray = array.forEach((num)=> {
    double.push(num * 2);
})
console.log('forEach', double);
const mapArray  = array.map((num/*NB:You can remove this brackets only if it is one parameter*/)=>{
    return num * 2;
})
console.log('map', mapArray);

// We can also use all these on strings
const mapArray2 =  array.filter(num => num * 3);

//with forEach you need .push or .pop and a new array to put all those values but with map it instantly does all that for you 
// as long as you use the return statement or else you get undefined in all your values