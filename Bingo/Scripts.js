// Sorteando números

var sorteados = []
var contador = 0
var existe = false
var num

function Sorteio() {
  if(contador == 76){
    console.log("Sorteamos todos os números");
  }else{
    num=Math.round(Math.random()*76);
    existe = sorteados.includes(num);

    if(existe == true){
      while(existe == true){
        Sorteio();
      }
    }else{
      sorteados[contador] = num;
      contador = contador+1;
    }

    var descr = "";
      for (var i = 0; i < sorteados.length; i++) {
        descr += "<br/>" + sorteados[i];
    }

    document.getElementById('ultimo').innerHTML = num;
    document.getElementById('anteriores').innerHTML = descr;

  }
}
