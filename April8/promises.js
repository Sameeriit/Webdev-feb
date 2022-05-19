// promises 
// promises has three statement 
//1. resolve
//2. reject
//3. pending


function sam(a,b){
    let c = a+b;

    return new Promise((resolve,reject)=>{
        if(c < 5){
            reject(c);

        }else{
            resolve(c);
        }

    })
}

let result = sam(2,1)
result.then((ele)=>{
    console.log("this is resolve part",ele);

})
.catch((err)=>{
    console.log("this is rejected part",err);
})


//async and await 

async function promisehandler(){
    try{
        let result = await sam(3,1);
        console.log("this is result",result);

    }catch(error){
        console.log("this is error",error);


    }
}
promisehandler();