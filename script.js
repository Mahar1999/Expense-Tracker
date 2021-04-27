// DOM elements
const expName = document.querySelector(".input__Container--Name");
const expDate = document.querySelector(".input__Container--Date");
const expAmount = document.querySelector(".input__Container--Amount");
const Addbtn = document.querySelector(".input__button");
const delbtn = document.querySelector(".delete__button");
const AddedList = document.querySelector('#AddedList');
const dateTime = document.querySelector('.dateTime');

/********************************************************************/

//console values Name,Date,Amount on click
const addItem = function () {
    // console.log(expName.value)
    // console.log(expDate.value)
    // console.log(expAmount.value)

  const markup = `  
        <tr>
            <td>${expName.value}</td>
            <td>${expDate.value}</td>
            <td>${expDate.value}</td>
            <td><button class="delete__button">Delete</button></td>
        </tr>
 `;
    expName.value=''
    expDate.value=''
    expAmount.value=''

    document.querySelector('#AddedList').insertAdjacentHTML('beforeend',markup)
 
};

/****************Event listeners************/
//AddItem button
Addbtn.addEventListener("click", addItem);

//DeleteItem button
AddedList.addEventListener('click',(e)=>{
  
    //guard tag if no delete 
    if(!e.target.classList.contains('delete__button')) return

    const parent=e.target.closest('tr')
    AddedList.removeChild(parent)
})

dateTime.textContent = new Date().toLocaleDateString()