const signUpButton = document.getElementById("signup");
const signInButton = document.getElementById("signin");
const container = document.getElementById("container");
const display = document.getElementById("display");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
// ..................................................Sign In and Sign Up.......................................................

// let users = JSON.parse(localStorage.getItem("usersData")) || [];
// const signUp = document.getElementById("signUp")
// console.log(signUp)
// const signIn = document.getElementById("signIn")

let signIn = document.querySelector(".sign-in-container form");
let signUp = document.querySelector(".sign-up-container form");

let users = JSON.parse(localStorage.getItem("usersData")) || [];

signUp.addEventListener("submit", (e) => {
  e.preventDefault();
  signup();
  // alert("SignupSuccess")
  Swal.fire({
    position: "top",
    icon: "success",
    title: "Signup Successfully",
    showConfirmButton: false,
    timer: 1500,
  });
  setTimeout(() => {
    window.location.href = "newsignin.html";
  }, 1000);
});
function signup() {
  let userObj = {
    name: signUp.name.value,
    email: signUp.email.value,
    password: signUp.password.value,
    cart: [],
  };
  fetch(`https://63f47ff055677ef68bbd4bb4.mockapi.io/users`, {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

signIn.addEventListener("submit", (e) => {
  e.preventDefault();
  CheckEmployee(signIn.email1.value, signIn.password1.value);
});
function CheckEmployee(email, pass) {
  fetch(`https://63f47ff055677ef68bbd4bb4.mockapi.io/users`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (check(data, email, pass)) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(() => {
          window.location.href = "index.html";
        }, 1000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Wrong Credentials",
          footer:
            '<a href="">The email address or password you entered isnt match </a>',
        });
      }
    });
}
function check(data, email, pass) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].email == email && data[i].password == pass) {
      localStorage.setItem("login", data[i].name);
      return true;
    }
  }
}

//     .then((res) => res.json())
//     .then((data) => {
//       data.filter((ele) => {
//         if (
//           ele.email === signIn.email1.value &&
//           ele.password === signIn.password1.value
//         ) {
//           user.push(ele.id);
//           localStorage.setItem("userData", JSON.stringify(user));
//           // alert("Login Successfull")
//           Swal.fire({
//             position: "top",
//             icon: "success",
//             title: "Login Successfully",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           setTimeout(() => {
//             window.location.href = "index.html";
//           }, 1000);
//         ;
//         } else {
//           Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Wrong Credentials",
//             footer:
//               '<a href="">The email address or password you entered isnt match </a>',
//           });
//         }
//       });
//     });
//   return fetch;
// }
