var member = ["iwan", "shinta", "yovi", "anto"];

member.forEach(function (mmbr) {
  console.log(mmbr);
});

// ini klo kita pake arrow(biar lebih singkat)

member.forEach((mmber, index) => {
  console.log(mmber, index);
});
