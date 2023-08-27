var item_men = document.getElementById("show_more-row-1");
var btn_show_more = document.getElementById("btn_show");

var shoes_men = document.getElementById("show_shoes-row-2");
var btn_show_more_shoes = document.getElementById("btn_shoes");

var accesserires_men = document.getElementById("show_accesseries-row-2");
var btn_show_more_accesseries = document.getElementById("btn_accesseries");
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add('open-popup');
}

function closePopup(){
    popup.classList.remove('open-popup');
}


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

function show_more_shoes(){
    if(shoes_men.style.display !== "none"){
        shoes_men.style.display = "none";
        btn_show_more_shoes.style.background = "#0D74E7";
        btn_show_more_shoes.innerText = "Show More"
    }else{
        shoes_men.style.display = "flex";
        btn_show_more_shoes.style.background = "#EA4335";
        btn_show_more_shoes.innerText = "Show Less";
    }
}


function show_more_access(){
    if(accesserires_men.style.display !== "none"){
        accesserires_men.style.display = "none";
        btn_show_more_accesseries.style.background = "#0D74E7";
        btn_show_more_accesseries.innerText = "Show More";
    }else{
        accesserires_men.style.display = "flex";
        btn_show_more_accesseries.style.background = "#EA4335";
        btn_show_more_accesseries.innerText = "Show Less";
    }
}

const box_clothes_men = [
    {
        imgage:"../image/cloth-men-1.jpg",
        price:"$22.00",
        name_pro:"Chino Trousers",
    },
    {
        imgage:"../image/cloth-men-2.jpg",
        price:"$22.00",
        name_pro:"Chino Trousers",
    },
    {
        imgage:"../image/cloth-men-3.jpg",
        price:"$22.00",
        name_pro:"Chino Trousers",
    },
    {
        imgage:"../image/cloth-men-4.jpg",
        price:"$22.00",
        name_pro:"Chino Trousers",
    }
];
let box_item = '';
box_clothes_men.forEach( (item, index) => {
    if(index !== 4){
        box_item += 
        ` 
        <div class="box-men-item">
        <div class="box-img-men">
           <a href="#">
            <img src="${item.imgage}" alt="">
           </a>
        </div>
        <div class="txt-men">
            <p class="price">${item.price}</p>
            <p class="name-pro">${item.name_pro}</p>
        </div>
    </div>
        `;
    }
});
document.getElementById("get_item").innerHTML = box_item ;

const box_clothes_men_hid = [
    {
        imgage:"../image/cloth-men-5.jpg",
        price:"$25.00",
        name_pro:"Technical Cargo",
    },
     {
        imgage:"../image/cloth-men-6.jpg",
        price:"$25.00",
        name_pro:"Jogging Trousers",
    },
     {
        imgage:"../image/cloth-men-7.jpg",
        price:"$25.95",
        name_pro:"Jogging Trousers",
    },
     {
        imgage:"../image/cloth-men-8.jpg",
        price:"$20.95",
        name_pro:"Printed Vest",
    }
];
var box_item_two = '';
box_clothes_men_hid.forEach( (item_1, index) => {
    if(index !== 4){
        box_item_two += 
        ` 
        <div class="box-men-item">
        <div class="box-img-men">
           <a href="#">
            <img src="${item_1.imgage}" alt="">
           </a>
        </div>
        <div class="txt-men">
            <p class="price">${item_1.price}</p>
            <p class="name-pro">${item_1.name_pro}</p>
        </div>
    </div>
        `;
    }
});
document.getElementById("show_more-row-1").innerHTML = box_item_two ;


// shoes
const box_shoes_men = [
    {
        imgage:"../image/shoes-men-1.jpg",
        price:"$22.00",
        name_pro:"Chino Trousers",
    },
    {
        imgage:"../image/shoes-men-2.jpg",
        price:"$22.00",
        name_pro:"Chino Trousers",
    },
    {
        imgage:"../image/shoes-men-3.jpg",
        price:"$22.00",
        name_pro:"Chino Trousers",
    },
    {
        imgage:"../image/shoes-men-4.jpg",
        price:"$22.00",
        name_pro:"Chino Trousers",
    }
];
let box_shoes_item = '';
box_shoes_men.forEach( (item_2, index) => {
    if(index !== 4){
        box_shoes_item += 
        ` 
        <div class="box-men-item">
        <div class="box-img-men">
           <a href="#">
            <img src="${item_2.imgage}" alt="">
           </a>
        </div>
        <div class="txt-men">
            <p class="price">${item_2.price}</p>
            <p class="name-pro">${item_2.name_pro}</p>
        </div>
    </div>
        `;
    }
});
document.getElementById("get_shoes").innerHTML = box_shoes_item ;


const box_shoes_tow_hid = [
    {
        imgage:"../image/shoes-men-5.jpg",
        price:"$25.00",
        name_pro:"Technical Cargo",
    },
     {
        imgage:"../image/shoes-men-6.jpg",
        price:"$25.00",
        name_pro:"Jogging Trousers",
    },
     {
        imgage:"../image/shoes-men-7.jpg",
        price:"$25.95",
        name_pro:"Jogging Trousers",
    },
     {
        imgage:"../image/shoes-men-8.jpg",
        price:"$20.95",
        name_pro:"Printed Vest",
    }
];
var item_shoes_two = '';
box_shoes_tow_hid.forEach( (item_3, index) => {
    if(index !== 4){
        item_shoes_two += 
        ` 
        <div class="box-men-item">
        <div class="box-img-men">
           <a href="#">
            <img src="${item_3.imgage}" alt="">
           </a>
        </div>
        <div class="txt-men">
            <p class="price">${item_3.price}</p>
            <p class="name-pro">${item_3.name_pro}</p>
        </div>
    </div>
        `;
    }
});
document.getElementById("show_more-row-2").innerHTML = item_shoes_two ;


// accesserries
const box_acc_men = [
    {
        imgage:"../image/access-men-1.jpg",
        price:"$22.00",
        name_pro:"Chino Trousers",
    },
    {
        imgage:"../image/access-men-2.jpg",
        price:"$22.00",
        name_pro:"Chino Trousers",
    },
    {
        imgage:"../image/access-men-3.jpg",
        price:"$22.00",
        name_pro:"Chino Trousers",
    },
    {
        imgage:"../image/access-men-4.jpg",
        price:"$22.00",
        name_pro:"Chino Trousers",
    }
];
let box_acc_item = '';
box_acc_men.forEach( (item_4, index) => {
    if(index !== 4){
        box_acc_item += 
        ` 
        <div class="box-men-item">
        <div class="box-img-men">
           <a href="#">
            <img src="${item_4.imgage}" alt="">
           </a>
        </div>
        <div class="txt-men">
            <p class="price">${item_4.price}</p>
            <p class="name-pro">${item.name_pro}</p>
        </div>
    </div>
        `;
    }
});
document.getElementById("get_access").innerHTML = box_acc_item ;


const box_acc_tow_hid = [
    {
        imgage:"../image/access-men-5.jpg",
        price:"$25.00",
        name_pro:"Technical Cargo",
    },
     {
        imgage:"../image/access-men-6.jpg",
        price:"$25.00",
        name_pro:"Jogging Trousers",
    },
     {
        imgage:"../image/access-men-7.jpg",
        price:"$25.95",
        name_pro:"Jogging Trousers",
    },
     {
        imgage:"../image/access-men-8.jpg",
        price:"$20.95",
        name_pro:"Printed Vest",
    }
];
var item_acc_two = '';
box_acc_tow_hid.forEach( (item_5, index) => {
    if(index !== 4){
        item_acc_two += 
        ` 
        <div class="box-men-item">
        <div class="box-img-men">
           <a href="#">
            <img src="${item_5.imgage}" alt="">
           </a>
        </div>
        <div class="txt-men">
            <p class="price">${item_5.price}</p>
            <p class="name-pro">${item_5.name_pro}</p>
        </div>
    </div>
        `;
    }
});
document.getElementById("show_accesseries-row-2").innerHTML = item_acc_two ;

