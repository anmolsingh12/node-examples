var rect = {
    perimeter : (x,y) => (2*(x+y)),
    area : (x,y) => (x*y)
};

function solveRect(l,b)
{
    console.log("l = "+l+", b = "+b);

    if( l <= 0 || b <= 0)
    {
        console.log("l and b must have positive and non-zero dimension");
    }

    else
    {
        console.log("Area = "+rect.area(l,b));
        console.log("Perimeter = "+rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
solveRect(5,5);