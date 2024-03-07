
let todos =  ["Demo todo"];

function renderTodos() {
    //todoList holds ul
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i]; 
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="text" value="${todo}" id="editInput${i}">
            <button class="deleteBtn">Delete</button>
        `;
        todoList.appendChild(li);
    
        // const editBtn = li.querySelector('.editBtn');
        const deleteBtn = li.querySelector('.deleteBtn');
        // editBtn.addEventListener('click', () => editTodo(i));
        deleteBtn.addEventListener('click', () => deleteTodo(i));
    }
}
 


function addTodo() {
    const todoInput = document.getElementById('todoInput');
    console.log( todoInput)
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        todos.push(todoText);
        console.log(todos)
        saveTodosToLocalStorage(); 
        renderTodos();
        todoInput.value = '';
    }
}

// function editTodo(i) {
//     const editInput = document.getElementById(`editInput${i}`);
//     todos[i] = editInput.value.trim();
//     saveTodosToLocalStorage();
//     renderTodos();
// }


    function deleteTodo(i) {
        const updatedTodos = [];
        for (let index = 0; index < todos.length; index++) {
            if (index !== i) {
                updatedTodos.push(todos[index]);
            }
        }
        todos = updatedTodos;
        saveTodosToLocalStorage(); 
        renderTodos();
    }
    


function saveTodosToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

document.getElementById('addTodoBtn').addEventListener('click', addTodo);

function loadTask(){
    todos = JSON.parse(localStorage.getItem('todos'));
    console.log(todos)
    renderTodos();
}
window.onload = saveTodosToLocalStorage();
window.onload = loadTask();

