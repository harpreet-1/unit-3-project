let addAddressbtn = document.getElementById("addAddress")
let userAddress = JSON.parse(localStorage.getItem("useraddress")) || []


addAddressbtn.addEventListener("click",()=>{
  console.log("address")

let name = document.querySelector(".name")
let mobile = document.querySelector(".mobile")
let pincode = document.getElementById("pincode")
// let address = document.getElementById("address")
let Locality = document.getElementById("Locality")
let city = document.getElementById("city")
let state = document.getElementById("state")

  let userObj = {
    name:name.value,
    mobile:mobile.value,
    pincode:pincode.value,
    // address:address.value,
    Locality:Locality.value,
    city:city.value,
    state:state.value
  }
  userAddress.push(userObj)
  localStorage.setItem("useraddress",JSON.stringify(userAddress))

  // ===========address show==============
  let outer = document.getElementById("outer")
  let addressPopup = document.getElementById("addressPopup")
  let addressContainer = document.getElementById("addressContainer")

  


  let nameshow = document.getElementById("nameshow")
  let mobshow = document.getElementById("mobshow")
  let localAddrshow = document.getElementById("localAddrshow")
  let pincodeshow = document.getElementById("pincodeshow")
  let cityshow = document.getElementById("cityshow")
  let stateShow = document.getElementById("stateShow")
  // let removebtn = document.createElement("button")
  // removebtn.innerText = "REMOVE"
  let editbtn = document.createElement("button")
  editbtn.innerText = "EDIT"
  editbtn.setAttribute("id","editbtn")


  nameshow.innerText = name.value
  mobshow.innerText = mobile.value;
  localAddrshow.innerText = Locality.value
  pincodeshow.innerText = pincode.value
  cityshow.innerText = city.value;
  stateShow = state.value;

  
  addressContainer.append(nameshow,mobshow,localAddrshow,pincodeshow,cityshow,stateShow,editbtn)

  outer.append(addressContainer)
  addressPopup.append(outer)

})












// =======================================
const addAddressBtn = document.getElementById("addAddress");
const loginPopup = document.getElementById("addressPopup");
const closeBtn = document.querySelector(".close");

addAddressBtn.addEventListener("click", () => {
  loginPopup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  loginPopup.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == loginPopup) {
    loginPopup.style.display = "none";
  }

});


