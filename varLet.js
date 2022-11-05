// var itu func scope, ktika dia deklarasikan dia bisa dimana aja
// klo let n const dia block scope(idupnya dia diblok2 tertentu)

let nama = "iwan";
{
  let nama = "akmal";

  console.log(nama);
}

function getName() {
  if (true) {
    var name = "ridwan";
    console.log(name);
  } else {
    console.log("tidak punya nama");
  }
}

getName();

// function getRuang() {
//   if (false) {
//     let ruang = "cm 902";
//     console.log(ruang);
//   } else {
//     console.log(ruang);
//   }
// }
// getRuang();

// nah karena itu dia pkenya let brati cuma bisa discope itu aja, jadi nnti saat kodenya msuk ke block else akan lgsg error

//________________nah kalo const keliatan kita ndabisa nimpa variabel yg awal tdi(not reassign before) _______________________

const orang = {
  id: 120,
  nama: "iwan",
};

orang = {
  id: 121,
  nama: "iwan",
};

console.log(orang);
//metodenya gimana? kita bisa tep ubah dia bukan immutable
