//Permitive(call by value)
//7types: string,number,boolen,null,undefined,symbol,BigInt(sign,big value)

//const score=100;
//const scorevalue=30.2;
//var isLoggedvalue= false;
//let outsideTemp=null;
//let useremail;
//const id= Symbol("123")
//const bignumber= 1234567n


//odeconsole.log(typeof isLoggedvalue)
//Reference(Non-Permitive)

//array,object,function
//const hero=[ali,ahmad]
//{
   // name:"tahreem";
    //age:22;
//}
//const MyFunction=function(){
  //  console.log("hello world");}
    //+++++++++++++++++++++++++++++++++++++++++++++
    //stack(permitive),Heap(non-permitive)
    let myYoutubename="tahreemtajalli"
    let anotherName=myYoutubename
  anotherName="chaiaurcode"
    console.log(anotherName);
    console.log(myYoutubename);
    let userone={
        email:"tahreemtajlli@gmail.com"
    }
    let usertwo= userone
    usertwo.email="tahreem rana"
    //console.log(userone.email)
    //console.log(usertwo.email)
    //string datatype
    const fristname="tahreem"
    const repoCount=52
    console.log(`MY NAME IS ${fristname} and repoCount is ${repoCount}`);

    let gameName= new String("tahreem")
    console.log(gameName[0]);
    console.log(gameName.__proto__);
    console.log(gameName.length);
    console.log(gameName.toUpperCase());
    console.log(gameName.charAt(2));
    console.log(gameName .indexof ("t"));
     const newString = gameName.substring(0,4);
     console.log(newString);
      const anotherString= gameName.slice(-8,4)
      console.log(anotherString);
     const newname= " tajalli "
     console.log(newname.trim());
       
     const url="  https://tajalli.com//tajalli%20tahreem "
     console.log(url.replace('%20','-'));
     const newWord ="ball"
     console.log(newWord.split('__'));