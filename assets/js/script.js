todoMain();

function todoMain() {
  let inputElem,
  inputElem2,
  button,
  ulElem;

  getElements();
  addListeners();

  function getElements() {
   inputElem = document.getElementsByTagName
    ("input")[0];
    inputElem2 =document.getElementsByTagName
    ("input")[1];
    button = document.getElementById("addBtn")
     ulElem = document.getElementsByTagName("ul")[0];
     console.log(ulElem);
  }

  function addListeners(){
    button.addEventListener("click", addEntry, false);
  }

  function addEntry(event){
    let flag = true;

    let inputValue = inputElem.value;
    inputElem.value = "";

    let inputValue2 = inputElem2.value;
    inputElem2.value=""

    //add a new row

    let table = document.getElementById("todoTable");

    let trElem = document.createElement("tr");
    table.appendChild(trElem); //how i created a new row in table

    //checkbox cell
    let checkboxElem = document.createElement("input");

    checkboxElem.type = "checkbox";
    checkboxElem.addEventListener("click", done, false)
    let tdElem1 = document.createElement("td");
    tdElem1.appendChild(checkboxElem);
    trElem.appendChild(tdElem1)


    //to-do cell
    let tdElem2 = document.createElement("td");
    tdElem2.innerText = inputValue;
    trElem.appendChild(tdElem2);

    //Assigned-to cell
    let tdElem3 = document.createElement("td");
    tdElem3.innerText = inputValue2;
    trElem.appendChild(tdElem3);

    //delete cell
    let spanElem = document.createElement("span");
    spanElem.innerText = "delete";
    spanElem.className = "material-icons";
    spanElem.addEventListener("click", deleteItem, false);
    let tdElem4 = document.createElement("td");
    tdElem4.appendChild(spanElem);
    trElem.appendChild(tdElem4)





    // let liElem = document.createElement("li");
    // let checkboxElem = document.createElement("input");
    // checkboxElem.type="checkbox"
    // liElem.append(checkboxElem)


    // let textElem =document.createElement("span")
    // textElem.innerText = inputValue + "-" + inputValue2 ;
    // liElem.appendChild(textElem)
    // // liElem.innerText = inputValue;
    // // liElem.addEventListener("click",onclick,
    // // false);

    // let spanElem = document.createElement("span");
    // spanElem.innerText = "delete";
    // spanElem.className = "material-icons";

    // spanElem.addEventListener("click", deleteItem, false);

    // liElem.appendChild(spanElem);

    // ulElem.appendChild(liElem);

    function deleteItem(){
     trElem.remove();
    }

    function done(){
      trElem.classList.toggle("strike")
    }
  }
}
