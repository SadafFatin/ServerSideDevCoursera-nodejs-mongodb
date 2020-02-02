var rect = require('./rectangle');


function solveRect(l,b) {
     

    rect(l,b, (err,rectangle)=>{
          
          
        if(err){
            console.log("Error: ",err.message);
        }
        else{
          
            console.log( "The area of the rectangle is " + rectangle.area());
            console.log( "The perimeter of the rectangle is " + rectangle.perimeter())
        }
    });



}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);


/*

console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if (l <= 0 || b <= 0) {
        console.log("Rectangle dimensions should be greater than zero:  l = "
               + l + ",  and b = " + b);
    }
    else {
	    console.log("The area of the rectangle is " + rect.area(l,b));
	    console.log("The perimeter of the rectangle is " + rect.perimeter(l,b));
    }
    */