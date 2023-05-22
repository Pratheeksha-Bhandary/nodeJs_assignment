const promise = new Promise((resolve,rejcect)=>{
    const message="Welcome to My website";
    resolve(message);
    
});

promise.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});