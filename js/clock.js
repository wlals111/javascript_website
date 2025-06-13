const $clock = document.querySelector('#clock');

const getClock = () => {
  const date = new Date();
  // string.padStart(2, '0') -> string의 길이가 2로 설정, 길이가 2가 아니면 앞의 공백을 0으로 채움
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  $clock.textContent = `${hours}:${minutes}:${seconds}`;
};

// 사이트에 들어오자마자 바로 시간 렌더링 -> 1초마다 바뀌게 함
getClock();
setInterval(getClock, 1000);
