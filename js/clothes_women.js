var item_men = document.getElementById("get_item_row-1");
var btn_show_more = document.getElementById("btn_show");
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add('open-popup');
}

function closePopup(){
    popup.classList.remove('open-popup');
}

const item_cloth_men = [
    {
        image:"../image/cloth_girl-1.jpg",
        price:"$8.59",
        namepro:"Cropped Tank Top"
    },
    {
        image:"../image/cloth_girl-2.jpg",
        price:"$8.59",
        namepro:"Cropped Tank Top"
    },
    {
        image:"../image/cloth_girl-3.jpg",
        price:"$8.59",
        namepro:"Cropped Tank Top"
    },
    {
        image:"../image/cloth_girl-4.jpg",
        price:"$8.59",
        namepro:"Cropped Tank Top"
    },
    {
        image:"../image/cloth_girl-5.jpg",
        price:"$8.59",
        namepro:"Cropped Tank Top"
    },
    {
        image:"../image/cloth_girl-6.jpg",
        price:"$8.59",
        namepro:"Cropped Tank Top"
    },
    {
        image:"../image/cloth_girl-7.jpg",
        price:"$8.59",
        namepro:"Cropped Tank Top"
    },
    {
        image:"../image/cloth_girl-8.jpg",
        price:"$8.59",
        namepro:"Cropped Tank Top"
    },
    
];

let box_item_cloth_men = '';
item_cloth_men.forEach( (item,index) => {
    if(index !== 8){
        box_item_cloth_men += `
        <div class="box-men-item">
        <div class="box-img-men">
           <a href="#">
            <img src="${item.image}" alt="">
           </a>
        </div>
        <div class="detail-men-img">
            <div class="txt-men">
                <p class="price">${item.price}</p>
                <p class="name-pro">${item.namepro}</p>
            </div>
            <div class="addcard-men">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"/><path fill="currentColor" d="M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"/><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768a384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896a448 448 0 0 1 0 896z"/></svg>
            </div>
        </div>
    </div>
        `;
    }
});
document.getElementById("get_item").innerHTML = box_item_cloth_men ;
// none item
document.getElementById("get_item_row-1").innerHTML = box_item_cloth_men;
// show more item
function show_more_men_item(){
    if(item_men.style.display !== "none"){
        item_men.style.display = "none";
        btn_show_more.style.background = "#0D74E7";
        btn_show_more.innerText = "Show More";
    }else{
        item_men.style.display = "flex";
        btn_show_more.style.background = "#EA4335";
        btn_show_more.innerText = "Show Less";
    }
}