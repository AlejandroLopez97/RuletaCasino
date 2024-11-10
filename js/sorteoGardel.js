const miRuleta = new Winwheel({
  'numSegments': 50,
  'outerRadius': 250,
  'segments': [
      { 'fillStyle': '#70F538', 'text': 'Jugador #49' },
      { 'fillStyle': '#1B3AF5', 'text': 'Jugador #15' },
      { 'fillStyle': '#d30000', 'text': 'Jugador #18' },
      { 'fillStyle': '#F5F31A', 'text': 'Jugador #33' },
      { 'fillStyle': '#F502E3', 'text': 'Jugador #4' },
      { 'fillStyle': '#70F538', 'text': 'Jugador #48' },
      { 'fillStyle': '#1B3AF5', 'text': 'Jugador #22' },
      { 'fillStyle': '#d30000', 'text': 'Jugador #2' },
      { 'fillStyle': '#26E8F5', 'text': 'Jugador #26' },
      { 'fillStyle': '#F5F31A', 'text': 'Jugador #19' },
      { 'fillStyle': '#A20A6A', 'text': 'Jugador #36' },
      { 'fillStyle': '#70F538', 'text': 'Jugador #16' },
      { 'fillStyle': '#1B3AF5', 'text': 'Jugador #45' },
      { 'fillStyle': '#d30000', 'text': 'Jugador #7' },
      { 'fillStyle': '#F5F31A', 'text': 'Jugador #24' },
      { 'fillStyle': '#F502E3', 'text': 'Jugador #34' },
      { 'fillStyle': '#70F538', 'text': 'Jugador #21' },
      { 'fillStyle': '#1B3AF5', 'text': 'Jugador #46' },
      { 'fillStyle': '#d30000', 'text': 'Jugador #38' },
      { 'fillStyle': '#26E8F5', 'text': 'Jugador #40' },
      { 'fillStyle': '#F5F31A', 'text': 'Jugador #35' },
      { 'fillStyle': '#A20A6A', 'text': 'Jugador #25' },
      { 'fillStyle': '#70F538', 'text': 'Jugador #8' },
      { 'fillStyle': '#1B3AF5', 'text': 'Jugador #23' },
      { 'fillStyle': '#d30000', 'text': 'Jugador #50' },
      { 'fillStyle': '#F5F31A', 'text': 'Jugador #27' },
      { 'fillStyle': '#F502E3', 'text': 'Jugador #20' },//aqui
      { 'fillStyle': '#70F538', 'text': 'Jugador #37' },
      { 'fillStyle': '#1B3AF5', 'text': 'Jugador #10' },
      { 'fillStyle': '#d30000', 'text': 'Jugador #44' },
      { 'fillStyle': '#F5F31A', 'text': 'Jugador #30' },
      { 'fillStyle': '#F502E3', 'text': 'Jugador #42' },
      { 'fillStyle': '#70F538', 'text': 'Jugador #47' },
      { 'fillStyle': '#1B3AF5', 'text': 'Jugador #28' },
      { 'fillStyle': '#d30000', 'text': 'Jugador #5' },
      { 'fillStyle': '#26E8F5', 'text': 'Jugador #13' },
      { 'fillStyle': '#F5F31A', 'text': 'Jugador #31' },
      { 'fillStyle': '#A20A6A', 'text': 'Jugador #1' },
      { 'fillStyle': '#70F538', 'text': 'Jugador #17' },
      { 'fillStyle': '#1B3AF5', 'text': 'Jugador #29' },
      { 'fillStyle': '#d30000', 'text': 'Jugador #6' },
      { 'fillStyle': '#F5F31A', 'text': 'Jugador #41' },//aqui
      { 'fillStyle': '#70F538', 'text': 'Jugador #14' },
      { 'fillStyle': '#1B3AF5', 'text': 'Jugador #32' },
      { 'fillStyle': '#d30000', 'text': 'Jugador #3' },
      { 'fillStyle': '#F502E3', 'text': 'Jugador #43' },
      { 'fillStyle': '#70F538', 'text': 'Jugador #9' },
      { 'fillStyle': '#F5F31A', 'text': 'Jugador #12' },
      { 'fillStyle': '#1B3AF5', 'text': 'Jugador #39' },
      { 'fillStyle': '#A20A6A', 'text': 'Jugador #11' },
      
  ],
  'animation': {
      'type': 'spinToStop',
      'duration': 5,
      'callbackFinished': 'Mensaje()',
      'callbackAfter': 'sonar()',
      'callbackAfter': 'dibujarIndicador()'
  }
});
sonar();
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