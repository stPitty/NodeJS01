const readline = require('readline');

const getRandomInt = (min, max) => Math.floor(Math.random() * (max-min) + min);

function randomGame (min, max) {
  console.log(`Загадано чилсо в диапазоне от ${min} до ${max}`)
  const input = readline.createInterface(process.stdin, process.stdout);
  const randomInt = getRandomInt(min, max);

  input.on('line', (data) =>
  {
    const number = Number(data);
    if (randomInt > number) console.log('Больше');
    if (randomInt < number) console.log('Меньше');
    if (randomInt === number) {
      console.log(`Отгадано число ${randomInt}`);
      return input.close();
    }
  });

  input.on('close', () => console.log(`Игра завершена`));
}

randomGame(process.argv[2], process.argv[3])

