//const myarry=[1,2,3,4,"tahreem"]
//console.log(myarry[0])

//const Myarry = newarry(1,2,3,4);
//console.log(Myarry[1])
//////method//////
//Myarry. push(6)
//Myarry.pop(7)
//console.log(Myarry);
//Myarry.unshift(9)
//Myarry .shift()
//console.log(Myarry);
//console.log(myarry.includes(9));
//console.log(myarry.indexOf(9));
  //const newarry = Myarry.join;
 // console.log(Myarry);
  //console.log(typeof newarry);

  //splice/slice
 // console.log("A",myArr);
  
  c//onst myn1 =myArr.slice(1,3)

   // console.log(myn1);
  //console.log("B",myArr);
  
  
  //const myn2 =myArr.splice(1,3)
  //console.log(myn2);
 // console.log("c",myArr);


  const marvel_heros=["thor", "Ironman", "spiderman"]
  const hero_dc=["superman","flash","badman"]
  //console.log.push(hero_dc)
  //console.log.pop(marvel_heros)
  //console.log(marvel_heros [3][1])
 //spread operate
  const all_heros=marvel_heros.concat(dc_heros)
  //onsole.log(all_heros);
  const all_new_heros=[...marvel_heros,...dc_heros]
  //console.log(all_new_heros)
  const another_array=[1,2,3[4,5,6[7,8]]]
  const real_another_array= another_array.flat(Infinity)
  console.log(real_another_array)
  //form
  console.log(Array.isArray("tahreem"))//boolen
  console.log(Array.from("tahreem"))//array
  console.log(Array.from({name:"tahreem"}))//interesting case output:[](empty array we can inform to keyarray and value than output is not empty)
  
  let score1=100
  let score2=200
  let score3=300
  console.log(Arrayof(score1,score2,score3));