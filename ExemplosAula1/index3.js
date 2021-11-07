/**
 * A funcão calculo irá receber dois números e demorar
 * 2 segundos para ser executada
 * @param {*} a
 * @param {*} b
 */
function calculo(a, b) {
  console.log("chamou a função");
  setTimeout(function () {
    console.log(a + b);

    return a + b;
  }, 2000);
}

/**
 * A funcão todosOsCalculos irá chamar 3 vezes a função calculo passado
 * valores diferentes para serem calculados
 */
function todosOsCalculos() {
  let a = calculo(2, 2);
  let b = calculo(4, 4);
  let c = calculo(a, b);
}

todosOsCalculos();

/**
 * Nesse exemplo é chamado 3 vezes a mesma função passando valores diferentes,
 * Porém a ultima chamada esperava o resultado de a e b para realizar o calculo.
 * Por padrão o node não espera, portanto o ultimo calculo não conseguiu ser
 * executado corretamente
 *
 *
 * chamou a função
 * chamou a função
 * chamou a função
 * 4
 * 8
 * NaN
 */
