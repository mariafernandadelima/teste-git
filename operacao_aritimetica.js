let res = document.getElementById('res')

function soma(){
   let num1 = Number(document.getElementById('num1').value) 
   let num2 = Number(document.getElementById('num2').value) 

   let resultadoSoma = num1 + num2

   res.innerHTMLL = 'A soma de ' + num1 +'com' + num2 + 'é =' + resultadoSoma.toFixed(2)

}
function subtração(){

}