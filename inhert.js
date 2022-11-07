class Oto {
  constructor(sim, mfr, mesin) {
    this.sim = sim;
    this.mfr = mfr;
    this.mesin = mesin;
    this.mesinIdup = false;
  }
  mesinIdup() {
    console.log("bremmm......");
  }

  parkir() {
    console.log("pippipipipipipipip citttttt.....");
  }

  jalan() {
    console.log("mobil sedang melaju");
  }
}

const mobilBambang = new Oto("a", "daihatsu", "mesin mbuh");

console.log(mobilBambang.mesinIdup);
mobilBambang.jalan();

//__________MELAKUKAN PEWARISAN___________

console.log("----------------------BATAS----------------------------");

// INI FORMATNYA BROO -------> class childClass extends parentClass {}

class Orang {
  constructor(gender, umur, alamat) {
    this.gender = gender;
    this.umur = umur;
    this.alamat = alamat;
    this.tidur = false;
  }

  bangunTidur() {
    console.log("huaaammm mari kita rapikan kamar");
  }

  mandi() {
    console.log("mari kita siapkan air hangat dan sikat gigi");
  }

  idup() {
    console.log(`saye ni dah hidup ${this.umur} tahun`);
  }
}

//.....Nah skrg kita mau lakukan pewarisan ni

class Mahasiswa extends Orang {
  constructor(gender, umur, alamat, kampus) {
    super(gender, umur, alamat);
    this.kampus = kampus;
  }
  //.... Melakukan overriding dari method mandi di parent class
  mandi() {
    super.mandi();
  }
}

const abil = new Mahasiswa("laki-laki", 19, "jalan magetan raya 123", "ITS");
abil.idup();
console.log(`abil ni dari kampus ${abil.kampus}`);
