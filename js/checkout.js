var checkoutBagItems = []
var parentElement = document.getElementById('checkout-header')
var divChild = document.getElementById("firstChild")
var subtotal = 0;
var orderTotal = 0;
var orders = []
loadBagItems();
loadCheckoutItems()

function loadCheckoutItems() {
    for (var i = 0; i < checkoutBagItems.length; i++) {
        var checkoutElement = document.createElement('div')
        checkoutElement.className = "checkout"
        var checkoutChild1 = document.createElement('div')
        checkoutChild1.className = "checkout-child-1"
        var checkoutChild2 = document.createElement('div')
        checkoutChild2.className = "checkout-child-2"
        var imgElement = document.createElement('img')
        imgElement.style.width = "210px"
        imgElement.style.height = "210px"
        imgElement.src = checkoutBagItems[i].urllink;
        var orderDiv = document.createElement('div')
        orderDiv.className = "order-details"
        var aElement = document.createElement("a")
        aElement.className = "desc"
        aElement.innerHTML = checkoutBagItems[i].desc
        var colorDiv = document.createElement('div')
        colorDiv.innerHTML = "Color : " + checkoutBagItems[i].color
        orderDiv.appendChild(aElement)
        orderDiv.appendChild(colorDiv)
        checkoutChild2.appendChild(imgElement)
        checkoutChild2.appendChild(orderDiv)
        checkoutChild1.appendChild(checkoutChild2)
        checkoutElement.appendChild(checkoutChild1)
        //quantity header
        var quantityHeaderDiv = document.createElement('div')
        quantityHeaderDiv.className = "quantityheader"
        var quantity = document.createElement('div') 
        quantity.className = "quantity"
        quantity.innerHTML = "Quantity"
        var quantityChild = document.createElement('div')
        quantityChild.className = "quantity-child"
        var buttonDecrease = document.createElement('button')
        buttonDecrease.className = "decrease"
        buttonDecrease.innerHTML = "-"
        var inputElement = document.createElement('input')
        inputElement.className = "quantity"
        inputElement.value = checkoutBagItems[i].quantity
        var buttonIncrease = document.createElement('button')
        buttonIncrease.className = "increase"
        buttonIncrease.innerHTML = "+"
        quantityChild.appendChild(buttonDecrease)
        quantityChild.appendChild(inputElement)
        quantityChild.appendChild(buttonIncrease)
        quantityHeaderDiv.appendChild(quantity)
        quantityHeaderDiv.appendChild(quantityChild)
        checkoutChild1.appendChild(quantityHeaderDiv)
        var itemPriceDiv = document.createElement('div')
        itemPriceDiv.innerHTML = checkoutBagItems[i].price
        checkoutElement.appendChild(itemPriceDiv)
        divChild.appendChild(checkoutElement)
        subtotal = subtotal + checkoutBagItems[i].price * checkoutBagItems[i].quantity
        //parentElement.insertBefore(checkoutElement,document.getElementById('place-orderid'))
    }
    updateCost()
}
function updateCost() {
     orderTotal = subtotal + 10.97
    document.getElementById('estimatedTotal').innerHTML =  orderTotal + '$'
    document.getElementById('subtotalprice').innerHTML = subtotal + '$'
}
function loadBagItems() {
    checkoutBagItems = JSON.parse(localStorage.getItem('bag'))
}
function placeOrder() {
    let ordernumber = orderNumber()
    var order = {
        items : checkoutBagItems,
        total : orderTotal,
        orderno : ordernumber,
        status : "In progress"
    }
  if(localStorage.getItem('orders')==null) {
      orders = []
      orders.push(order)
  }
  else {
      orders = JSON.parse(localStorage.getItem('orders'))
      orders.push(order)
  }

  localStorage.setItem('orders',JSON.stringify(orders))
window.location.href = "../html/orderplaced.html"
}
function orderNumber() {
    let now = Date.now().toString() // '1492341545873'
    // pad with extra random digit
    now += now + Math.floor(Math.random() * 10)
    // format
    return  [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-')
  }