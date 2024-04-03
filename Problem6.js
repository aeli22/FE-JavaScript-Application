// 6번 문제

const arr = [{ part: "fe", name: "홍현", age: 26},
  { part: "fe", name: "애리", age: 24},
  { part: "fe", name: "나연", age: 23},
  { part: "staff", name: "나현", age: 24}];

  let filetered=arr.filter((part)=>part==="fe");
  let v=filetered.sort(function(a,b){return a-b;});
  let b= arr.map((a)=>{a.part.toUpperCase()});


  