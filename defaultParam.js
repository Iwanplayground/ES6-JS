//____misal judulnya jg kita maunya ambil dr default yg kita buat____

generateJudul = () => {
  return "judul biasanya";
};

createTag = (title = generateJudul(), tag = "#skrut") => {
  console.log(`forum ${title} punya tag ${tag}`);
};
createTag("tampilan rusak");
createTag("tampilan mode", "lampfill");
//---mode defaultnya inputer nda ngiisi apapun---
createTag();
