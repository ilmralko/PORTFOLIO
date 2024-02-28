let data = [
    {
        pos: 'Slide 1',
        name: '#ffffff',
        desk: 'white',
    },
    {
        pos: 'Slide 2',
        name: '#ff0000',
        desk: 'red',
    },
    {
        pos: 'Slide 3',
        name: '#ffa500',
        desk: 'orange',
    },
    {
        pos: 'Slide 4',
        name: '#ffff00',
        desk: 'yellow',
    },
    {
        pos: 'Slide 5',
        name: '#008000',
        desk: 'green',
    },
    {
        pos: 'Slide 6',
        name: '#00ffff',
        desk: "aqua",
    },
    {
        pos: 'Slide 7',
        name: '#0000ff',
        desk: 'blue',
    },
    {
        pos: 'Slide 8',
        name: '#800080',
        desk: 'purple',
    },
    {
        pos: 'Slide 9',
        name: '#a52a2a',
        desk: 'brown',
    },
    {
        pos: 'Slide 10',
        name: '#000000',
        desk: 'black',
    },
];


let slider = document.getElementById("slider");
for (let i = 0; i < 10; i++) {
    let divSlide = document.createElement("div");
    divSlide.setAttribute('class', 'swiper-slide');
    let img = document.createElement("img");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.backgroundColor = data[i].desk;
    let span = document.createElement("span");
    span.setAttribute('class', 'slider-span');
    span.innerHTML = data[i].pos;
    divSlide.appendChild(img);
    divSlide.appendChild(span);
    slider.appendChild(divSlide);
}


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 800,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
}
);
