//////////////////////////////////////////////////////////////////////////////////////////
//Search Part
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
/////////////////////////////////////////////////////////////////////////////////////////

let loginUser = localStorage.getItem("login") || false;
let logoutbtn = document.getElementById("logoutbtn");
let myAccount = document.querySelector(".nav-items>:first-child span");
if (loginUser) {
  myAccount.innerHTML = loginUser;
  logoutbtn.style.display = "block";
} else {
  logoutbtn.style.display = "none";
}

logoutbtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "./index.html";
});

let searchinp = localStorage.getItem("category");
console.log(searchinp);
let product = document.getElementById("container");
// let product = document.querySelector(`#product-container div`)
let pagination_buttons = document.getElementById("pagination-wrapper");
let btns = 0;
let arr = [];
async function countData() {
  let res = await fetch(
    `https://63f47ff055677ef68bbd4bb4.mockapi.io/products?search=${searchinp}`
  );
  let data = await res.json();

  console.log(data);
  btns = Math.ceil(data.length / 12);
  console.log(btns);
  paginationButton(btns);

  console.log(arr);
}
function paginationButton(page) {
  let page_btn = [];
  for (let i = 1; i <= page; i++) {
    page_btn.push(
      `<button class="pagination-button" data-page-number=${i}>${i}</button>`
    );
  }

  pagination_buttons.innerHTML = page_btn.join("");
  //console.log(page_btn.join(""));
  const all_buttons = document.querySelectorAll(
    "#pagination-wrapper .pagination-button"
  );
  let nextbutton = document.getElementById("next_btn");
  for (let btn of all_buttons) {
    btn.addEventListener("click", (e) => {
      console.log(e.target.dataset.pageNumber);
      fetchData(e.target.dataset.pageNumber, api);
    });
  }
}
let api = `https://63f47ff055677ef68bbd4bb4.mockapi.io/products?`;
async function fetchData(pagenumber, api) {
  let res = await fetch(
    `https://63f47ff055677ef68bbd4bb4.mockapi.io/products?search=${searchinp}&page=${pagenumber}&limit=12`
  );
  let data = await res.json();
  // data = data.data
  console.log(data);
  arr = [...data];
  Display(data);
}

window.addEventListener("load", () => {
  fetchData(1, api);
  countData();
});
let arr1 = [];
let localdata = JSON.parse(localStorage.getItem("cart")) || [];

function Display(data) {
  product.innerHTML = "";
  data.forEach((e) => {
    let card = document.createElement("div");

    let image = document.createElement("img");

    image.src = e.image;

    // let description = document.createElement("a")
    // description.innerHTML = e.description

    // let title = document.createElement("p")
    // title.innerHTML = e.title
    let title = document.createElement("h4");

    title.innerText = e.title;

    // let originalprice = document.createElement("h4")
    // originalprice.setAttribute("class", "originalprice")
    // originalprice.innerHTML = `₹${Math.floor((Math.random() + 1) * 999)}`
    // let category = document.createElement("p")
    // category.innerHTML = e.category
    let discount = document.createElement("h5");
    discount.setAttribute("class", "discount");
    discount.innerHTML = `${Math.floor(Math.random() * 30)}% off`;
    let price = document.createElement("h3");
    price.innerHTML = `₹${e.price}`;

    let rating1 = document.createElement("i");
    rating1.setAttribute("class", "fa-solid fa-star");
    let rating2 = document.createElement("i");
    rating2.setAttribute("class", "fa-solid fa-star");
    let rating3 = document.createElement("i");
    rating3.setAttribute("class", "fa-solid fa-star");
    let rating4 = document.createElement("i");
    rating4.setAttribute("class", "fa-solid fa-star");
    let rating5 = document.createElement("i");
    rating5.setAttribute("class", "fa-solid fa-star");
    let rating = document.createElement("div");
    rating.append(rating1, rating2, rating3, rating4, rating5);

    let btn = document.createElement("button");
    btn.innerHTML = "Add to cart";
    e.price = +e.price;
    let used = 0;
    e.quantity = 1;
    function isAdded(el) {
      for (let i = 0; i < localdata.length; i++) {
        if (localdata[i].id == el.id) {
          return true;
        }
      }
      return false;
    }
    btn.addEventListener("click", () => {
      if (loginUser) {
        if (isAdded(e)) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Product Already in Cart",
            footer: '<a href=""></a>',
          });
        } else {
          localdata.push(e);
          localStorage.setItem("cart", JSON.stringify(localdata));
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product Added To Cart",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Signin ",
          footer: '<a href=""></a>',
        });
      }
    });

    card.append(image, title, rating, price, discount, btn);
    product.append(card);

    title.addEventListener("click", () => {
      localStorage.setItem("details", JSON.stringify(e));
      window.location.href = "product.html";
    });
  });

  let disc = document.querySelectorAll(".discount");
  disc = arr1;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
// let radioinputss = document.querySelectorAll(`input[name="Discount"]`)
// console.log(radioinputss)
// radioinputss.forEach(input => {
//   input.addEventListener("change", function () {
//     if (this.value == "0ormore") {
//       // console.log(this.value)
//       let x = arr.filter((e) => e.d >= 500 && e.price <= 1000);
//       console.log(x)
//       btns = Math.ceil(x.length / 12);
//       console.log(btns)
//       paginationButton(btns)
//       Display(x)
//     }
//     else if (this.value == 500) {
//       let x = arr.filter((e) => e.price >= 1000 && e.price <= 1500);
//       console.log(x)
//       btns = Math.ceil(x.length / 12);
//       console.log(btns)
//       paginationButton(btns)
//       Display(x)

//     }
//     else if (this.value == 1000) {
//       let x = arr.filter((e) => e.price >= 1500 && e.price <= 2000);
//       console.log(x)
//       btns = Math.ceil(x.length / 12);
//       console.log(btns)
//       paginationButton(btns)
//       Display(x)

//     }
//   })
// })

// Filter Part

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });
  options.forEach((option) => {
    option.addEventListener("clicked", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
        option.classList.add("active");
      });
    });
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let radioinput = document.querySelectorAll('input[name="Price"]');
// console.log(radioinput)
radioinput.forEach((input) => {
  input.addEventListener("change", function () {
    if (this.value == 200) {
      // console.log(this.value)
      let x = arr.filter((e) => e.price >= 500 && e.price <= 1000);
      console.log(x);
      btns = Math.ceil(x.length / 12);
      console.log(btns);
      paginationButton(btns);
      Display(x);
    } else if (this.value == 500) {
      let x = arr.filter((e) => e.price >= 1000 && e.price <= 1500);
      console.log(x);
      btns = Math.ceil(x.length / 12);
      console.log(btns);
      paginationButton(btns);
      Display(x);
    } else if (this.value == 1000) {
      let x = arr.filter((e) => e.price >= 1500 && e.price <= 2000);
      console.log(x);
      btns = Math.ceil(x.length / 12);
      console.log(btns);
      paginationButton(btns);
      Display(x);
    }
  });
});

let radioinputs = document.querySelectorAll('input[name="price"]');
radioinputs.forEach((input) => {
  input.addEventListener("change", function () {
    if (this.value == "High") {
      // alert("hello")
      api = `https://63f47ff055677ef68bbd4bb4.mockapi.io/products?sortBy=price&order=desc`;
      fetchData(1, api);
    } else if (this.value == "Medium") {
      api = `https://63f47ff055677ef68bbd4bb4.mockapi.io/products?`;
      fetchData(1, api);
    } else if (this.value == "Low") {
      api = `${api}sortBy=price&order=asc`;
      fetchData(1, api);
    }
  });
});
