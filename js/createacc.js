
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var date = document.getElementById("date");
var country = document.getElementById("country");
var province = document.getElementById("province");
var btnAdd = document.getElementById("btn-add");
// btnAdd.style.display = "none";
// btnAdd.style.display = "block";
let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add('open-popup');
}

function closePopup(){
    popup.classList.remove('open-popup');
}


var tbl = document.getElementById("table_data");
var item_list = [
    {
        "fname":"Chin","lname":"Kosal","phone":"0887683082","email":"nang82@gmail.com",
        "date":"01/02/2003","country":"Cambodia","pro":"Kompong Thom"
    },
];

function getItem(){
    var txt = `
        <tr>
            <th>FName</th>
            <th>LName</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Data</th>
        </tr>    
    `;
    for(i in item_list){
        txt += `
            <tr>
                <td>${item_list[i]['fname']}</td>
                <td>${item_list[i]['lname']}</td>
                <td>${item_list[i]['phone']}</td>
                <td>${item_list[i]['email']}</td>
                <td>${item_list[i]['date']}</td>
            </tr>
        `;
    }
    tbl.innerHTML = txt ;
};
getItem();

// add item
document.getElementById("btn-add").addEventListener("click",function(){
      item_list.push(
        {
            "fname":fname.value,"lname":lname.value,"phone":phone.value,
            "date":date.value,"email":email.value
        }
      )
    console.log("hello");
    // btnAdd.style.display = "block";
    // btnAdd.style.display = "none";
    getItem();
});