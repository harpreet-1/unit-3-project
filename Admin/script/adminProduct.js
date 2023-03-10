// add new product
let recent_query = "";

let addProductsBtn = document.querySelector(".addProducts");
let addProductsBox = document.querySelector("#showHide");
let BoxCloseBtn = document.querySelector("#xmark");
let addProductsForm = document.querySelector("#showHide form");
addProductsBtn.addEventListener("click", () => {
  addProductsBox.style.display = "block";
});
BoxCloseBtn.addEventListener("click", () => {
  addProductsBox.style.display = "none";
});
addProductsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // alert
  let newProduct = {
    title: addProductsForm.newProducttitle.value,
    category: addProductsForm.newProductcat.value,
    description: addProductsForm.newProductdes.value,
    price: addProductsForm.newProductprice.value,
    image: addProductsForm.mainImage.value,
    image1: addProductsForm.image1.value,
    image2: addProductsForm.image2.value,
    image3: addProductsForm.image3.value,
  };
  console.log(newProduct);
  if (checkCategory(newProduct.category)) {
    fetch("https://63f47ff055677ef68bbd4bb4.mockapi.io/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    Swal.fire({
      position: "top",
      icon: "success",
      title: "New Product Added",
      showConfirmButton: false,
      timer: 1500,
    });
    fetchProducts(recent_query);
    addProductsForm.reset();
  }
});

function checkCategory(cat) {
  return true;
}

// fetch and render products

// catch html items
let tbody = document.querySelector(".productsBox tbody");
console.log(tbody);

fetchProducts();

function fetchProducts(query = "") {
  recent_query = query;
  fetch(`https://63f47ff055677ef68bbd4bb4.mockapi.io/products${query}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayProducts(data);
    });
}

function displayProducts(data) {
  tbody.innerHTML = `${data
    .map((el) => {
      return `<tr id="${el.id}">
      <td>
        <img
          src="${el.image}"
          class="pro-img"
        />
      </td>
      <td>${el.id}</td>
      <td style="max-width: 250px">
      ${el.title}
      </td>
      <td><span class="productCategory">${el.category}</span></td>
      <td><span class="productPrice">${el.price}</span></td>
      <td><span onclick="editProduct(${el.id})" class="editProduct">Edit </span></td>
      <td><span onclick="removeProduct(${el.id})" class="removeProduct">Remove</span></td>
    </tr>`;
    })
    .join("")}`;
}

// filter sort part

let sortByprice = document.getElementById("sortByprice");
let sortByTitle = document.getElementById("sortByTitle");
let filterByCategory = document.getElementById("filterByCategory");

sortByprice.addEventListener("change", () => {
  // alert(sortByprice.value);
  if (sortByprice.value == "") {
    // alert("fsdfsdfsd");
    fetchProducts();
  } else {
    fetchProducts("?sortBy=price&order=" + sortByprice.value);
  }
});
sortByTitle.addEventListener("change", () => {
  if (sortByTitle.value == "") {
    // alert("fsdfsdfsd");
    fetchProducts();
  } else {
    fetchProducts("?sortBy=title&order=" + sortByTitle.value);
  }
});
filterByCategory.addEventListener("change", () => {
  if (filterByCategory.value == "") {
    // alert("fsdfsdfsd");
    fetchProducts();
  } else {
    fetchProducts("?category=" + filterByCategory.value);
  }
});

// search Product
let searchProductInput = document.getElementById("searchProduct");
let searchProductbtn = document.getElementById("searchbtn");

searchProductInput.addEventListener("change", () => {
  // alert(searchProductInput.value);
  fetchProducts("?search=" + searchProductInput.value);
});

//removeProduct

function removeProduct(id) {
  Swal.fire({
    title: "Are you sure! you want Remove This Product?",
    showDenyButton: true,
    position: "top",
    // showCancelButton: true,
    icon: "warning",
    confirmButtonText: "Yes",
    denyButtonText: `No`,
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://63f47ff055677ef68bbd4bb4.mockapi.io/products/${id}`, {
        method: "DELETE",
      });
      let tr = document.getElementById(`${id}`);
      tr.remove();

      Swal.fire({
        position: "top",
        icon: "success",
        title: "Product Removed Successfully " + id,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
}

//
//

//

//
// add new product

let editProductsBox = document.querySelector(".showHide2");
let editCloseBtn = document.querySelector(".xmark2");
let editProductsForm = document.querySelector(".showHide2 form");

editCloseBtn.addEventListener("click", () => {
  editProductsBox.style.display = "none";
});
console.log(editProductsForm);
// addProductsForm.addEventListener("submit", (e) => {
//   e.preventDefault();

// let newProduct = {
//   title: editProductsForm.newProducttitle.value,
//   category: editProductsForm.newProductcat.value,
//   description: editProductsForm.newProductdes.value,
//   price: editProductsForm.newProductdes.value,
//   image: editProductsForm.mainImage.value,
//   image1: editProductsForm.image1.value,
//   image2: editProductsForm.image2.value,
//   image3: editProductsForm.image3.value,
// };
// console.log(newProduct);
//   if (checkCategory(newProduct.category)) {
//     fetch("https://63f47ff055677ef68bbd4bb4.mockapi.io/products", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(newProduct),
//     });
//     Swal.fire({
//       position: "top",
//       icon: "success",
//       title: "Your work has been saved",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//     addProductsForm.reset();
//   }
// });

// function checkCategory(cat) {
//   return false;
// }

function editProduct(id) {
  let ele = "";
  fetch("https://63f47ff055677ef68bbd4bb4.mockapi.io/products/" + id)
    .then((res) => res.json())
    .then((el) => {
      console.log(el);
      editProductsForm.newProducttitle.value = el.title;
      editProductsForm.newProductcat.value = el.category;
      editProductsForm.newProductdes.value = el.description;
      editProductsForm.newProductprice.value = el.price;
      editProductsForm.mainImage.value = el.image;
      editProductsForm.image1.value = el.image1;
      editProductsForm.image2.value = el.image2;
      editProductsForm.image3.value = el.image3;
      ele = el;
    });
  editProductsBox.style.display = "block";

  editProductsForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let newProduct = {
      title: editProductsForm.newProducttitle.value,
      category: editProductsForm.newProductcat.value,
      description: editProductsForm.newProductdes.value,
      price: editProductsForm.newProductprice.value,
      image: editProductsForm.mainImage.value,
      image1: editProductsForm.image1.value,
      image2: editProductsForm.image2.value,
      image3: editProductsForm.image3.value,
    };
    console.log(newProduct);
    if (checkCategory(newProduct.category)) {
      fetch("https://63f47ff055677ef68bbd4bb4.mockapi.io/products/" + id, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          fetchProducts(recent_query);
        });

      Swal.fire({
        position: "top",
        icon: "success",
        title: "Product Edited",
        showConfirmButton: false,
        timer: 1500,
      });
      editProductsBox.style.display = "none";
    }
  });
}
