

let str="The Sky Is Blue";
let res=str.split(" ").reverse().join(" ");



let res1=""
let ans=str.split(' ');
for(let i=0;i<ans.length;i++)
{
    res1+=ans[i].split("").reverse().join("")+" ";
    console.log(ans[i].split("").reverse().join(""))
}
console.log(res1)

