// 6번 문제

const arr = [{ part: "fe", name: "홍현", age: 26},
  { part: "fe", name: "애리", age: 24},
  { part: "fe", name: "나연", age: 23},
  { part: "staff", name: "나현", age: 24}];

  let filetered=arr.filter((arr)=>arr.part ==="fe");
  let v=filetered.sort((a,b)=>{b.age-a.age;});
  let b= v.map(arr=>({ ...arr, part:arr.part.toUpperCase()}));
  console.log(b);


  