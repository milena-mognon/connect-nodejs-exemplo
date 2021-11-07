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
    return a + b;
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
 * Salva o resultado do primeiro calculo na variável result
 */
const result = primeiroCalculo(1, 2);

console.log("Valor do result");
console.log(result);
/**
 * Passa o result como primeiro parametro
 */
segundoCalculo(result, 2); // é executado antes do primeiro calculo, não aguarda o primeiro

/**
 * Isso irá funcionar?
 *
 * Não
 *
 * Como vimos no exemplo anterior, o primeiro calculo demora 6 segundos para
 * ser executado e o node não espera ele termimar para seguir a diante.
 * Quando o result é passado para a segunda função o valor dele é undefined.
 * O segundoCalculo tentará fazer a conta undefined + 2, e isso é inválido
 * Portanto, o valor retornado pela função segundo calculo será NaN (Not a Number)
 *
 * Resultado
 * Valor do result
 * undefined
 * segundo calculo
 * NaN
 * primeiro calculo
 * 3
 */
