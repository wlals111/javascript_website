const API_KEY = 'fb87abf4d6b0150ef23e81a0336040b1';

// api 호출 함수
const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const $weather = document.querySelector('#weather');

    // 옵셔널 체이닝과 null 병합 연산자로 화면 렌더링
    $weather.textContent = `국가 : ${
      data.sys?.country ?? '알 수 없음'
    } / 지역 : ${data.name ?? '알 수 없음'} / 온도 : ${
      data.main?.temp ?? '?'
    } °C / 날씨 : ${data.weather?.[0]?.description ?? '알 수 없음'}`;
  } catch (error) {
    alert('날씨 정보를 불러오지 못했습니다 😓');
    console.log(error);
  }
};

// 위치 불러오기 성공했을 때 함수
const successFunc = (position) => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`;

  getData(url);
};

// 위치 불러오기 실패했을 때 함수
const errorFunc = () => {
  alert('위치 정보를 불러오지 못했습니다 😓');
};

navigator.geolocation.getCurrentPosition(successFunc, errorFunc);
