let id=setInterval(()=>{
    console.log("hello");
},1000);


setTimeout(()=>{
    clearInterval(id);
},10000);

console.log(id);

