// fetch and render products

// catch html items
let tbody = document.querySelector(".custmoresBox tbody");
console.log(tbody);
let recent_query = "";
fetchProducts();

function fetchProducts(query = "") {
  recent_query = query;
  fetch(`https://63f47ff055677ef68bbd4bb4.mockapi.io/users${query}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayProducts(data);
    });
}

function displayProducts(data) {
  tbody.innerHTML = `${data
    .map((el) => {
      return `<tr>
      <td>
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
          class="pro-img"
        />
      </td>
      <td>${el.id}</td>
      <td>${el.name}</td>
      <td><span class="orders">${
        el.orders || Math.floor(Math.random() * 9 + 1)
      }</span></td>
      <td><span class="mobilleNumber">${el.mobile}</span></td>
      <td><span class="payment"><i class="fa-solid fa-indian-rupee-sign"></i> ${
        el.payment || Math.floor(Math.random() * 9999 + 1)
      }</span></td>
    </tr>`;
    })
    .join("")}`;
}

// filter sort part

let sortByPay = document.getElementById("sortByPay");
let sortByName = document.getElementById("sortByName");
let sortByOrders = document.getElementById("sortByOrders");

sortByName.addEventListener("change", () => {
  // alert(sortByName.value);
  if (sortByName.value == "") {
    // alert("fsdfsdfsd");
    fetchProducts();
  } else {
    fetchProducts("?sortBy=name&order=" + sortByName.value);
  }
});
sortByPay.addEventListener("change", () => {
  if (sortByPay.value == "") {
    fetchProducts();
  } else {
    fetchProducts("?sortBy=title&order=" + sortByPay.value);
  }
});
sortByOrders.addEventListener("change", () => {
  if (sortByOrders.value == "") {
    fetchProducts();
  } else {
    fetchProducts("?sortBy=title&order=" + sortByOrders.value);
  }
});
