//<script src="jquery-3.2.1.min.js"></script>



    //Function Expression(FE)
/*
    var f1=function (){

        console.log("hello from the other side, I must have called a thousand times, to tell you I'm sorry ");
    }


   f1();
 ---------------------------------------------------------------

var f1=function (){

    return "hello";
}

//console.log(f1());
------------------------------------------
---------------FUCNTION CALLBACK-----------------------



function Display(){
    console.log("hello from display \n ")
}

function Wishes(){
    console.log("hello from wishes \n ")
}

var f1=function(cb){
    cb();
}

f1(Wishes);
f1(Display);
------------------------------------------------------------


function square(x){
return (x*x);

}

function cube(x){
    return (x*x*x);
    
    }

var cal=function(x,cb){
    return cb(x);
}


//console.log(cal(5,square));

//console.log(cal(8,cube));

add= function(a,b){

    return(a+b);
}

max= function(a,b){
    return (a>b)?a:b;
}
cal= function(a,b,cb){
    return cb(a,b);
}

console.log(cal (10,5,add));
console.log(cal (10,5,max));
-------------------------------------------------------------------
*/
/*
var e1={id:1,ename:"puru",job:"associate consultant",salary:10000};
//var e2=new Object();

console.log(e1);
console.log(e2);

console.log(e1.id+" "+e1.name+" "+ e1.job+" "+e1.salary);
*/

/*
var employees=[{id:1,ename:"puru",job:"associate consultant",salary:10000},
        {id:2,ename:"umer",job:"associate",salary:10000},
        {id:3,ename:"manas",job:" consultant",salary:10000},
        {id:4,ename:"muru",job:"boss",salary:10000},
        {id:5,ename:"chesna",job:"chassu",salary:10000}];

for(var i=0;i<employees.length;i++){

    var e1=employees[i];
    console.log(e1.id+" "+e1.ename+" "+ e1.job+" "+e1.salary);
}


-----------------------------------------
//var e2=new Object();
/*
console.log(e1);
console.log(e2);

console.log(e1.id+" "+e1.ename+" "+ e1.job+" "+e1.salary);

-----------------------------------------------------------------------------
*/



/*
items=[10,20,30,40,50];
items.forEach(function(element){
    console.log(element);
});


------------------------------------------------------------------------
*/




/*
var msg="";
items=["puru","umer","manas","chassu","muru"];
items.forEach(function(element){
    msg+=" "
    console.log(element);
});
-----------------------------------------------------------------------
*/

/*

var e1={id:1,ename:"puru",job:"associate consultant",salary:10000};
console.log(e1["id"].toString()+" "+ e1.ename );

*/



/*
let square=x=>x*x;
console.log(square(5));


let cube=x=>x*x*x;
console.log(cube(7));

let sum=(x,y) => x+y;
console.log(sum(7,3));

let big=(x,y)=>(x>y)?x:y;
console.log(big(7,9));

let result =(x,y,z)=>(x>35 && y>35 && z>35)?"pass":"fail";
console.log(result(45,45,67));

let display=x=> console.log("HELLO "+ x);
display("puru");
display("umer");

*/

/*
var e= function emp(id,name,job,salary)
{
    this.id=id;
    this.ename=name;
    this.job=job;
    this.salary=salary;
}

var e1=new e(1,"puru",10000)
var getname=e1=>e1.ename;
console.log(getname(e1));
----------------------------------------------------------

--------------- IIFE(immediate invoked function expression)-----
*/
// similar to constructors,used to provide initialization

(function (){
    console.log("hello from IIFE");
}
)();

// PROMISE
/*
 - it is a method that eventually produces a value.it can be considered
  asynchronous 

  ---------------------------------------------------------------
*/

/*----------setInterval-------------------------------------
function ShowTime(){
    var d=new Date();
    var t= d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    console.log(t);
}
setInterval(ShowTime,500);
-----------------------------------------------------------------

--------------------------WEB WORKER--------------------------------
- like threads in java

*/

var c=1;

function timeCount(){

    postMessage(c);
    c++;
    setTimeout("timeCount()",500);

}

timeCount();




















































































