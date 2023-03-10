// let fashion = document.getElementById("fashion")
// let beauty = document.getElementById("beauty")
// let home = document.getElementById("home")
// let pro = document.getElementById("productsnearme")
// fashion.addEventListener("click", () => {
//     localStorage.setItem("category", "")
//     window.location.href = "./ACE FASHION/home.html"
// })
// beauty.addEventListener("click", () => {
//     localStorage.setItem("category", "Personal Care")
//     window.location.href = "./ACE FASHION/home.html"
// })
// home.addEventListener("click", () => {
//     localStorage.setItem("category", "home")
//     window.location.href = "./ACE FASHION/home.html"
// })
// pro.addEventListener("click", () => {
//     localStorage.setItem("category", "")
//     window.location.href = "./ACE FASHION/home.html"
// })
let loginUser = localStorage.getItem("login") || false;
let logoutbtn = document.getElementById("logoutbtn");
let myAccount = document.querySelector(".nav-items>:first-child span");
if (loginUser) {
  myAccount.innerHTML = loginUser;
  logoutbtn.style.display = "block";
}

logoutbtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "./index.html";
});

// let inp_btn = document.querySelector(".search-btn")
// inp_btn.addEventListener("click", () => {
//     // alert(document.querySelector(".serchbar").value)
//     let input_el = document.querySelector(".search-box").value;
//     localStorage.setItem("search", JSON.stringify(input_el));
//     window.location.href = "./ACE FASHION/home.html";
// });

let navbarLinks = document.querySelectorAll(".links-container a");
navbarLinks.forEach((el) => {
  el.addEventListener("click", () => {
    if (
      el.getAttribute("id") == "fashion" ||
      el.getAttribute("id") == "productsnearme"
    ) {
      localStorage.setItem("category", "a");
      window.location.href = "./ACE FASHION/home.html";
    } else {
      localStorage.setItem("category", el.getAttribute("id"));
      window.location.href = "./ACE FASHION/home.html";
    }
  });
});

let categories = [
  "saree",
  "kurta",
  "beauty",
  "home",
  "tote",
  "mugs",
  "idols",
  "beauty",
  "home",
  "tote",
  "mug",
  "idol",
];

let sliderCategory = document.querySelectorAll(".slide");
sliderCategory.forEach((el, index) => {
  el.addEventListener("click", () => {
    // alert);
    localStorage.setItem("category", categories[index]);
    window.location.href = "./ACE FASHION/home.html";
  });
});

let searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", () => {
  localStorage.setItem("category", document.querySelector(".search-box").value);
  window.location.href = "./ACE FASHION/home.html";
});
