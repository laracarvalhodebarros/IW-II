document.addEventListener("DOMContentLoaded", function() {
    function mostrar(texto) {
        document.getElementById("saida").innerHTML += texto + "<br>";
    }

    // Exercício 1 
    let nome = "Lara";
    let idade = 16;
    let curso = "Infonet";
    mostrar("Exercício 1: Meu nome é " + nome + ", tenho " + idade + " anos e faço o curso de " + curso + ".");

    // Exercício 2 
    let num1 = 10;
    let num2 = 5;
    mostrar("Exercício 2: Soma: " + (num1 + num2));

    // Exercício 3 
    let a = 10;
    let b = 3;
    mostrar("Exercício 3: Soma: " + (a + b));
    mostrar("Exercício 3: Subtração: " + (a - b));
    mostrar("Exercício 3: Multiplicação: " + (a * b));
    mostrar("Exercício 3: Divisão: " + (a / b));
    mostrar("Exercício 3: Resto: " + (a % b));

    // Exercício 4 
    let numero = "30";
    let resultado = Number(numero) + 20;
    mostrar("Exercício 4: Resultado: " + resultado);

    // Exercício 5 
    let x = 10;
    let y = "10";
    mostrar("Exercício 5: x == y: " + (x == y));
    mostrar("Exercício 5: x === y: " + (x === y));

    // Exercício 6 
    let idadePessoa = 18;
    if (idadePessoa >= 18) {
        mostrar("Exercício 6: Maior de idade");
    } else {
        mostrar("Exercício 6: Menor de idade");
    }

    // Exercício 7 
    let numeroEx7 = -5;
    if (numeroEx7 > 0) {
        mostrar("Exercício 7: Positivo");
    } else if (numeroEx7 < 0) {
        mostrar("Exercício 7: Negativo");
    } else {
        mostrar("Exercício 7: Zero");
    }

    // Exercício 8
    let nota = 6;
    if (nota >= 7) {
        mostrar("Exercício 8: Aprovado");
    } else if (nota >= 5) {
        mostrar("Exercício 8: Recuperação");
    } else {
        mostrar("Exercício 8: Reprovado");
    }

    // Exercício 9 
    mostrar("Exercício 9: Contagem de 1 a 10");
    for (let i = 1; i <= 10; i++) {
        mostrar(i);
    }

    // Exercício 10 
    let somaTotal = 0;
    for (let i = 1; i <= 100; i++) {
        somaTotal += i;
    }
    mostrar("Exercício 10: Soma de 1 a 100: " + somaTotal);

    // Exercício 11 
    let contador = 5;
    mostrar("Exercício 11: Contagem regressiva");
    while (contador >= 1) {
        mostrar(contador);
        contador--;
    }

    
    // Exercício 12 
    function somaDoisNumeros(x, y) {
        return x + y;
    }
    mostrar("Exercício 12: Soma 4 + 7 = " + somaDoisNumeros(4, 7));

   
    // Exercício 13 
    function parOuImpar(num) {
        if (num % 2 === 0) {
            return "Par";
        } else {
            return "Ímpar";
        }
    }
    mostrar("Exercício 13: 7 é " + parOuImpar(7));
    mostrar("Exercício 13: 10 é " + parOuImpar(10));
});
