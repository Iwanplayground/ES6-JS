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
