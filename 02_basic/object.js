//Object(literial)
const mysym= symbol("key1")
const myobject={
    name:"tahreem",
    age:18,
    email:"tahreemtajalli@gmail.com",
    isLoggedIn:false,
    [mysym]:"mykey1",
    "fullname":"tajalli",// that why we use (array []porperty)
}
console.log(myobject.email)
console.log(myobject["email"])
console.log(myobject["fullname"])
console.log(myobject["mysym"])
myobject.email="tahreemrana@gmail.com"
object.freeze(myobject)
myobject.email="tahreem@gmail.com"
console.log(myobject)
//function
Js.greeting=function(){
console.log("hello")}
console.log(Jsuser.greeting)