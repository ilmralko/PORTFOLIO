categories = [{
    img: "images/modal/red.png",
    title: "Черный чай",
    desc: "Самый популярный в нашей стране и в европейской части мира. В Китае он известен как красный – по цвету настоя. Этот вид чая производится путем сильной ферментации (окисления). Как правило, имеет терпкий насыщенный вкус."
},
{
    img: "images/modal/green.png",
    title: "Зеленый чай",
    desc: "Наиболее популярен в Азии. Чай имеет настой золотисто-желтого цвета, а также легкий и травянистый вкус. Он подвергается минимальной ферментации. Такой тип обработки позволяет сохранить высокий уровень антиоксидантов, витаминов и минералов."
},
{
    img: "images/modal/white.png",
    title: "Белый чай",
    desc: "Особенно популярен в Китае, считается максимально полезным. Имеет светло-желтый цвет и нежный аромат. Слабоферментированный (почти не ферментированный) чай, содержащий типсы (чайные почки)."
},
{
    img: "images/modal/yellow.png",
    title: "Желтый чай",
    desc: "Считается довольно редким и чаще всего может быть приобретен только в Китае. Слабоферментированный чай из сырья высокого качества. По степени окисления находится между белым и зеленым."
},
{
    img: "images/modal/oolong.png",
    title: "Улун",
    desc: "Полуферментированный чай, занимающий среднее положение между черным и зеленым. Улуны дают настой от светло-желтого до светло-коричневого цвета, вкус насыщенный и яркий. По степени окисления делится на сильноферментированные (ближе к черному чаю) и слабоферментированные (ближе к зеленому) сорта."
},
{
    img: "images/modal/puer.png",
    title: "Пуэр",
    desc: "Постферментированный чай, который «дозревает» после обычной ферментации естественным (шен пуэр) или ускоренным (шу пуэр) образом. Окончательная ферментация происходит благодаря специальным микроорганизмам. Темные пуэры становятся красно-коричневым настоем, иногда имеют землистый привкус. Светлые пуэры дают разный настой – от желто-зеленого до светло-коричневого."
}];


// Создание категорий
let mainCategories = document.getElementById("main-categories-grid");
let i = 0;
for (category of categories) {
    let mainCategory = document.createElement("div");
    mainCategory.setAttribute("class", "main-category");

    let image = document.createElement("img");
    image.setAttribute("class", "main-categories-img");
    image.setAttribute("src", category.img);  

    let title = document.createElement("h4");
    title.innerHTML = category.title;

    let desc = document.createElement("p");
    desc.innerHTML = category.desc;

    // let buttonOpenModal = document.createElement("button");
    // buttonOpenModal.setAttribute("class", "main-btn");
    // buttonOpenModal.onclick = function() {
    //     buttonClick();
    // }
    // buttonOpenModal.innerHTML = "Подробнее";

    mainCategory.appendChild(image);
    mainCategory.appendChild(title);
    mainCategory.appendChild(desc);
    // mainCategory.appendChild(buttonOpenModal);
    mainCategories.appendChild(mainCategory);

    i++;
};


// Фотогалерея
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 2000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

let slide = document.getElementById("swiper");
for (let j = 0; j < 8; j++) {
    let div = document.createElement("div");
    div.setAttribute('class', 'swiper-slide');
    let img = document.createElement("img");
    img.style.width = "100%";
    img.style.height = "110%";
    img.setAttribute("src", `images/swiper/pic${j}.jpg`);
    div.appendChild(img);
    slide.appendChild(div);
}


// Кнопка обратной связи
function submitClick() {
  let message = "";
  let Name = document.getElementById("name").value;
  if (Name == "") {
      message = message + "Введите имя\n";
  }
  let Textarea = document.getElementById("textarea").value;
  if (Textarea == "") {
      message = message + "Напишите отзыв\n";
  }
  let Checkbox = document.getElementById("checkbox");
  if (Checkbox.checked == false) {
      message = message + "Согласитесь с условиями передачи данных";
  }
  if (message == "") {
      alert("Огромное спасибо за ваш отзыв!");
  } else {
      alert(message);
  }
}




// function arrowUp() {
//     let arrow = document.getElementById("arrowUp");
//     element.scrollIntoView({ behavior: "smooth" });
// }


// function buttonClick() {
//     for (i = 0; i < 6; i++) { 
//         let divModal = document.createElement("div");

//         let img = document.createElement("img");
//         img.setAttribute("class", "main-categories-img");
//         img.setAttribute("src", categories[i].img);

//         let buttonCloseModal = document.createElement("button");
//         buttonCloseModal.innerHTML = "Закрыть";

//         buttonCloseModal.onclick = function() {
//             closeModal();
//             };

//         divModal.appendChild(img);
//         divModal.appendChild(buttonCloseModal);
//         document.getElementById("modal").appendChild(divModal);
//         break;

        
//     };
//     showModal();

// }

// Модальное окно
// function showModal() {
//     let modal = document.getElementById("modal");
//     modal.style.opacity = "1";
//     modal.style.transform = "scale(1)";

//     // for (i = 0; i < 6; i++) {
//     //     let img = document.getElementById("modal-img");
//     //     img.setAttribute("src", categories[i].img);
//     // }

//     // for (i = 0; i < 6; i++) {
//     //     let img = document.getElementById("modal-img");
//     //     img.innerHTML = categories[i].img;
    
//     //     let title = document.getElementById("modal-title");
//     //     title.innerHTML = category.title;

//     //     let desc = document.getElementById("modal-desc");
//     //     desc.innerHTML = category.desc;
//     // }
// }

// function closeModal() {
//     let modal = document.getElementById("modal");
//     modal.style.opacity = "0";
//     modal.style.transform = "scale(0)";
// }
