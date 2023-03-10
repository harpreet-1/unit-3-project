let cartDataLs = JSON.parse(localStorage.getItem("cart")) || [];
let itemcontainer = document.getElementById("itemcontainer")






// =================================

window.addEventListener("load",()=>{
    displaycartData()
})

function displaycartData(){

    // itemcontainer.innerHTML = ""
    // cartDataLs.forEach((item)=>{

    //     let itemimage = document.getElementById("itemimage")
    //     let title = document.getElementById("title")
    //     let description = document.getElementById("description")
    //     let category = document.getElementById("category")
    //     let price = document.getElementById("price")

    //     itemimage.src= item.image,
    //     title.innerText = item.title,
    //     description.innerText = item.description,
    //     category.innerText = item.category,
    //     price.innerText = item.price


    //     itemcontainer.append(itemimage,title,description,category,price)
    // })

    // for(let i=0; i<cartDataLs.length; i++){
        console.log(cartDataLs)
    // }
    


}






