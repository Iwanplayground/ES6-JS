signIn = (username, pw) => {
  console.log(`${username} punya password ${pw} `);
};

let data = ["iwan", "382091"];
signIn(data[0], data[1]);

// bisa kta buat jd seperti ini
signUp = (uname, pw) => {
  console.log(`${uname} dengan password ${pw} siap daftar`);
};

let datum = ["Ridwan", "kuda203"];
signUp(...datum);
