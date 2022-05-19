// name function

// function sum(){
//     let a = 2 ;
//     let b = 4;
//     return a+b;
// }
// console.log(sum());


//anonymous function  

let test = function(){
    let a = "sam";
    return a;
}
console.log(test())


// arrow fuction 
let test2 = (a,b) => {
    return a+b;
}
console.log(test2(2,5));

// IFFE FUCTION

(
    (a,b)=>{
        console.log(+b);
    }
)(2,7);