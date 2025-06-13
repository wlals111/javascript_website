const $loginInput = document.querySelector('#login-form input');
const $loginForm = document.querySelector('#login-form');
const $greeting = document.querySelector('#greeting');

const USERNAME_KEY = 'username';

// 제출했을 때 실행되는 함수
const onLoginSubmit = (event) => {
  event.preventDefault(); // 새로고침 방지
  const username = $loginInput.value;

  // 제출했을 때 form태그 사라지게 함
  $loginForm.classList.add('hidden');

  // localstorage를 사용해서 username 저장
  localStorage.setItem(USERNAME_KEY, username);

  paintGreeting(username);
};

// 유저 이름을 렌더링 하는 함수
const paintGreeting = (username) => {
  $greeting.classList.remove('hidden');
  $greeting.textContent = `Hello ${username}`;
};

// localstorage에 저장된 value값 꺼내옴
const savedUsername = localStorage.getItem(USERNAME_KEY);

// localstorage에 저장된 이름이 없으면 / 있으면
if (savedUsername === null) {
  // 폼태그 그대로 보여줌
  $loginForm.classList.remove('hidden');
  $loginForm.addEventListener('submit', onLoginSubmit);
} else {
  // h1 보여줌
  paintGreeting(savedUsername);
}
