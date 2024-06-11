
const passwordBox = document.getElementById("password");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTWXYZ";
const lowerCase = "abcedefghijklmnopqrstwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_-+={}[]\|?/<>";

const allChar = upperCase + lowerCase + number + symbol;

function creatPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while ( length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
   passwordBox.select();
   document.execCommand("copy");
}

// ANOTHER PROJRCT IS NOTES //


    
const creatNotes = document.querySelector(".notes-creat");
const creatBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");

function showNotes() {
    creatNotes.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", creatNotes.innerHTML);
}


creatBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable" , "true")
    img.src = "images/delete.png";
    creatNotes.appendChild(inputBox).appendChild(img);
})




creatNotes.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {

        e.target.onkeyup = function() {
            updateStorage();
        }
        // notes = document.querySelectorAll(".input-box");
        // notes.forEach(nt =>{
        //     nt.onkeyup = function() {
        //         updateStorage();
        //     }
        // })
    }
})
