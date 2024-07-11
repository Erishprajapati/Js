document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const todosList = document.getElementById('todos');
  
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
  
    if (todos.length > 0) {
      todos.forEach((todo, index) => addTodoToList(todo, index + 1));
    }
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const todoText = input.value.trim();
      if (todoText) {
        todos.push({ text: todoText, completed: false });
        addTodoToList({ text: todoText, completed: false }, todos.length);
        localStorage.setItem('todos', JSON.stringify(todos));
        input.value = '';
      }
    });
  
    function addTodoToList(todo, index) {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="radio" class="complete-todo" ${todo.completed ? 'checked' : ''}>
        <span class="todo-text ${todo.completed ? 'completed' : ''}">${index}. ${todo.text}</span>
      `;
      li.addEventListener('click', (e) => {
        if (e.target.tagName === 'INPUT') {
          toggleTodoCompletion(index - 1);
        }
      });
      li.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        removeTodoFromList(index - 1);
      });
      todosList.appendChild(li);
    }
  
    function toggleTodoCompletion(index) {
      todos[index].completed = !todos[index].completed;
      localStorage.setItem('todos', JSON.stringify(todos));
      todosList.innerHTML = '';
      todos.forEach((todo, index) => addTodoToList(todo, index + 1));
    }
  
    function removeTodoFromList(index) {
      todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(todos));
      todosList.innerHTML = '';
      todos.forEach((todo, index) => addTodoToList(todo, index + 1));
    }
  });
  