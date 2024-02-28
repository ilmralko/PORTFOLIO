const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
});

let slider = document.getElementById("swiper");
for (let i = 0; i < 4; i++) {
    let div = document.createElement("div");
    div.setAttribute('class', 'swiper-slide');
    let img = document.createElement("img");
    img.style.width = "100%";
    img.style.height = "100%";
    img.setAttribute("src", `..//Yandex/images/swiper/sliderMobil${i}.png`);
    div.appendChild(img);
    slider.appendChild(div);
}
