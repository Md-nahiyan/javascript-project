
// selector//

const taskForm = document.querySelector(".task-form");
const taskInput = document.querySelector(".task-input");
const submit = document.querySelector(".submit");
const taskDiv = document.getElementById("task-div");
const listDiv = document.querySelector(".task");



// function createTask() {
//     let inputValue = taskInput.value;
//     taskInput.value = "";
//     // console.log(inputValue);
//     if (inputValue) {
//         // console.log(inputValue)
//     }
//     else{
//         alert("Please insert something")
//     }

//     const taskList =  document.createElement("div");
//     // const listInput = document.getElementById("list-input");
//     const inputDiv = document.createElement("div");
//     inputDiv.classList.add("w-[60%]");
//     const listInput =  document.createElement("input");

//     // list-button
//     const buttonGroup = document.createElement("div");
//     buttonGroup.classList.add("flex");
//     buttonGroup.classList.add("gap-3");
//     buttonGroup.classList.add("w-[40%]");

//     const deleteButton = document.createElement("button");
//     const editButton = document.createElement("button");

//     // delete button add
//     deleteButton.classList.add("btn-1")
//     deleteButton.innerHTML = "Delete";

//     //// edit button add
//     editButton.classList.add("Btn");
//     editButton.innerText = "Edit";


//     taskList.classList.add("tasks");
//     listInput.classList.add("list-input");
//     listInput.setAttribute("readonly", "readonly");
//     // listInput.classList.add("")
//     listInput.value += inputValue;

//     // child append //
//     taskList.appendChild(inputDiv);
//     taskList.appendChild(buttonGroup);
//     buttonGroup.appendChild(deleteButton)
//     buttonGroup.appendChild(editButton)
//     inputDiv.appendChild(listInput)
//     taskDiv.appendChild(taskList);

//     // delete button click
//     deleteButton.addEventListener("click", (e)=>{
//         e.target.parentElement.parentElement.remove();
//     })
    
//     // edit button click//

//     editButton.addEventListener("click", (e)=>{
        
//         if (e.target.innerText === "Edit") {
//             listInput.removeAttribute("readonly");
//             listInput.focus();
//             editButton.innerHTML = "Save";
//         }
//         else{
//             listInput.setAttribute("readonly", "readonly");
//             editButton.innerHTML = "Edit";
//         }
//     })

// }




function createTask() {
    let inputValue = taskInput.value;
    
    if (inputValue) {
        // console.log(inputValue); 
    }
    else{
        alert("Please insert something")
    }
    taskInput.value = "";

   

    taskDiv.innerHTML += `
    <div class="tasks" id="list-div animate-bounce">
        <div class="w-[74%]" id="task">
            <input type="text" value="${inputValue}" class="w-[60%] bg-transparent outline-none list-input"  readonly>
        </div>

        <div class="w-[26%] flex gap-5 btn-div">
            <button class="noselect btn-1" id="delete"><span class="text">Delete   
                </span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
            </button>

            <button class="Btn" id="edit">Edit 
                <svg class="svg" viewBox="0 0 512 512">
                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
            </button>                  
        </div>
    </div>
`
    // const btnDiv = document.querySelector(".btn-div");
    const deleteButton = document.querySelectorAll(".btn-1");
    
    
    const deleteButtonArray = Array.from(deleteButton);
    // delete button click
    deleteButtonArray.forEach((item) => {
        item.addEventListener("click", (e)=>{
            e.target.parentElement.parentElement.parentElement.remove();
        })
    });
    
    const editButton = document.querySelectorAll(".Btn")
    const listInput = document.querySelectorAll(".list-input");

    // const editButtonArray = Array.from(editButton);

    editButton.forEach( (item, index) =>{

        item.addEventListener("click", (e)=>{

            if (e.target.innerText === "Edit") {
                listInput[index].removeAttribute("readonly");
                listInput[index].focus();
                e.target.innerHTML = "Save";
                editButton.classList.add("Btn")
            }
            else{
                listInput[index].setAttribute("readonly", "readonly");
                e.target.innerHTML = "Edit";
            }
        })
    })
    
    // edit button click//



}


// While it may look like an array, it's actually a NodeList which doesn't have the same features as an array. Use a for loop instead

color_btns = document.querySelectorAll('#color > p'); 

for (var i = 0; i < color_btns.length; i++) {
    color_btns[i].onclick = function () { 
        for (var j = 0; j < color_btns.length; j++) {
            if(color_btns[j].classList.contains('selected')) { 
                color_btns[j].classList.remove('selected');
            }
        }
    color_btns[i].classList.add('selected'); 
    document.querySelector('#f_color').value = color_btns[i].dataset.id;
    };
}