const miRuleta = new Winwheel({
  'numSegments': 50,
  'outerRadius': 250,
  'segments': [
      { 'fillStyle': '#9C6925', 'text': 'Jugador #49' },
      { 'fillStyle': '#F12E51', 'text': 'Jugador #15' },
      { 'fillStyle': '#FEDD94', 'text': 'Jugador #18' },
      { 'fillStyle': '#033D75', 'text': 'Jugador #33' },
      { 'fillStyle': '#FCD555', 'text': 'Jugador #4' }, 
      { 'fillStyle': '#B82A45', 'text': 'Jugador #48' },/**Aqi */
      { 'fillStyle': '#F4AA43', 'text': 'Jugador #22' },/** */
      { 'fillStyle': '#102241', 'text': 'Jugador #2' },/** */
      { 'fillStyle': '#9C6925', 'text': 'Jugador #26' },
      { 'fillStyle': '#F12E51', 'text': 'Jugador #19' },
      { 'fillStyle': '#FEDD94', 'text': 'Jugador #36' },
      { 'fillStyle': '#033D75', 'text': 'Jugador #16' },
      { 'fillStyle': '#FCD555', 'text': 'Jugador #45' },
      { 'fillStyle': '#B82A45', 'text': 'Jugador #7' },
      { 'fillStyle': '#F4AA43', 'text': 'Jugador #24' },
      { 'fillStyle': '#102241', 'text': 'Jugador #34' },
      { 'fillStyle': '#9C6925', 'text': 'Jugador #21' },
      { 'fillStyle': '#F12E51', 'text': 'Jugador #46' },
      { 'fillStyle': '#FEDD94', 'text': 'Jugador #38' },
      { 'fillStyle': '#033D75', 'text': 'Jugador #40' },
      { 'fillStyle': '#FCD555', 'text': 'Jugador #35' },
      { 'fillStyle': '#B82A45', 'text': 'Jugador #25' },
      { 'fillStyle': '#F4AA43', 'text': 'Jugador #8' },
      { 'fillStyle': '#102241', 'text': 'Jugador #23' },
      { 'fillStyle': '#9C6925', 'text': 'Jugador #50' },
      { 'fillStyle': '#F12E51', 'text': 'Jugador #27' },
      { 'fillStyle': '#FEDD94', 'text': 'Jugador #20' },//aqui
      { 'fillStyle': '#033D75', 'text': 'Jugador #37' },
      { 'fillStyle': '#FCD555', 'text': 'Jugador #10' },
      { 'fillStyle': '#B82A45', 'text': 'Jugador #44' },
      { 'fillStyle': '#F4AA43', 'text': 'Jugador #30' },
      { 'fillStyle': '#102241', 'text': 'Jugador #42' },
      { 'fillStyle': '#9C6925', 'text': 'Jugador #47' },
      { 'fillStyle': '#F12E51', 'text': 'Jugador #28' },
      { 'fillStyle': '#FEDD94', 'text': 'Jugador #5' },
      { 'fillStyle': '#033D75', 'text': 'Jugador #13' },
      { 'fillStyle': '#FCD555', 'text': 'Jugador #31' },
      { 'fillStyle': '#B82A45', 'text': 'Jugador #1' },
      { 'fillStyle': '#F4AA43', 'text': 'Jugador #17' },
      { 'fillStyle': '#102241', 'text': 'Jugador #29' },
      { 'fillStyle': '#9C6925', 'text': 'Jugador #6' },
      { 'fillStyle': '#F12E51', 'text': 'Jugador #41' },//aqui
      { 'fillStyle': '#FEDD94', 'text': 'Jugador #14' },
      { 'fillStyle': '#033D75', 'text': 'Jugador #32' },
      { 'fillStyle': '#FCD555', 'text': 'Jugador #3' },
      { 'fillStyle': '#B82A45', 'text': 'Jugador #43' },
      { 'fillStyle': '#F4AA43', 'text': 'Jugador #9' },
      { 'fillStyle': '#102241', 'text': 'Jugador #12' },
      { 'fillStyle': '#9C6925', 'text': 'Jugador #39' },
      { 'fillStyle': '#F12E51', 'text': 'Jugador #11' },
      
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