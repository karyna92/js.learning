const todoForm=document.querySelector('form');
const todoInput=document.querySelector('.todo-input');
const todoList=document.querySelector('#todo-list');
let  count=0;


todoForm.addEventListener('submit', function(e){ 
    e.preventDefault();
addTodo();
})
function addTodo(){ 
    const todoText=todoInput.value.trim();
    if(todoText.length>0){ 
        createTodoElement(todoText);
        todoInput.value='';
    }
}
function createTodoElement(todoText){ 
    const todoElement=document.createElement('li');
    todoElement.classList.add('todo-list-element');
    count++;
    todoElement.innerHTML=`  <input type="checkbox" id="todo-${count}"/> 
          <label for="todo-${count}" class="custom-checkbox">
            <i class="fa-solid fa-check"></i>
            </label>
          <label for="todo-${count}" class="todo-text">${todoText} </label>
          <button class="delete-btn">
            <i class="fa-solid fa-trash-can"></i>
          </button>`
//innerHTML чи це досі актуальна практика?
const deleteBtn=todoElement.querySelector('.delete-btn');
deleteBtn.addEventListener('click',(e)=>{
e.target.closest('.todo-list-element').remove()
})
    todoList.appendChild(todoElement);
    return todoElement;
}

