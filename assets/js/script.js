
// build button of submit event listener
// form validation so that either submission is a success or failure
// if success(form not empty) create functions
// if failure error message will be thrown

let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textArea = document.getElementById("textArea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");



form.addEventListener("submit" , (e) => {


  formValidation()
  e.preventDefault();
});


let formValidation = () => {
  if(textInput.value == "") {
    console.log('failure');
    msg.innerHTML = "task cant be blank";
  } else {
    console.log('success');
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss" , "modal");
    add.click();

    (()=>{
      add.setAttribute("data-bs-dismiss" , "");
    }) ();

  }
};


let data = [];


let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textArea.value,
  });

  localStorage.setItem("data" , JSON.stringify(data));

  console.log(data);
  createTasks();
};


let createTasks = () => {
  tasks.innerHTML += `
  <div>
  <span class="fw-bold">${data.text}</span>
  <span class="small text-secondary">${data.date}</span>
  <p>${data.description}</p>
  <span class="options">
    <i onClick = "editTask(this)"  data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-pen-to-square"></i>
    <i onClick = "deleteTask(this)" class="fa-solid fa-trash-can"></i>
  </span>
</div>
`;

resetForm()
};


let deleteTask = (e) => {
  e.parentElement.parentElement.remove();

}


let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;
  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textArea.value =  selectedTask.children[2].innerHTML;

  selectedTask.remove();
}

let resetForm = () =>{
  textInput.value = "";
  dateInput.value = "";
  textArea.value =  "";
}





// const song_times_1 = [
//   {title:"stairway to heaven" ,
//     time: "8:05"},
//   {title:"stairway heaven" ,
//     time: "8:45"}
// ]

// const splitter = song_times_1[0].time.split(':');
// console.log(splitter);




















































// todoMain();

// function todoMain() {
//   let inputElem,
//   inputElem2,
//   button,
//   selectElem;

//   getElements();
//   addListeners();

//   function getElements() {
//    inputElem = document.getElementsByTagName
//     ("input")[0];
//     inputElem2 =document.getElementsByTagName
//     ("input")[1];
//     button = document.getElementById("addBtn");
//     selectElem = document.getElementById("categoryFilter");
//   }

//   function addListeners(){
//     button.addEventListener("click", addEntry, false)
//     ;
//     selectElem.addEventListener("change", filterEntries, false);

//   }

//   function addEntry(event){
//     let flag = true;

//     let inputValue = inputElem.value;
//     inputElem.value = "";

//     let inputValue2 = inputElem2.value;
//     inputElem2.value=""

//     //add a new row

//     let table = document.getElementById("todoTable");

//     let trElem = document.createElement("tr");
//     table.appendChild(trElem); //how i created a new row in table

//     //checkbox cell
//     let checkboxElem = document.createElement("input");

//     checkboxElem.type = "checkbox";
//     checkboxElem.addEventListener("click", done, false)
//     let tdElem1 = document.createElement("td");
//     tdElem1.appendChild(checkboxElem);
//     trElem.appendChild(tdElem1)


//     //to-do cell
//     let tdElem2 = document.createElement("td");
//     tdElem2.innerText = inputValue;
//     trElem.appendChild(tdElem2);

//     //Assigned-to cell
//     let tdElem3 = document.createElement("td");
//     tdElem3.innerText = inputValue2;
//     trElem.appendChild(tdElem3);

//     //delete cell
//     let spanElem = document.createElement("span");
//     spanElem.innerText = "delete";
//     spanElem.className = "material-icons";
//     spanElem.addEventListener("click", deleteItem, false);
//     let tdElem4 = document.createElement("td");
//     tdElem4.appendChild(spanElem);
//     trElem.appendChild(tdElem4)





//     // let liElem = document.createElement("li");
//     // let checkboxElem = document.createElement("input");
//     // checkboxElem.type="checkbox"
//     // liElem.append(checkboxElem)


//     // let textElem =document.createElement("span")
//     // textElem.innerText = inputValue + "-" + inputValue2 ;
//     // liElem.appendChild(textElem)
//     // // liElem.innerText = inputValue;
//     // // liElem.addEventListener("click",onclick,
//     // // false);

//     // let spanElem = document.createElement("span");
//     // spanElem.innerText = "delete";
//     // spanElem.className = "material-icons";

//     // spanElem.addEventListener("click", deleteItem, false);

//     // liElem.appendChild(spanElem);

//     // ulElem.appendChild(liElem);

//     function deleteItem(){
//      trElem.remove();
//     }

//     function done(){
//       trElem.classList.toggle("strike")
//     }
//   }

//   // function filterEntries(){

//   //   let rows = document.getElementsByTagName("tr");

//   //   for(let i = 0; i < rows.length; i++) {

//   //     let category = rows[i].getElementsByTagName("td")[2].innerText;
//   //     if(category == selectElem.value) {
//   //       row.style.display = "";
//   //     } else {
//   //       row.style.display = "none"
//   //     }
//   //   }
//   // }

//   // //  function filterEntries(){

//   // //   let rows = document.getElementsByTagName("tr");

//   // //   Array.from(rows).forEach((row , index) =>{
//   // //     if(index==0){
//   // //       return;
//   // //     }

//   // //     let category = row.getElementsByTagName("td")[2].innerText;
//   // //     if(category == selectElem.value){
//   // //       row.style.display = "";
//   // //     } else {
//   // //       row.style.display = "none";
//   // //     }
//   // //   })
//   // //  }

//   function filterEntries() {

//     let selection = selectElem.value;

//     if (selection == "") {

//       let rows = document.getElementsByTagName("tr");

//       Array.from(rows).forEach((row, index) => {
//         row.style.display = "";
//       });

//     } else {
//       let rows = document.getElementsByTagName("tr");

//       Array.from(rows).forEach((row, index) => {
//         if (index == 0) {
//           return;
//         }

//         let category = row.getElementsByTagName("td")[2].innerText;
//         if (category == selectElem.value) {
//           row.style.display = "";
//         } else {
//           row.style.display = "none";
//         }
//       });
//     }


//   }

// }
