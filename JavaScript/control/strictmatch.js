function fuzzbuzz(num) {
  if (num == 0) {
    console.log("buzz");
  } else {
    console.log("fuzzbuzz");
  }
}

fuzzbuzz(0);
fuzzbuzz("0");

function fuzzbuzz2(num) {
  if (num === 0) {
    console.log("buzz");
  } else {
    console.log("fuzzbuzz");
  }
}

fuzzbuzz2(0);
fuzzbuzz2("0");
