console.log("naresh");
// this is single line comment 
console.log("Nicks");
/* this is the multiple line coment */

// learning about Operators in js

/* Airthmetic operators */

let x=15;
let y=10;
console.log("x=",x);
console.log("y=",y);
console.log("x+y= ", x+y);
console.log("x-y =",x-y);
console.log("x*y = ",x*y);
console.log("x/y=", x/y);
console.log("x%y=", x%y);
x++;
console.log("x-incre",x);
y--;
console.log("y-dec",y);

// Assignment Operator
x+=4;
y-=4;
console.log("x=",x);
console.log("y=",y);

// comparison operators

 let p=5;
 let q=2;
 console.log("5==2",p==q);
 console.log("5!=2",p!=q);

 let m="5";  // string value
 console.log("p===m",p===m); 
 console.log("5>2",p>q);
 console.log("5<2",p<q);
 console.log("5>=2",p>=q);
 console.log("5<=2",p<=q);

 //logical operators.

 let c=5;
 let d=4;
 let cond1= c>d;
 let cond2= c<d;
 let cond3=c>=d;
 console.log("cond1 && cond2", cond1 && cond2);   // logical and (&&);
 console.log("cond1 && cond3", cond1 && cond3);
 console.log("cond1 || cond2", c>d || c<d);     // logical or(||);
 console.log("!(c===d)",!(c===d));    // logical not (!);


 //
 let marks=45;
 let result= marks>=32 ? "pass": "fail";
 console.log(result);
