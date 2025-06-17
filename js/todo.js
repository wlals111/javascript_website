const $todoForm = document.querySelector('#todo-form');
const $todoList = document.querySelector('#todo-list');
const $todoInput = document.querySelector('#todo-form input');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

// todos 렌더 함수
const renderTodos = () => {
  $todoList.textContent = '';

  todos.forEach((item) => {
    const $li = document.createElement('li');
    $li.textContent = item.text;

    const $button = document.createElement('button');
    $button.textContent = '❌';

    // 각각의 todo들에 클릭 이벤트를 달아줌
    $button.addEventListener('click', () => {
      // todos배열에서 삭제
      todos = todos.filter((todo) => todo.id !== item.id);

      saveTodos();
      renderTodos();
    });

    $todoList.appendChild($li);
    $li.appendChild($button);
  });
};

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// 폼 제출 이벤트
$todoForm.addEventListener('submit', (event) => {
  event.preventDefault(); // 새로고침 방지

  let todo = $todoInput.value;
  todoObj = { text: todo, id: Date.now() + Math.random() };
  todos.push(todoObj);

  saveTodos();
  renderTodos();

  $todoInput.value = '';
});

renderTodos();
