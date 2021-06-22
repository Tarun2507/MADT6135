
var products = [
    {
        upc : 3587667,
        price : 6,
        type :"Clothing",
        desc : "George men's short Sleeved Crown neck",
        color : "black",
        urllink : "https://i5.walmartimages.ca/images/Thumbnails/023/996/815243023996.jpg"
    },
    {
        upc : 358766347,
        price : 6,
        type :"Clothing",
        desc : "George men's short Sleeved Crown neck",
        color : "black",
        urllink : "https://i5.walmartimages.ca/images/Thumbnails/023/996/815243023996.jpg"
    },
    {
        upc : 3587667,
        price : 6,
        type :"Clothing",
        desc : "Forcefield Men's Safety Long Sleeve T-shirt",
        color : "black",
        urllink : "https://i5.walmartimages.ca/images/Enlarge/251/026/999999-57688251026.jpg"
    },
    {
        upc : 3587667,
        price : 6,
        type :"Clothing",
        desc : "Genuine Dickies Long Sleeve Button Work Shirt",
        color : "black",
        urllink : "https://i5.walmartimages.ca/images/Enlarge/008/453/6000199008453.jpg"
    },
    {
        upc : 358766347,
        price : 6,
        type :"Clothing",
        desc : "Forcefield Men's Safety T-Shirt",
        color : "black",
        urllink : "https://i5.walmartimages.ca/images/Thumbnails/012/8_1/999999-57688250128_1.jpg"
    },
    {
        upc : 3587667,
        price : 6,
        type :"Clothing",
        desc : "George men's short Sleeved Crown neck",
        color : "black",
        urllink : "https://i5.walmartimages.ca/images/Thumbnails/023/996/815243023996.jpg"
    },
    {
        upc : 358766347,
        price : 6,
        type :"Clothing",
        desc : "Forcefield Men's Safety T-Shirt",
        color : "black",
        urllink : "https://i5.walmartimages.ca/images/Large/252/023/999999-57688252023.jpg"
    },
    {
        upc : 358766347,
        price : 6,
        type :"Clothing",
        desc : "Genuine Dickies Long Sleeve Button Work Shirt",
        color : "black",
        urllink : "https://i5.walmartimages.ca/images/Enlarge/008/453/6000199008453.jpg"
    },
    {
        upc : 734374734,
        price:  2.77,
        type:"Grocceries",
        desc : "Great Value Large Eggs",
        urllink : "https://i5.walmartimages.ca/images/Thumbnails/924/227/6000197924227.jpg"
    },
    {
        upc : 358766347,
        price : 6,
        type :"Clothing",
        desc : "Traffic Safety Sash",
        color : "black",
        urllink : "https://i5.walmartimages.ca/images/Enlarge/001/514/6000201001514.jpg"
    },
    {
        upc : 358766347,
        price : 6,
        type :"Clothing",
        desc : "Athletic Works Men's Fleece Crew Neck",
        color : "black",
        urllink : " https://i5.walmartimages.ca/images/Enlarge/165/642/6000199165642.jpg"
    },
   
    {
        upc : 734374734,
        price:  2.77,
        type:"Grocceries",
        desc : "Great Value Large Eggs",
        urllink : "https://i5.walmartimages.ca/images/Thumbnails/924/227/6000197924227.jpg"
    },
    {
        upc : 734374734,
        price:  2.77,
        type:"Grocceries",
        desc : "Sealtest skimmed milk",
        urllink : "https://i5.walmartimages.ca/images/Thumbnails/487/617/6000201487617.jpg"
    },
    {
        upc : 734374734,
        price:  2.77,
        type:"Grocceries",
        desc : "Astro original Yogurt",
        urllink : "https://i5.walmartimages.ca/images/Thumbnails/075/015/999999-Main_6820075015.jpg"
    },
    {
        upc : 734374734,
        price:  2.77,
        type:"Grocceries",
        desc : "Sealtest Chocolate milk",
        urllink : "https://i5.walmartimages.ca/images/Thumbnails/083/507/6000202083507.jpg"

    },
    {
        upc : 734374734,
        price:  2.77,
        type:"Grocceries",
        desc : "Great Value Large Butter",
        urllink : "https://i5.walmartimages.ca/images/Thumbnails/650/701/6000200650701.jpg"

    },
    {
        upc : 734374734,
        price:  2.77,
        type:"Grocceries",
        desc : "Great Value Large Butter",
        urllink : "https://www.walmart.ca/en/ip/forcefield-mens-safety-t-shirt-orange/6000201355156"

    },
 
    {
        upc : 734374734,
        price:  2.77,
        type:"Grocceries",
        desc : "TG cream sour original",
        urllink : "https://i5.walmartimages.ca/images/Thumbnails/375/648/6000200375648.jpg"

    },
    {
        upc : 734374734,
        price:  2.77,
        type:"Grocceries",
        desc : "Great Value old cheddar cheese",
        urllink : "https://i5.walmartimages.ca/images/Thumbnails/014/494/627735014494.jpg"

    },
    {
        upc : 734374734,
        price:  2.77,
        type:"Grocceries",
        desc : "Great Value Pizza Mozrella cheese",
        urllink : "https://i5.walmartimages.ca/images/Thumbnails/514/482/6000202514482.jpg"

    },

]
//localStorage.setItem('products',JSON.stringify(products))
//localStorage.clear()
loadProducts();
function loadProducts() {
var localProducts = JSON.parse(localStorage.getItem("products") || "[]");
var element = document.getElementById('catProds')
for(var i=0;i<localProducts.length;i++) {
    if(localProducts[i].type == localStorage.getItem('productType')) {
    var el = document.createElement("a");
    el.className = "product"
    el.id="pid"
    el.href="../html/detailspage.html"
    var imgel = document.createElement("img")
    imgel.style.width = "148px"
    imgel.style.height = "148px"
    imgel.className = "product-image"
    imgel.src = localProducts[i].urllink
    var divel = document.createElement("div")
    divel.className = "product-price-wrapper"
    var spanel = document.createElement('span')
    spanel.id = "price"
    spanel.className = "product-price" 
    spanel.innerHTML = localProducts[i].price + "$"
    var pel = document.createElement("p")
    pel.className = "product-description"
    pel.innerHTML = localProducts[i].desc
    divel.appendChild(spanel)
    divel.appendChild(pel)
    el.appendChild(imgel)
    el.appendChild(divel)
    element.appendChild(el)
    divel.addEventListener("click", navigateToDetailsPage(localProducts[i]));
    }
   
}
document.getElementById('bagcount').style.display='flex'

document.getElementById('bagcount').innerHTML = JSON.parse(localStorage.getItem('bag')).length
}

function navigateToDetailsPage(clickedProduct) {
localStorage.setItem("clickedProduct",JSON.stringify(clickedProduct))
//window.location.href="../html/detailspage.html"
}