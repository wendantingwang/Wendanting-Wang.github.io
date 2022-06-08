// navbar

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}



// thumbnail image


var thumb1 =  document.getElementById("thumb1");
var thumb1Src =  document.getElementById("thumb1").src;
var thumb2 =  document.getElementById("thumb2");
var thumb2Src =  document.getElementById("thumb2").src;
var thumb3 =  document.getElementById("thumb3");
var thumb3Src =  document.getElementById("thumb3").src;
var thumb4 =  document.getElementById("thumb4");
var thumb4Src =  document.getElementById("thumb4").src;

thumb1.addEventListener("click",function(){
    document.getElementById("mainImg").src = thumb1Src
})
thumb2.addEventListener("click",function(){
    document.getElementById("mainImg").src = thumb2Src
})
thumb3.addEventListener("click",function(){
    document.getElementById("mainImg").src = thumb3Src
})
thumb4.addEventListener("click",function(){
    document.getElementById("mainImg").src = thumb4Src
})


