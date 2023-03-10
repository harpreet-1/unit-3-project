const signUpButton = document.getElementById('signup');
const signInButton = document.getElementById('signin');
const container = document.getElementById('container');
const display = document.getElementById("display");

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
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
    e.preventDefault()
    signup()
    // alert("SignupSuccess")
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Signup Successfully',
        showConfirmButton: false,
        timer: 1500
    })
    setTimeout(() => {
        window.location.href = ""
    }, 1000)
})
function signup() {
    let userObj = {
        name: signUp.name.value,
        email: signUp.email.value,
        password: signUp.password.value,
        cart: []
    }
    fetch(`https://63f47ff055677ef68bbd4bb4.mockapi.io/users`, {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            'Content-type': 'application/json'
        }

    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
}
// signUp.addEventListener("submit", function (event) {

//     event.preventDefault();

//     let count = 0;
//     users.forEach(function (el) {
//         if (el.email === signUp.email.value) {
//             count++;
//         }
//     });

//     if (count > 0) {
//         // alert("user already registered!");

//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'User Already Register',
//             footer: '<a href="">Why do I have this issue?</a>'
//         })
//     }
//     else {

//         let user = {
//             name: signUp.name.value,
//             email: signUp.email.value,
//             password: signUp.password.value,
//         };

//         users.push(user);

//         localStorage.setItem("usersData", JSON.stringify(users));
//         // alert("Sign Up successful!");

//         Swal.fire({
//             icon: '',
//             title: 'Yay...',
//             text: 'Sign Up Successfull',
//             footer: '<a href="">Why do I have this issue?</a>'
//         })


//         signUp.reset();

//     }
// });
/////////////////////////////




// let myAccount = document.querySelector(".nav-items>:first-child span")

signIn.addEventListener("submit", (e) => {
    e.preventDefault()
    CheckEmployee()
})
function CheckEmployee() {
    let user = []
    let userobj = {
        // email: signIn.email1.value,
        password: signIn.password1.value
    }

    fetch(`https://63f47ff055677ef68bbd4bb4.mockapi.io/users`, {
        method: "GET",
        headers: {
            'Content-type': 'application/json'
        }
    })

        .then((res) => res.json())
        .then((data) => {
            data.filter(ele => {
                if (ele.email === signIn.email1.value && ele.password === signIn.password1.value) {
                    user.push(ele.id)
                    localStorage.setItem("userData", JSON.stringify(user))
                    // alert("Login Successfull")
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Login Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(() => {
                        window.location.href = ""
                    }, 1000)
                    localStorage.setItem("login", ele.name)
                    // window.location.href = "index.html"
                    // myAccount.innerHTML = ele.name
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Wrong Credentials',
                        footer: '<a href="">The email address or password you entered isnt match </a>'
                    })
                }
            })
        })
    return fetch
}






/////////////////////////////
// signIn.addEventListener("submit", function (event) {
//     event.preventDefault();
//     let count = 0;
//     // we are creating a temp var to store user who is trying to login
//     let temp;
//     // we are checking whether the user is registered or not
//     users.forEach(function (el) {
//         if (el.email === signIn.email1.value) {
//             count++;
//             // when count is incremented or we found user, we are storing the user data;
//             temp = el;
//             // we are storing the user in our local storage so that we can access user data from different pages
//             localStorage.setItem('loggedUser', JSON.stringify(el));
//         }
//     });
//     // if we didn't find any user we alert
//     if (count == 0) {
//         // alert("user not registered!");

//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'User Not Registered',
//             footer: '<a href="">Why do I have this issue?</a>'
//         })
//     }
//     // if we find user we check the password
//     else {
//         // we check the temp password with form password
//         if (temp.password != signIn.password1.value) {
//             // alert("wrong password");

//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'Wrong Password',
//                 footer: '<a href="">Why do I have this issue?</a>'
//             })
//         } else {
//             // alert("login successful!");

//             Swal.fire({
//                 icon: '',
//                 title: 'Yay...',
//                 text: 'Login Successfull',
//                 footer: '<a href="">Why do I have this issue?</a>'
//             })
//             // we can use n number of methods to change the page. here we are using assign() method
//             // window.location.assign('url')
//             window.location.assign("./home.html");
//         }
//     }
// });