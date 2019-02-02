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
    destroy.addEventListener('click',function(){
        const deletTask = deleteItem.bind(this);
        deletTask(editItem);
        //deleteItem.bind(this)(editItem);
    });
    editItem.addEventListener('click',editItemvalue);
}
function deleteItem(editItem){
    console.log(this)
    if(!editItem.checked){
       document.querySelector('.count').textContent = --itemCount;
    }
    this.parentNode.remove();
}

function editItemvalue(){
     console.log(this.checked,"hello");
    document.querySelector('.clear').style.display = 'block';
    if(this.checked){
        document.querySelector('.count').textContent = --itemCount; 
    } else{
        document.querySelector('.count').textContent = ++itemCount;
    }
    this.parentNode.classList.toggle('selected'); 
    if(itemCount === 0){
        document.querySelector('.count').textContent = '';
          
    }
    document.querySelector('.clear').addEventListener('click',clearItemList);
}
function clearItemList(){
   document.querySelectorAll('.selected').forEach((item) =>{
        item.remove();
   }); 
    if(itemCount === 0){
       document.getElementById('footer').style.display ='none'; 
    } 
}
function removeEvent(){
    if(itemCount === 0){
        document.querySelector('.toggle').removeEventListener('click',editItemvalue);
    }
}