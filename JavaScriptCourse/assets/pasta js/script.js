var currentNumberWrapper = document.getElementById("currentNumber");
// pegando o valor do número atual
var currentNumber = 0;
//declarando função para decrementar e incrementar
function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  // o inner diz para a função mudar o elemento no HTML
  if(currentNumber > -1){
    currentNumberWrapper.style.color = "white";
}
}
function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  // o inner diz para a função mudar o elemento no HTML
  if(currentNumber < 0){
    currentNumberWrapper.style.color = "red";
}
}
