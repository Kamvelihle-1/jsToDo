let items = document.querySelector('.display ')
let input = document.querySelector('#input')
let order = document.querySelector('#item-sort')
let add = document.querySelector('#add-item')
let edit = document.querySelector('#edit')
let remove = document.querySelector('#remove')
let check = document.querySelector('#toDo')
let td=document.querySelector('.item-list')
let content = document.querySelector('p')

let dataArray =[];
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
    output(dataArray)
 })

//  Line through the next
check.addEventListener('change',()=>{
    check.setAttribute("aria-checked", check.checked.toString());
    if (check.ariaChecked) {
        content.style="text-decoration: line-through";
        console.log(content.innerText);
    }
})


// Remove button
// remove.addEventListener('click',()=>{
//     console.log(td.id);
//     let newArray=dataArray.filter((i)=>{
//         return dataArray.indexOf(i) != td.id
//     })
//     console.log(newArray);
//     td.remove
//     output(newArray)
// })

// Edit button
// edit.addEventListener('click',()=>{
//     console.log(dataArray);
//     input.value=""
//     dataArray[eval(td.id)]=input.value
    
// })

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
             
                dataArray.push(inData.value)
                console.log(dataArray);
                count.push(cnt)
                cnt++
                clear()
                localStorage.setItem("to-Do-List",JSON.stringify(dataArray))
                output(dataArray)
                inData.value=""
                break;
    
    
        }
        
    } else{
        alert("Please enter string values");
        clear();
    }
    
    
}

// Clear function
function clear() {
    input.value=" "
    items.innerHTML=""
}
// Display function
function output(x) {
    let i=0;
    x=JSON.parse(localStorage.getItem("to-Do-List"));
    x.forEach(data => {
        // td.id=String(count[i]);
        items.innerHTML+=
        `
        <div class="row my-2 item-list " >
            <div class="col-1 ">
                <input type="checkbox" name="toDo" id="toDo" aria-checked="false">
            </div>
            <div class="col-1">
                <p>${data}</p>
            </div>
            <div class="col-1">
                <button id="edit">Edit</button>
            </div>
            <div class="col-1">
                <button id="remove" >X</button>
            </div>
                           
        </div>
        `
        
    });
    i++;
    
}