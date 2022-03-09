
function insert (num){
  let numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML =numero + num;
}
function clean (){
    document.getElementById('resultado').innerHTML="";
}
function back (){
    let eraser = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eraser.substring(0, eraser.length -1);
}
function calcular(){
    let resultado = document.getElementById("resultado").innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }

}