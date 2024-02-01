function outer()
{
    let num1=0;
    return {
        getcount:function()
        {
            console.log(num1);
        },
        increment:function()
        {
            num1++;
        },
        reset:function()
        {
            num1=0;
        },
        decrement:function()
        {
            num1--;
        }
    }
}
let ans1=outer();

ans1.decrement();  //-1

ans1.getcount();

ans1.increment();  //0
ans1.increment();  //1
ans1.increment();  //2

ans1.reset() ;    //0

ans1.getcount();

ans1.increment(); //1
ans1.increment(); //2

ans1.getcount();