const $body = document.querySelector('body');

const imgs = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

// 랜덤 img 가져오기
const randomImg = imgs[Math.floor(Math.random() * imgs.length)];

// 배경 스타일 설정
document.body.style.backgroundImage = `url(../img/${randomImg})`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backdropFilter = 'blur(2px)';
