const miRuleta = new Winwheel({
  'numSegments': 20,
  'outerRadius': 250,
  'segments': [
    { 'fillStyle': '#EBB63C', 'text': '25.000 + 25.000' },
    { 'fillStyle': '#122032', 'text': 'toma un trago', 'textFillStyle' : '#F4AA43' },
    { 'fillStyle': '#F4AA43', 'text': '20.000' },
    { 'fillStyle': '#122032', 'text': '5.000' , 'textFillStyle' : '#F4AA43'},
    { 'fillStyle': '#EBB63C', 'text': 'Regalo sorpresa' },
    { 'fillStyle': '#122032', 'text': '5.000' , 'textFillStyle' : '#F4AA43'}, /*aqui*/
    { 'fillStyle': '#F4AA43', 'text': '20.000 + 20.000' },
    { 'fillStyle': '#122032', 'text': 'Vuelve a intentarlo' , 'textFillStyle' : '#F4AA43'},
    { 'fillStyle': '#EBB63C', 'text': '10.000' },
    { 'fillStyle': '#122032', 'text': '20.000' , 'textFillStyle' : '#F4AA43'},
    { 'fillStyle': '#F4AA43', 'text': 'Regalo sorpresa' },
    { 'fillStyle': '#122032', 'text': '5.000' , 'textFillStyle' : '#F4AA43'},
    { 'fillStyle': '#EBB63C', 'text': '25.000' },
    { 'fillStyle': '#122032', 'text': '15.000 + 15.000', 'textFillStyle' : '#F4AA43' },
    { 'fillStyle': '#F4AA43', 'text': 'toma un trago' },
    { 'fillStyle': '#122032', 'text': '10.000', 'textFillStyle' : '#F4AA43' },
    { 'fillStyle': '#EBB63C', 'text': '5.000' },
    { 'fillStyle': '#122032', 'text': '10.000' , 'textFillStyle' : '#F4AA43'},
    { 'fillStyle': '#F4AA43', 'text': 'Vuelve a intentarlo' },
    { 'fillStyle': '#122032', 'text': '20.000' , 'textFillStyle' : '#F4AA43'},
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
  document.getElementById('celebrar1').play();
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