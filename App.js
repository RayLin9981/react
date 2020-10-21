let getData = ()=> {

  return new Promise((resolve,reject)=> {

    //模擬要花時間取得資料

    setTimeout(

      //()=>reject('Error')

      ()=>resolve([{name:'Ben', age:30},{name:'Mary', age:20}])

      , 3000);

  });

}



const getRemoteData = async()=> {

  result = await getData();

  console.log(result);

}



console.log("start");

result = getRemoteData();

console.log(result);

console.log("end");