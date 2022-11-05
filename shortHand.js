fullName = "saputra dewakuda";
umur = 10;

getData = () => {
  return `member ${fullName} umurnya ${umur}`;
};

let member = {
  fullName,
  umur,
  getData, // jd intinya disini kita nd perlu lg ngelakuin reassign
};

console.log(member);
console.log("==========BATAS==============");

let usia = [20, 3347, 21];
let [x, c, v] = usia;

console.log(x + c + v);
