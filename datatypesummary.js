//Permitive(call by value)
//7types: string,number,boolen,null,undefined,symbol,BigInt(sign,big value)

const score=100;
const scorevalue=30.2;
var isLoggedvalue= false;
let outsideTemp=null;
let useremail;
const id= Symbol("123")
const bignumber= 1234567n


console.log(typeof isLoggedvalue)
//Reference(Non-Permitive)

//array,object,function
//const hero=[ali,ahmad]
{
    name:"tahreem";
    age:22;
}
const MyFunction=function(){
    console.log("hello world");}