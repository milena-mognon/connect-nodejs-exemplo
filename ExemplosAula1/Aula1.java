package aula1;
import java.util.concurrent.TimeUnit;

/**
 *
 * @author Milena Mognon
 */
public class Aula1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        primeiroCalculo(1, 2);
        segundoCalculo(1, 2);
        terceiroCalculo(1, 2);
        
        /*
        * O Java, ao contrario do Node, aguarda a execução de cada método
        * para continuar (seguir para o próximo. Por isso, ao executarmos esse
        * código o resultado será:
        *    
        * Primeiro Calculo = 3
        * Segundo Calculo = 3
        * Terceiro Calculo = 3
        */
    }
    
    public static void primeiroCalculo(int a, int b) {
        try {
            TimeUnit.SECONDS.sleep(6);
            int soma = a + b;
            System.out.println("Primeiro Calculo = " + soma);
        } catch (InterruptedException e) {
            System.err.format("IOException: %s%n", e);
        }
    }
    public static void segundoCalculo(int a, int b) {
        try {
            TimeUnit.SECONDS.sleep(2);
            int soma = a + b;
            System.out.println("Segundo Calculo = " + soma);
        } catch (InterruptedException e) {
            System.err.format("IOException: %s%n", e);
        }
    }
    public static void terceiroCalculo(int a, int b) {
        int soma = a + b;
        System.out.println("Terceiro Calculo = " + soma);
    }
    
}
