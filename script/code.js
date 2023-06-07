let items = document.querySelector('.display#disp .col:first-child')
let input = document.querySelector('#input')
let order = document.querySelector('#item-sort')
let add = document.querySelector('#add-item')
let edit = document.querySelector('#edit')
let remove = document.querySelector('#remove')


let dataArray =JSON.parse(localStorage.getItem("to-Do-List"))?JSON.parse(localStorage.getItem("to-Do-List")):[];
let deleteButtons;
let editButtons;
let checkButtons;
let count=[];
let cnt=0;
// Add button
add.addEventListener('click',()=>{
    addItems(input)
    
})



//Sort button
order.addEventListener('click',()=>{
    clear()
    dataArray.sort()
    localStorage.setItem("to-Do-List",JSON.stringify(dataArray))
    output()
 })



// Remove button
function deleteItems() {
    deleteButtons= [...document.querySelectorAll('.close-btn')]
    deleteButtons.forEach((item)=>{
        item.addEventListener('click',(event)=>{
            let sPosition= deleteButton.indexOf(event.target)
            dataArray.splice(sPosition,1)
            localStorage.setItem('to-Do-List',dataArray)
            output();
        })
    })
}

//Check box
function checkBox() {
    checkButtons= [...document.querySelectorAll('.todo-checkbox')]
    checkButtons.forEach((item)=>{
        item.addEventListener('click',()=>{
            let iPosition = checkButton.indexOf(event.target)
            if (dataArray[iPosition].complete === true) {
                dataArray[iPosition].complete === false;
            } else {
                dataArray[iPosition].complete === true
            }
            output();
        })
    })
    
}
   

// Edit button
function editItem() {
    editButtons = [...document.querySelectorAll('.edit-btn')]
    editButtons.forEach((item)=>{
        let newItem= prompt('Enter new item');
        let i = editButtons.indexOf(event.target);
        dataArray[i].data = newItem;
        localStorage.setItem('to-Do-List',JSON.stringify(dataArray))
        output()
    })
    
}


// Validation and code run function
function addItems(inData) {

    if (isNaN(inData.value)){
        switch (true) {
            case inData.value.charAt(0)!=inData.value.charAt(0).toUpperCase():
                alert("The first charecter must be upper case")
                break;
            case !inData.value:
                alert("Please enter a value")
                break;
            case inData.value.length<3:
                alert("Please enter at least three charecters")
                break;
            
            default:
             
                dataArray.push({
                    id:cnt,
                    data:inData.value,
                    complete:false,
                    
                })
                console.log(dataArray);
                count.push(cnt)
                console.log(dataArray[cnt].id == cnt)
                cnt++
               
                clear()
                localStorage.setItem("to-Do-List",JSON.stringify(dataArray))
                output()
                inData.value=""
                break;
    
    
        }
        
    } else{
        alert("Please enter string values");
        clear();
    }
    
    deleteItems();
    checkBox();
    editItem();
}

// Clear function
function clear() {
    input.value=" "
    items.innerHTML=""
    
}

// Display function
function output() {
    let i=0;
    dataArray=JSON.parse(localStorage.getItem("to-Do-List"));
    dataArray.forEach(data => {
        // td.id=String(count[i]);
        items.innerHTML+=
        `
        <div class="row my-2 item-list text-center " id="${data.id}" >
            <div class="col-1 ">
            <input type="checkbox"  name="toDo" id="toDo" class="todo-checkbox aria-checked="false">
            </div>
            <div class="col-1">
                <p>${data.data}</p>
            </div>
            <div class="col-1">
                <button id="edit" class="edit-btn">Edit</button>
            </div>
            <div class="col-1">
            <button id="remove" class="close-btn" >X</button>
            </div>
                           
        </div>
        `
        
    });
    i++;
    
}