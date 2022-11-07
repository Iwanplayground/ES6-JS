const fungsiEksekutor = (resolve, reject) => {
  const kopiSudahSiapDibuat = false;
  if (kopiSudahSiapDibuat) {
    resolve("kopi sudah aman sampai ke pelanggan");
  } else {
    reject("mesin kopi kita lagi rusak ni mon maap");
  }
};

const handlerSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const buatKopi = new Promise(fungsiEksekutor);
buatKopi.then.catch(handlerSuccess);
