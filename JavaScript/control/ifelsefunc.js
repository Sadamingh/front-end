function fuzzbuzz(num) {
  if (num % 3 == 0) {
    console.log("buzz");
  } else if (num % 5 == 0) {
    console.log("fuzz");
  } else {
    console.log("fuzzbuzz");
  }
}

fuzzbuzz(9);
fuzzbuzz(10);
fuzzbuzz(15);
fuzzbuzz(1);
