let navbarLinks = document.querySelectorAll(".links-container a");
navbarLinks.forEach((el) => {
  el.addEventListener("click", () => {
    if (
      el.getAttribute("id") == "fashion" ||
      el.getAttribute("id") == "productsnearme"
    ) {
      localStorage.setItem("category", "a");
      window.location.href = "home.html";
    } else {
      localStorage.setItem("category", el.getAttribute("id"));
      window.location.href = "home.html";
    }
  });
});

let searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", () => {
  localStorage.setItem("category", document.querySelector(".search-box").value);
  window.location.href = "home.html";
});

let login = localStorage.getItem("userData") || false;
let cart_value = JSON.parse(localStorage.getItem("cart_items")) || 0;
let loginUser = localStorage.getItem("login") || false;

let myAccount = document.querySelector(".nav-items>:first-child span");
if (loginUser) {
  myAccount.innerHTML = loginUser;
}

let product = JSON.parse(localStorage.getItem("details"));
console.log(product);
let cart_item = document.getElementById("cart_quantity");
let price = document.getElementById("now_price");
let title = document.getElementById("title");
let quantity = document.getElementById("quantity");
let inrement = document.getElementById("inrement");
let decrement = document.getElementById("decrement");
let addtocart = document.getElementById("addtocart");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");

console.log(addtocart);

let main_img = document.querySelector(".big_img");
let small_img = document.getElementsByClassName("small_img");

for (let i = 0; i < 4; i++) {
  small_img[i].addEventListener("click", (e) => {
    e.preventDefault();

    main_img.setAttribute("src", small_img[i].src);
  });
}
//////////////////////////////////////////////////
// let product = JSON.parse(localStorage.getItem("details"));
main_img.src = product.image;
price.innerText = product.price;
title.innerText = product.title;
image1.src = product.image;
image2.src = product.image1;
image3.src = product.image2;
image4.src = product.image3;

let quantity_number = +quantity.innerText;

inrement.addEventListener("click", () => {
  quantity_number++;
  quantity.innerText = quantity_number;
  product.quantity = quantity_number;
  localStorage.setItem("cart", JSON.stringify(product));
});
decrement.addEventListener("click", () => {
  if (quantity_number > 1) {
    quantity_number--;
    quantity.innerText = quantity_number;
    product.quantity = quantity_number;
    localStorage.setItem("cart", JSON.stringify(product));
  }
});

let cart_data = JSON.parse(localStorage.getItem("cart")) || [];

function isAdded(el) {
  for (let i = 0; i < cart_data.length; i++) {
    if (cart_data[i].id == el.id) {
      return true;
    }
  }
  return false;
}

console.log(cart_data);
addtocart.addEventListener("click", () => {
  if (loginUser) {
    product.quantity = +quantity_number;

    if (isAdded(product)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Product Already in Cart",
        footer: '<a href=""></a>',
      });
    } else {
      cart_data.push(product);
      localStorage.setItem("cart", JSON.stringify(cart_data));
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Product Added to Cart",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Signin",
      footer: '<a href=""></a>',
    });
  }

  // if (login) {
  //     // if (check(product.id)) {
  //     //     cart_data.push(product);
  //     //     localStorage.setItem("cart", JSON.stringify(cart_data));
  //     //     alert("Product added to cart");

  //     //     cart_value += product.quantity;
  //     //     localStorage.setItem("cart_items", JSON.stringify(cart_value));

  //     //     cart_item.innerText = cart_value;
  //     //     // window.location.href = "cart.html"
  //     // } else {
  //     //     alert("product already in cart");
  //     //     // window.location.href = "cart.html";
  //     // }

  // }
  // else {
  //     alert("Please login to continue!");
  //     window.location.href = "signin.html";
  //     localStorage.setItem("userData", true);
  // }
});
