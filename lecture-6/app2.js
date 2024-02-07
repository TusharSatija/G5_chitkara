let a=true;

let num=0;

setTimeout(()=>{
    a=flase;
},0);

while(a)
{
    num++;
    console.log(num);
}