let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
form.addEventListener("submit" , (e) =>{
  e.preventDefault();
  console.log("buton clicked!")
  formValidation();
});

let formValidation = () => {
  if(input.value === "") {
    msg.innerHTML = "Post cant be blank!";
    console.log("failure");
  } else{
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};


let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();

}; //use this function to push into data variable


let createPost = () => {
posts.innerHTML +=
`          <div>
<p>${data.text}</p>
<span class="options">
<i onClick = "editPost(this)" class="fa-solid fa-pen-to-square"></i>
<i onClick= "deletePost(this)" class="fa-solid fa-trash-can"></i>
</span>
</div>`
;
input.value = "";
}

let deletePost = (e) => {
  e.parentElement.parentElement.remove()
}

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove()


}






























































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
