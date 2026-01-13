/* script

shopping list with:

1) Add Item
2) Remove Last Item
3) Display List 

I am still confused on Const versus Let, it feels like I could make clearer
code by*/

let cart = [];

let itemInput = document.getElementById("itemInput");

let addItemButton = document.getElementById("addItemButton");

let removeItemButton = document.getElementById("removeItemButton");

let cartList = document.getElementById("cart");

addItemButton.addEventListener("click", function () {
  let item = itemInput.value;

  if (item === "") {
    alert("Please enter an item.");

    return;
  }

  cart.push(item); // Add item to cart array

  renderCart();

  itemInput.value = ""; // Clear the input field
});

removeItemButton.addEventListener("click", function () {
  cart.pop(); // Remove last item from cart array

  renderCart();
});

function renderCart() {
  cartList.innerHTML = ""; // Clear existing list

  for (let i = 0; i < cart.length; i++) {
    let listItem = document.createElement("li");

    listItem.innerText = cart[i];

    cartList.appendChild(listItem);

    let deleteBtn = document.createElement("button");

    deleteBtn.innerText = "remove";

    listItem.appendChild(deleteBtn);

    deleteBtn.classList.add("removeBtn");

    deleteBtn.setAttribute("data-item-index", i);

    deleteBtn.addEventListener("click", function () {
      let index = this.getAttribute("data-item-index");

      cart.splice(index, 1);

      renderCart();
    });
  }
}
