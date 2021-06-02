class Player {
  constructor(name, hp, img, weapons) {
    this.name = name;
    this.hp = hp;
    this.img = img;
    this.weapons = weapons;
  }

  attack = () => {
    console.log(`${this.name} Fight!`)
  }
}

const createPlayer = (className, player, rotate) => {
  const playerContainer = document.createElement('div');
  playerContainer.setAttribute('class', className);
  const progressbar = document.createElement('div');
  progressbar.setAttribute('class', 'progressbar');
  const character = document.createElement('div');
  character.setAttribute('class', 'character');
  const life = document.createElement('div');
  life.setAttribute('class', 'life');
  life.style.width = '100%';
  const name = document.createElement('div');
  name.setAttribute('class', 'name');
  const img = new Image();
  img.src = player.img;
  if (rotate) {
    img.style.transform = 'rotateY(180deg)';
  }
  name.innerText = player.name;
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  character.appendChild(img);
  playerContainer.appendChild(progressbar);
  playerContainer.appendChild(character);
  document.querySelector('.arenas').appendChild(playerContainer);
};

createPlayer(
  'player1',
  new Player(
    'Player 1',
    100,
    'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    ['dagger']));
createPlayer(
  'player2',
  new Player(
    'Player 2',
    100,
    'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    ['dagger']),
  true);
