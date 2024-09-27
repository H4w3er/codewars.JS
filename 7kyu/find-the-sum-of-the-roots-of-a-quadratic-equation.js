/*
Description:
Implement function which will return sum of roots of a quadratic equation rounded to 2 decimal places,
if there are any possible roots, else return None/null/nil/nothing.
If you use discriminant,when discriminant = 0, x1 = x2 = root => return sum of both roots.
There will always be valid arguments.*/

//SOLUTION

function roots(a,b,c){
    let x1, x2 = 0;
    let d = b*b-4*a*c;
    if (d===0) return (-b)/(a);
    else if (d<0) return null;
    else {
        x1=(-b-d)/(2*a)
        x2=(-b+d)/(2*a)
        return parseFloat((x1+x2).toFixed(2));
    }
}

console.log(roots(1,-35,-23))