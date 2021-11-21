/**
 * A funcão calculo irá receber dois números e demorar
 * 1 segundos para ser executada
 * @param {*} a
 * @param {*} b
 */
function calculo(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(a + b);
      console.log(a + b);
    }, 3000);
  });
}

/**
 * Utiliza o .then para esperar a execução
 */
console.time("performance");
calculo(2, 2).then((a) => {
  calculo(4, 4).then((b) => {
    calculo(a, b).then((result) => {
      console.log(result);
      console.timeEnd("performance");
    });
  });
});

/**
 * A ideia desse exemplo é a mesma do anterior (index3). O último calculo
 * deve utilizar os valores de a e b para calcular.
 *
 * Diferente do exemplo anterior agora está sendo utilizado o .then, que espera
 * a execução para passar para a próxima.
 *
 * Como resultado vemos que o ultimo calculo agora tem um valor válido,
 * pois a e b já estavam calculados quando ele foi chamado
 *
 * Resultado:
 * 4 --> resultado de a
 * 8 --> resultado de b
 * 12 --> resultado de c
 * 12 --> resultado final (c)
 * performance: 3.017s --> tempo que demorou para executar
 */
