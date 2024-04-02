//sidenav
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menu")
menuicon.addEventListener("click", function () {
  sidenav.style.right = 0
})
var closeicon = document.getElementById("close")
closeicon.addEventListener("click", function () {
  sidenav.style.right = "-50%"
})

//slider

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1 }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


//search function

var productContainer = document.getElementById("product-container");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div")
search.addEventListener("keyup", function () {
  var enteredValue = event.target.value.toUpperCase()
  for (count = 0; count < productList.length; count = count + 1) {
    var productName = productList[count].querySelector("h1").textContent
    if (productName.toUpperCase().indexOf(enteredValue) < 0) {
      productList[count].style.display = 'none'
    }
    else {
      productList[count].style.display = 'block'
    }
  }

})

//favourites

var btnvar1 = document.getElementById('btnh1');
function Toggle1() {
  if (btnvar1.style.color == "red") {
    btnvar1.style.color = "grey"
  }
  else {
    btnvar1.style.color = "red"
  }
}

var btnvar2 = document.getElementById('btnh2');
function Toggle2() {
  if (btnvar2.style.color == "red") {
    btnvar2.style.color = "grey"
  }
  else {
    btnvar2.style.color = "red"
  }
}

var btnvar3 = document.getElementById('btnh3');
function Toggle3() {
  if (btnvar3.style.color == "red") {
    btnvar3.style.color = "grey"
  }
  else {
    btnvar3.style.color = "red"
  }
}

var btnvar4 = document.getElementById('btnh4');
function Toggle4() {
  if (btnvar4.style.color == "red") {
    btnvar4.style.color = "grey"
  }
  else {
    btnvar4.style.color = "red"
  }
}

var btnvar5 = document.getElementById('btnh5');
function Toggle5() {
  if (btnvar5.style.color == "red") {
    btnvar5.style.color = "grey"
  }
  else {
    btnvar5.style.color = "red"
  }
}

var btnvar6 = document.getElementById('btnh6');
function Toggle6() {
  if (btnvar6.style.color == "red") {
    btnvar6.style.color = "grey"
  }
  else {
    btnvar6.style.color = "red"
  }
}

var btnvar7 = document.getElementById('btnh7');
function Toggle7() {
  if (btnvar7.style.color == "red") {
    btnvar7.style.color = "grey"
  }
  else {
    btnvar7.style.color = "red"
  }
}

var btnvar8 = document.getElementById('btnh8');
function Toggle8() {
  if (btnvar8.style.color == "red") {
    btnvar8.style.color = "grey"
  }
  else {
    btnvar8.style.color = "red"
  }
}

//navbar




var logoutbtn = document.getElementById("logoutbtn")
var user = document.getElementById("user");
var display = 0;
user.addEventListener("click", function () {
  if (display == 1) {
    logoutbtn.style.display = "block"
    display = 0;
  }
  else {
    logoutbtn.style.display = "none"
    display = 1
  }
})


var item1 = document.getElementById("cart1");
function handlecart1() {
  if (item1.style.backgroundColor == "white") {
    item1.style.backgroundColor = "black";
    item1.style.color = "white";
    item1.innerText = "Add to Cart";
  }
  else {
    item1.style.backgroundColor = "white";
    item1.style.border = "1px solid black"
    item1.style.color = "black";
    item1.innerText = "Added";
  }
}

var item2 = document.getElementById("cart2");
function handlecart2() {
  if (item2.style.backgroundColor == "white") {
    item2.style.backgroundColor = "black";
    item2.style.color = "white";
    item2.innerText = "Add to Cart";
  }
  else {
    item2.style.backgroundColor = "white";
    item2.style.border = "1px solid black"
    item2.style.color = "black";
    item2.innerText = "Added";
  }
}
var item3 = document.getElementById("cart3");
function handlecart3() {
  if (item3.style.backgroundColor == "white") {
    item3.style.backgroundColor = "black";
    item3.style.color = "white";
    item3.innerText = "Add to Cart";
  }
  else {
    item3.style.backgroundColor = "white";
    item3.style.border = "1px solid black"
    item3.style.color = "black";
    item3.innerText = "Added";
  }
}
var item4 = document.getElementById("cart4");
function handlecart4() {
  if (item4.style.backgroundColor == "white") {
    item4.style.backgroundColor = "black";
    item4.style.color = "white";
    item4.innerText = "Add to Cart";
  }
  else {
    item4.style.backgroundColor = "white";
    item4.style.border = "1px solid black"
    item4.style.color = "black";
    item4.innerText = "Added";
  }
}
var item5 = document.getElementById("cart5");
function handlecart5() {
  if (item5.style.backgroundColor == "white") {
    item5.style.backgroundColor = "black";
    item5.style.color = "white";
    item5.innerText = "Add to Cart";
  }
  else {
    item5.style.backgroundColor = "white";
    item5.style.border = "1px solid black"
    item5.style.color = "black";
    item5.innerText = "Added";
  }
}
var item6 = document.getElementById("cart6");
function handlecart6() {
  if (item6.style.backgroundColor == "white") {
    item6.style.backgroundColor = "black";
    item6.style.color = "white";
    item6.innerText = "Add to Cart";
  }
  else {
    item6.style.backgroundColor = "white";
    item6.style.border = "1px solid black"
    item6.style.color = "black";
    item6.innerText = "Added";
  }
}
var item7 = document.getElementById("cart7");
function handlecart7() {
  if (item7.style.backgroundColor == "white") {
    item7.style.backgroundColor = "black";
    item7.style.color = "white";
    item7.innerText = "Add to Cart";
  }
  else {
    item7.style.backgroundColor = "white";
    item7.style.border = "1px solid black"
    item7.style.color = "black";
    item7.innerText = "Added";
  }
}
var item8 = document.getElementById("cart8");
function handlecart8() {
  if (item8.style.backgroundColor == "white") {
    item8.style.backgroundColor = "black";
    item8.style.color = "white";
    item8.innerText = "Add to Cart";
  }
  else {
    item8.style.backgroundColor = "white";
    item8.style.border = "1px solid black"
    item8.style.color = "black";
    item8.innerText = "Added";
  }
}
var count = document.getElementById("count")

//cart bar

var cartBar = document.getElementById("cartBar")
var cart = document.getElementById("cart")
cart.addEventListener("click", function () {
  cartBar.style.left = 0
})
var cartClose = document.getElementById("cartClose")
cartClose.addEventListener("click", function () {
  cartBar.style.left = "-100%"
})


//cart items

document.addEventListener('DOMContentLoaded', loadShoes);
function loadShoes() {
  loadContent();
}

//cart remove items

function loadContent() {
  //remove items from cart
  let btnRemove = document.querySelectorAll('.cart-remove');
  btnRemove.forEach((iconbtn) => {
    iconbtn.addEventListener('click', removeItem);
  });
  //product item chage event
  let qtyElements = document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input) => {
    input.addEventListener('change', changeQty);
  });

  //product cart
  let cartBtns = document.querySelectorAll('.add-cart');
  cartBtns.forEach((cartbtn) => {
    cartbtn.addEventListener('click', addCart);
  });

  updateTotal();
}
//remove  item
function removeItem() {
  if (confirm('Are you sure to remove?')) {
    let title=this.parentElement.querySelector('.cart-box-title').innerHTML;
    itemList=itemList.filter(el=>el.title!=title);
    this.parentElement.remove();
    loadContent();
  }
}

//changeQty
function changeQty() {
  if (this.value < 1) {
    this.value = 1;
  }
  loadContent();
}

let itemList=[];

//add cart
function addCart() {
  let shoe = this.parentElement;
  let title = shoe.querySelector('.shoe-title').innerText;
  let price = shoe.querySelector('.shoe-price').innerText;
  let imgSrc = shoe.querySelector('.prod-img').src;

  let newProduct={title,price,imgSrc};

  //check if product already exist in the cart

  if(itemList.find((el)=>el.title==newProduct.title)){
    alert("Product already added in cart");
    return;
  }
  else{
    itemList.push(newProduct)
  }

  let newProductElement=createCartProduct(title, price, imgSrc);
  let element=document.createElement('div');
  element.innerHTML=newProductElement;
  let cartBasket=document.querySelector('.cart-content');
  cartBasket.append(element);
  loadContent();
}

function createCartProduct(title, price, imgSrc) {
  return `<div class="cart-box flex gap-3 justify-around items-center border-b-2">
  <img src="${imgSrc}" class="cart-img w-20 h-20 rounded">
  <div class="detail-box m-3 text-sm">
    <div class="cart-box-title text-rose-700 font-semibold p-2">${title}</div>
    <div class="price-box flex justify-between p-2 gap-3">
      <p class="cart-price">${price}</p>
      <p class="cart-amt text-rose-700">${price}</p>
    </div>
    <input type="number" class="cart-quantity w-10 border-2 m-2" value="1">
  </div>
  <ion-icon name="trash-outline" class="cart-remove"></ion-icon>

</div>`;
}

function updateTotal(){
  const cartItems= document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector(".total-price");

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("MRP:",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="MRP:"+(price*qty);

  });

  totalValue.innerHTML='MRP:'+total;

  //add prod count in icon
  const cartCount=document.getElementById("count");
  let count=itemList.length;
  cartCount.innerHTML=count;

  if(count==0){
    cartCount.style.display='none';
  }
  else{
    cartCount.style.display='block';
  }

}
