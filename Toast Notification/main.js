



// const toastBox = document.getElementById("toast-box");
// const successMsg =  '<i class="fa-solid fa-square-check"></i> Sucessfully submitted';
// const errorMsg =  '<i class="fa-solid fa-rectangle-xmark"></i> Please fixed the error';
// const invalidMsg =  '<i class="fa-solid fa-circle-exclamation"></i> invalid input, check agin';
 
// function showMsg(msg) {
//     let toasts = document.createElement("div");
//     toasts.classList.add("toast");
//     toasts.innerHTML = msg;
//     toastBox.appendChild(toasts);

//     if (msg.includes('error')) {
//         toasts.classList.add('error')
//     }
//     else if (msg.includes('invalid')) {
//         toasts.classList.add('invalid')
//     }
// }

const toastBOx = document.getElementById("toast-box");

const successMsg = ' <i class="fa-solid fa-square-check"></i> Succsesfully Submitted';
const errorMsg = ' <i class="fa-solid fa-rectangle-xmark"></i> Please fixed the error';
const invalidMsg = ' <i class="fa-solid fa-circle-exclamation"></i> invalid input, check agin';

function showMsg(msg)  {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBOx.appendChild(toast);
    
    if (msg.includes('error')) {
        toast.classList.add('error');
    }
    else if (msg.includes('invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout( ()=> {
        toast.remove();
    },5000);
}
