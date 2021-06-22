var itemsInBag = 0;
var loadedProduct
var bagItems = [];
var userSpecificBagItems = []
var quantity = 1;
loadProduct()
function loadProduct() {
loadedProduct = JSON.parse(localStorage.getItem('clickedProduct'))
document.getElementById('productName').innerHTML = loadedProduct['desc'];
document.getElementById('productPrice').innerHTML = loadedProduct['price'] + '$'
document.getElementById('productColor').innerHTML = loadedProduct.color
document.getElementById('product-img').src = loadedProduct.urllink
document.getElementById('bag').style.display='flex'
document.getElementById('bag').innerHTML = JSON.parse(localStorage.getItem('bag')).length
}
function goToCheckout() {
    window.location.href = "../html/Checkout.html"
}
function addToBag() {
    if(localStorage.getItem('bag')!=null) {
        bagItems = JSON.parse(localStorage.getItem('bag'));
    }
    loadedProduct.quantity = quantity
    bagItems.push(loadedProduct)
    document.getElementById('bag').style.display = 'flex'
   // itemsInBag++;
    document.getElementById('bag').innerHTML = bagItems.length;
    //localStorage.setItem('localuserbag',userSpecificBagItems)
    localStorage.setItem('bag',JSON.stringify(bagItems))
}
function increaseQuantity() {
    quantity++;
    document.getElementById('quantityvalue').value = quantity
    
}
function decreaseQuantity() {
    quantity--;
    document.getElementById('quantityvalue').innerHTML = quantity
}