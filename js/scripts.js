obtenerAncho();
window.addEventListener('resize', obtenerAncho);

function obtenerAncho(){
  var width = document.documentElement.clientWidth;
  console.log(width);
  generarBordes(width);  
}


var color = true;

function generarColor(borde) {
  if (color) {
    borde.style.backgroundColor = "#FFA0B6";
    color = false;
  } else {
    borde.style.backgroundColor = "#82E8D3";
    color = true;
  }
}

function generarBordes(width) {
  let bordes = document.getElementById("bordes");
  color=true;
  bordes.innerHTML ="";
  var cantidad = Math.trunc(width/30);

  for (let index = 0; index < cantidad+1; index++) {
    let borde = document.createElement("div");
    borde.setAttribute("class", "borde");
    generarColor(borde);
    bordes.append(borde);
    console.log("counter: " + index);
  }
}





