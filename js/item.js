var all_item = document.getElementById("show-all-item");
var btn_all_item = document.getElementById("btn_shoes");
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add('open-popup');
}

function closePopup(){
    popup.classList.remove('open-popup');
}

function show_more_item(){
    if(all_item.style.display !== "none"){
        all_item.style.display = "none";
        btn_all_item.style.background = "#0D74E7";
        btn_all_item.innerText = "Show more";
    }else{
        all_item.style.display = "block";
        btn_all_item.style.background = "#EA4335";
        btn_all_item.innerText = "Show less";
    }
}