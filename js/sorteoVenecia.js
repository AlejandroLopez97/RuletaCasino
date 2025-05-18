Ruleta(27);

function Ruleta (players){
  const randomPlayers = generateRandomPlayers(players);
  const miRuleta = new Winwheel({
    'numSegments': players,
    'outerRadius': 250,
    'segments': randomPlayers,
    'animation': {
        'type': 'spinToStop',
        'duration': 5,
        'callbackFinished': 'Mensaje()',
        'callbackAfter': 'sonar()',
        'callbackAfter': 'dibujarIndicador()'
    }
  });
  sonar();
}
function sonar() {
  let boton = document.querySelector("#ruleta");

  boton.addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "./audio/Ruleta.mp3")
      etiquetaAudio.play()
  });
}
function Mensaje() {
  var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
  document.getElementById('celebrar').play();
  alert("Ganaste: " + SegmentoSeleccionado.text + " !");
  //Reinicio de la ruleta
  miRuleta.stopAnimation(false);
  miRuleta.rotationAngle = 0;
  miRuleta.draw();
  dibujarIndicador();

}
dibujarIndicador();
function dibujarIndicador() {
  var ctx = miRuleta.ctx;
  ctx.strokeStyle = 'navy';
  ctx.fillStyle = '#DAEFFD';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(245, 0);
  ctx.lineTo(305, 0);
  ctx.lineTo(275, 45);
  ctx.lineTo(246, 0);
  ctx.stroke();
  ctx.fill();
}

function carga_sonido() {
  document.getElementById('sorteo').innerHTML = '<embed src="../audio/Celebracion.mp3" autostart="true" />'
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function getRandomBrightColor() {
  const getBrightComponent = () => Math.floor(Math.random() * 128) + 128; // Valores entre 128 y 255
  const r = getBrightComponent().toString(16).padStart(2, '0');
  const g = getBrightComponent().toString(16).padStart(2, '0');
  const b = getBrightComponent().toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
}

function generateRandomPlayers(totalPlayers) {
  const players = [];
  const usedNumbers = new Set();

  for (let i = 0; i < totalPlayers; i++) {
      // Generar un número único para el jugador
      let playerNumber;
      do {
          playerNumber = Math.floor(Math.random() * totalPlayers) + 1; // Números entre 1 y 100
      } while (usedNumbers.has(playerNumber));
      usedNumbers.add(playerNumber);

      // Crear el objeto del jugador
      const player = {
          fillStyle: getRandomBrightColor(),
          text: `Jugador #${playerNumber}`
      };

      players.push(player);
  }

  return players;
}