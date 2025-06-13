const quotes = [
  {
    quote:
      '가장 큰 영광은 한 번도 실패하지 않음이 아니라, 실패할 때마다 다시 일어서는 데 있다.',
    author: '공자',
  },
  {
    quote: '성공은 열심히 준비하고 기다리는 사람에게 찾아온다.',
    author: '토마스 에디슨',
  },
  {
    quote: '나는 실패한 게 아니라, 잘 되지 않는 방법을 1만 가지 찾은 것이다.',
    author: '토마스 에디슨',
  },
  {
    quote: '천재는 1%의 영감과 99%의 노력으로 이루어진다.',
    author: '토마스 에디슨',
  },
  {
    quote: '고통 없이는 얻는 것도 없다.',
    author: '벤자민 프랭클린',
  },
  {
    quote: '당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 믿는 대로 될 것이다.',
    author: '헨리 포드',
  },
  {
    quote:
      '행동이 반드시 행복을 가져오지는 않지만, 행복한 사람은 반드시 행동한다.',
    author: '벤자민 디즈레일리',
  },
  {
    quote: '가장 어두운 밤도 끝나고 아침이 온다.',
    author: '빅토르 위고',
  },
  {
    quote: '우리는 오늘 걷지 않으면 내일은 뛰어야 한다.',
    author: '박지성',
  },
  {
    quote: '기회는 일어나는 것이 아니라 만들어내는 것이다.',
    author: '크리스 그로서',
  },
  {
    quote: '두려움에 맞서라. 그리고 앞으로 나아가라.',
    author: '에이브러햄 링컨',
  },
  {
    quote: '나는 내가 더 노력할수록 운이 더 좋아진다는 것을 발견했다.',
    author: '토마스 제퍼슨',
  },
  {
    quote:
      '할 수 있다고 믿는 사람은 그렇게 되고, 할 수 없다고 믿는 사람도 그렇게 된다.',
    author: '헨리 포드',
  },
  {
    quote: '실패는 성공의 어머니다.',
    author: '찰스 케터링',
  },
  {
    quote: '노력은 배신하지 않는다.',
    author: '이치로',
  },
];

const $quote = document.querySelector('#quote span:first-child');
const $author = document.querySelector('#quote span:last-child');

// console.log(quotes.length);
// console.log(Math.floor(Math.random() * quotes.length));

// '0 ~ quotes.length-1' 사이의 정수를 랜덤으로 뽑으면서 quotes배열의 인덱스에 맞는 명언 가져옴
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

// 명언 내용
$quote.textContent = todayQuote.quote;
// 저자
$author.textContent = todayQuote.author;
