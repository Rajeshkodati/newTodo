const inputValue = document.querySelector('.todo-value');
var Enter_key =13;
inputValue.addEventListener('keypress',createListItem);
var itemCount = 0;

function createListItem(event){
     
    if(event.charCode === Enter_key){
         if(!inputValue.value.trim()){
            alert('Enter text');
        }
        else{
            addItems();
            
            document.querySelector('#footer').style.display = 'block';
            inputValue.value ='';
        }
          }
}
function addItems(){
    const listItem = document.createElement('li');
    const addDiv = document.createElement('div');
    const destroy = document.createElement('button');
    const editItem = document.createElement('input');
    const label = document.createElement('label');
    addDiv.classList.add('view');
    editItem.classList.add('toggle');
    editItem.setAttribute('type','checkbox');
    destroy.classList.add('destroy');
    destroy.textContent = 'del';
    label.textContent = inputValue.value;
    console.log(document.querySelector('.count').innerHTML = ++itemCount);
    addDiv.appendChild(editItem);
    addDiv.appendChild(label);
    addDiv.appendChild(destroy);
    listItem.appendChild(addDiv);
    document.querySelector('.todo-list').appendChild(listItem);
    destroy.addEventListener('click',deleteItem)
    addDiv.addEventListener('dblclick',function(){
    const editInput = document.createElement('input');
    editItem.style.display = 'none';
    destroy.style.display = 'none';
    editInput.setAttribute('type','text');
    editInput.classList.add('edit-input')
    addDiv.appendChild(editInput);
    editInput.addEventListener('blur',function(){
    label.innerHTML = this.value;
    this.style.display ='none';
    editItem.style.display = 'block';
    destroy.style.display = 'block';
     });
    
 });
//  document.querySelector('.complete').addEventListener('click',function(){
//     addDiv.style.display ='none';
//  });
editItem.addEventListener('click',editItemvalue);
}
function deleteItem(){
    document.querySelector('.count').textContent = --itemCount;
    this.parentNode.remove();
}

function editItemvalue(){
    document.querySelector('.clear').style.display = 'block';
    document.querySelector('.count').textContent = --itemCount;
    document.querySelector('.view').classList.toggle('selected')
    if(itemCount === 0){
        document.querySelector('.count').textContent = '';
          removeEvent();
    }
    document.querySelector('.clear').addEventListener('click',clearItemList);
}
function clearItemList(){
   console.log(document.querySelector('.selected').remove());
}
function removeEvent(){
    if(itemCount === 0){
        document.querySelector('.toggle').removeEventListener('click',editItemvalue);
    }
}