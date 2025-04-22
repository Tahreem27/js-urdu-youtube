const user={
    username:"tahreem",
    price:44,
    welcomemessage:function(){console.log(`${this.username},welcome to website`)}
}
user.welcomemessage()
user.username("tajalli")
user.welcomemessage()

//const chai=function() {
   // let username="tahreem"
  //  console.log(this.username);

//}
//chai()
//const chai=()=> {
  //  let username="tahreem"
    //console.log(this.username);

//} 
//chai() resulst this undefined
const chai=()=> {
    let username="tahreem"
    console.log(this);

}

//chai()  resulst this {}
//const addtwo=(num1,num2)=>{
    return num1+num2
//}
//console.log(addtwo(3,4));

const addtwo=(num1,num2)=>(
    num1+num2)
