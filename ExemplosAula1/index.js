/**
 * A funcão primeiro calculo irá receber dois números e demorar
 * 6 segundos para ser executada
 * @param {*} a
 * @param {*} b
 */
function primeiroCalculo(a, b) {
  setTimeout(function () {
    console.log("primeiro calculo");
    console.log(a + b);
  }, 6000);
}

/**
 * A funcão segundo calculo irá receber dois números e demorar
 * 2 segundos para ser executada
 * @param {*} a
 * @param {*} b
 */
function segundoCalculo(a, b) {
  setTimeout(function () {
    console.log("segundo calculo");
    console.log(a + b);
  }, 2000);
}

/**
 * A funcão terceiro calculo irá receber dois números e será
 * execitada imediatamente
 * @param {*} a
 * @param {*} b
 */
function terceiroCalculo(a, b) {
  console.log("terceiro calculo");
  console.log(a + b);
}

primeiroCalculo(1, 2);
segundoCalculo(1, 2);
terceiroCalculo(1, 2);

/**
 * Resultado - O que acontecerá?
 *
 * O Node é Non Blocking I/O, portanto, mesmo que a primeira função
 * demore um pouco mais para ser executada ele não irá ficar esperando
 * ela terminar, passa direto para a segunda. A segunda também demora um tempo
 * para finalizar, mesmo assim ele segue em frente. A terceira é executada
 * imediatamente.
 * Depois que as outras funções finalizarem ele retorna o valor.
 *
 * Resultado
 *
 * terceiro calculo
 * 3
 * segundo calculo
 * 3
 * primeiro calculo
 * 3
 */
