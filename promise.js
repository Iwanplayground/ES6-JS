console.log("hai gaesss selamat dateng di restoran daun mint");

setTimeout(() => {
  console.log("terimakasih ya udah dateng, silahkan nanti datang kembali..🤗");
}, 6000);

console.log("apakah ada yang bisa dibantu pak/bu?");

console.log("----------------BATASSSS---------------------");

const getCake = (callback) => {
  let cake = null;
  console.log("Sedang membuat kue, silakan tunggu ....");

  setTimeout(() => {
    cake = "Kue Selesai!";
    callback(cake);
  }, 3000);
};

getCake((cake) => {
  console.log(cake);
});
