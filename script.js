// Requisito 4 - Gera cor aleatoria

const coresAleatorias = document.querySelector('#rgb-color');
let answer = document.querySelector('#answer');
let colorChoose;
let score = 0;

function clickBall(event) {
  console.log(score);
  let scorePoints = document.querySelector('#score');

  const { target } = event;
  if (target.style.background === colorChoose) {
    answer.innerHTML = 'Acertou!';
    score += 3;
    console.log(score);
    scorePoints.innerHTML = score;
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
}

function initial() {
  function generateRandomNumber(number) {
    return Math.floor(Math.random() * number);
  }

  function generateRgb() {
    const firstColor = generateRandomNumber(255);
    const secondColor = generateRandomNumber(255);
    const thirdColor = generateRandomNumber(255);

    return `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
  }

  colorChoose = generateRgb();
  coresAleatorias.innerHTML = colorChoose.replace('rgb', '');

  const fillBall = document.querySelectorAll('.ball');
  const luckColor = generateRandomNumber(6);

  fillBall.forEach((ball, index) => {
    if (index === luckColor) {
      ball.style.background = colorChoose;
    } else {
      ball.style.background = generateRgb();
    }

    ball.addEventListener('click', clickBall);
  });
}

initial();

const resetGame = document.querySelector('#reset-game');

resetGame.addEventListener('click', () => {
  answer.innerHTML = 'Escolha uma cor';
  initial();
});
