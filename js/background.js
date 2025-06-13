const $body = document.querySelector('body');

const imgs = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

// 랜덤 img 가져오기
const randomImg = imgs[Math.floor(Math.random() * imgs.length)];

// img태그 추가 + src속성
const $img = document.createElement('img');
$img.setAttribute('src', `./img/${randomImg}`);

// body태그 안에 img태그 삽입
$body.appendChild($img);
