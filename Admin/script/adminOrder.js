// fetch and render products

// catch html items
let tbody = document.querySelector(".ordersBox tbody");
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
// alert
function displayProducts(data) {
  tbody.innerHTML = `${data
    .map((el) => {
      return `<tr>
      <td>
        <img
          src="${
            el.image ||
            "https://i.etsystatic.com/21184941/c/1145/910/0/9/il/2d7e63/4661646365/il_680x540.4661646365_2iz8.jpg"
          }"
          class="pro-img"
        />
      </td>

      <td style="max-width: 250px">
      ${el.title || " Exclusive Bollywood Designer color Saree"} 
      </td>

      <td><span class="productCategory">${el.category || "Saree"}</span></td>
     
      <td><span class="productPrice">${
        el.price || Math.floor(Math.random() * 9999)
      }</span></td>
      <td>${el.quantity || 1}</td>
      <td><span class="totalPrice">${
        el.quantity * el.price || Math.floor(Math.random() * 9999)
      }</span></td>
      <td><span class="status delivered">Delivered </span></td>
      <td>
        <span class="editstatus"
          ><select name="" id="">
            <option value="">Edit Status</option>
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
            <option value="cancled">Cancled</option>
          </select>
        </span>
      </td>
    </tr>`;
    })
    .join("")}`;
}

// filter sort part

let sortByprice = document.getElementById("sortByprice");
let sortByPay = document.getElementById("sortByPay");
let filerByStatus = document.getElementById("filerByStatus");

sortByPay.addEventListener("change", () => {
  // alert(sortByPay.value);
  if (sortByPay.value == "") {
    fetchProducts();
  } else {
    fetchProducts("?sortBy=name&order=" + sortByPay.value);
  }
});
sortByprice.addEventListener("change", () => {
  if (sortByprice.value == "") {
    fetchProducts();
  } else {
    fetchProducts("?sortBy=title&order=" + sortByprice.value);
  }
});
filerByStatus.addEventListener("change", () => {
  if (sortByOrders.value == "") {
    fetchProducts();
  } else {
    fetchProducts("?sortBy=title&order=" + filerByStatus.value);
  }
});
