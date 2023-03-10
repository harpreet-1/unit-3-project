let form = document.querySelector(".form-container form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = form.email1.value;
  let pass = form.password1.value;
  if (email == "admin@gmail.com" && pass == 1234) {
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Login Successfull ",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      window.location.href = "/Admin/dashboard.html";
    }, 1500);
  }
});
