let radii=[1,2,3,4,5];


function cal(logic)
{
    let res=[];
    for(let i=0;i<radii.length;i++)
    {
        res.push(logic(radii[i]));
    }
    console.log(res)
}

function vol(r)
{
    return 4/3*(Math.PI*r*r*r);
}


function Area(r)
{
    return Math.PI*r*r;
}

function perimeter(r)
{
    return 2*Math.PI*r;
}
cal(Area);
cal(perimeter);
cal(vol)