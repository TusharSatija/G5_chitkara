

function delay(n)
{
    let x=new Date().getTime();
    while(x+n*1000>new Date().getTime())
    {

    }
}

delay(4);

console.log('hello world')