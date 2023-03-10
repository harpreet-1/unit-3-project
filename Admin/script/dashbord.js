let toggle = document.querySelector(".toggle");
let main = document.querySelector(".main");
let navigation = document.querySelector(".navigation");
toggle.addEventListener("click", () => {
  //   alert("dsd");
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
});

// search Product
let searchProductInput = document.getElementById("searchProduct");
let searchProductbtn = document.getElementById("searchbtn");

searchProductInput.addEventListener("change", () => {
  // alert(searchProductInput.value);
  fetchProducts("?search=" + searchProductInput.value);
});
