let a=300
if (true) {
    const b=55
    let a= 33
//console.log("INNER:",a)   
}
//console.log(a)
//nested scope
//function one() {
  //  const name="tahreem"
  //  function two(){
     //   const website="youtube";
    //    console.log("name")
   // }
   // console.log("website");
   // two()
//}
//one()

if (true) {
    const username="tahreem"
    if (username==="tahreem") {
        const website="youtube"
        console.log(username+website);
        
    }
}
function addone(num1) {
    return(num1+1)
}
addone(5)
const addtwo=function(num1) {
    return(num1+1)
}
addone(5)
