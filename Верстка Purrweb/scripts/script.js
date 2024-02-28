function showModal() {
    let modal = document.getElementById("modal");
    modal.style.opacity = "1";
    modal.style.zIndex = "4";
    modal.style.transform = "scale(1)";
}

function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.opacity = "0";
    modal.style.transform = "scale(0)";
}


setTimeout(function(){ 
    document.getElementById("cookieOpen").click(showCookie());
}, 3000);


function showCookie() {
    let modal = document.getElementById("cookie");
    modal.style.opacity = "1";
    modal.style.transform = "scale(1)";
}

function closeCookie() {
    let modal = document.getElementById("cookie");
    modal.style.opacity = "0";
    modal.style.transform = "scale(0)";
}

function showBurgerMenu() {
    let modal = document.getElementById("burgerMenu");
    modal.style.opacity = "1";
    modal.style.zIndex = "3";
    modal.style.transform = "scale(1)";
}

function closeBurgerMenu() {
    let modal = document.getElementById("burgerMenu");
    modal.style.opacity = "0";
    modal.style.transform = "scale(0)";
}

