/**
 * A funcão primeiro calculo irá receber dois números e será executada
 * imediatamente
 * @param {*} a
 * @param {*} b
 */
function primeiroCalculo(a, b) {
  console.log("primeiro calculo");
  console.log(a + b);
  return a + b;
}

/**
 * A funcão segundo calculo irá receber dois números e será executada
 * @param {*} a
 * @param {*} b
 */
function segundoCalculo(a, b) {
  console.log("segundo calculo");
  console.log(a + b);
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
segundoCalculo(result, 2);

/**
 * Isso irá funcionar?
 *
 * Sim
 *
 * As funções são executadas imeditamente, não tem nenhum delay na execução
 * portanto, diferente do que foi visto no exemplo 2 (index2), o valor de result
 * é válido quando é passado para o segundoCalculo
 *
 * Resultado
 * primeiro calculo
 * 3
 * Valor do result
 * 3
 * segundo calculo
 * 5
 */
