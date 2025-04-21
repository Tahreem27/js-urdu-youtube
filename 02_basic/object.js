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
Js.greeting=function(){
    console.log('Heloo js user,$(this is .name)' );

}
console.log(Js.greeting);
// Singleton///
google.id="123abc";
google.name="sammay"
google.isLoggedIn="flase"
//console.log(google);
const regularuser={
    email:"tahreemtajally@gmail.com",
   userfullname:{fullname:{
userfullname:{
    fristname:"tahreem",
    lastname:"tajalli"
}}
    }
}
console.log(regularuser.userfullname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a", 6:"b"}
//const obj4= object.assign({},obj1,obj2,obj3)
//const obj4= {...obj1,...obj2}
//console.log(obj4);
const user=[
    {
        id:1,
        email:"tahreemtajalli@gmail.com"
    },
    {
        id:1,
        email:"tahreemtajalli@gmail.com"
    },
    {
        id:1,
        email:"tahreemtajalli@gmail.com"
    }
]
user [1].email
console.log(google);
//console.log(object.keys(google));
//console.log(object.value(google));
//console.log(object.entires(google));
//console.log(google.hasownprperty('isLoggedIn'));
//Data structing//
const course = {
    email:"tahreemtajalii@gmail.com",
    name:tahreem,
    courseInstructor:tajalli
}
const{courseInstructor}=course
console.log(courseInstructor);