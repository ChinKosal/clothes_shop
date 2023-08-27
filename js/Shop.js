let popup = document.getElementById("popup");
const sliderContainer = document.querySelector('.img-detail-sec-3');
const slides = sliderContainer.querySelectorAll('.slider__item');
const btnPrev = sliderContainer.querySelector('.btn.prev');
const btnNext = sliderContainer.querySelector('.btn.next');
let counter = 0;

function openPopup(){
    popup.classList.add('open-popup');
}

function closePopup(){
    popup.classList.remove('open-popup');
}

btnPrev.addEventListener('click', function() {
    slides[counter].classList.toggle('active');
    counter--;
    if (counter < 0) counter = slides.length - 1;
    slides[counter].classList.toggle('active');
});

btnNext.addEventListener('click', function() {
    slides[counter].classList.toggle('active');
    counter++;
    if (counter >= slides.length) counter = 0;
    slides[counter].classList.toggle('active');
});

const item_clothes = [
    {
        image:"../image/search-img-1.jpg",
        price:"$6.50</span> 50% $3.25",
        namepro:"Rog Shirt"
    },
    {
        image:"../image/search-img-2.jpg",
        price:"$6.50</span> 50% $3.25",
        namepro:"Rog Shirt"
    },
    {
        image:"../image/search-img-.jpg",
        price:"$6.50</span> 50% $3.25",
        namepro:"Rog Shirt"
    },
    {
        image:"../image/search-img-4.jpg",
        price:"$6.50</span> 50% $3.25",
        namepro:"Rog Shirt"
    }
];

let search_item = '';
item_clothes.forEach( (item,index) => {
    if(index !== 4){
        search_item += `
        <div class="box_item_search">
        <div class="img_box">
            <img src="${item.image}" alt="">
        </div>
        <div class="txt-box-search">
            <p style="margin-top: 10px;" text-decoration: "line-through;">${item.price}</p>
            <p style="margin-top: 5px;">${item.namepro}</p>
        </div>
        <div class="color-item">
            <div class="color-1" style="background-color: #0D74E7;"></div>
            <div class="color-1" style="background-color: darkmagenta;"></div>
            <div class="color-1" style="background-color: black;"></div>
        </div>
        <div class="add-item">
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17 11v6.97l-5-2.14l-5 2.14V5h6V3H7c-1.1 0-2 .9-2 2v16l7-3l7 3V11h-2zm4-4h-2v2h-2V7h-2V5h2V3h2v2h2v2z"/></svg>
            </a>
        </div>
    </div>
        `;
    };
});
document.getElementById("get_search_item").innerHTML = search_item;


