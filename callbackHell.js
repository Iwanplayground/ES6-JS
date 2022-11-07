// Kita sudah mengetahui bahwa callback dibutuhkan untuk mendapatkan nilai yang berasal dari asynchronous function.
// Lantas bagaimana jika terdapat proses satu sama lain yang saling bergantungan?
// Contohnya, untuk membuat kue tahapan yang perlu kita lakukan adalah siapin bhan, mbuat adonan, myiapkan ke cetakan, manggang adonan
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

function makeACake(...rawIngredients) {
  const ingredients = gatheringIngredients(rawIngredients),
    dough = makeTheDough(ingredients),
    pouredDough = pourDough(dough),
    cake = bakeACake(pouredDough);

  console.log(cake);
}

function makeACake(...rawIngredients) {
  gatheringIngredients(rawIngredients, function (ingridients) {
    makeTheDough(ingridients, function (dough) {
      pourDough(dough, function (pouredDough) {
        bakeACake(pouredDough, function (cake) {
          console.log(cake);
        });
      });
    });
  });
}

function makeACake(...rawIngredients) {
  gatheringIngredients(rawIngredients).then(makeTheDough).then(pourDough).then(bakeACake).then(console.log);
}
