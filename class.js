class Bocah {
  constructor(name, umur) {
    this.name = name;
    this.umur = umur;
  }

  //--masalah static--
  static getPoin() {
    return `poin bocah ni dpet 60`;
  }
}
let bocah_baru = new Bocah("ujang", 10);
console.log(bocah_baru);
console.log(Bocah.getPoin());

console.log("----------------------BATAS----------------------------");

//_____INI BUAT MSLH BERIKUTNYA_____

class Mobil {
  constructor(mfr, warna, suspensi) {
    this.mfr = mfr;
    this.warna = warna;
    this.suspensi = suspensi;
    this.mesinIdup = false;
  }
}

let civicIwan = new Mobil("honda", "item", "matic");

console.log(`mobil iwan itu keluaran ${civicIwan.mfr} dengan warna ${civicIwan.warna}`);
