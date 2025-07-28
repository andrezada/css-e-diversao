//1. Implemente um programa que solicita um número ao usuário e seguida exibe uma mensagem
//informando se o número é par ou ímpar.
const numero = parseInt(prompt("Digite um número:"));
if (numero % 2 === 0) {
    console.log("é par");
}
else {
    console.log("é ímpar");}
//2. Escreva um programa que peça ao usuário para inserir três números distintos e, em seguida,
//imprima o maior deles.
const num1 = parseInt(prompt("primeiro número:"));
const num2 = parseInt(prompt("segundo número:"));      
const num3 = parseInt(prompt("terceiro número:"));
if (num1 > num2 && num1 > num3) {
    console.log("O maior é: " + num1);
} 
else if (num2 > num1 && num2 > num3) {
    console.log("O maior é: " + num2);
} 
else {
    console.log("O maior é: " + num3);
}

//3. Crie um programa que receba três notas, calcula a média e informe se o aluno foi aprovado
//(média maior ou igual a 7) ou reprovado (média menor que 7).
const nota1 = parseInt(prompt("sua 1ª nota:"));
const nota2 = parseInt(prompt("sua 2ª nota:"));     
const nota3 = parseInt(prompt("sua 3ª nota:"));
const media = (nota1 + nota2 + nota3) / 3;
if (media >= 7) {
    console.log("Aprovado");
}
else {
    console.log("Reprovado");
}
//4. Desenvolva um programa que receba o ano de nascimento de uma pessoa e informe se ela já é
//maior de idade ou não.
const ano = parseInt(prompt("seu ano de nascimento:"));
if (2025 - ano >= 18) {
    console.log("maior de idade.");
}
else {
    console.log("menor de idade.");
}

//5. Faça um programa que converte uma temperatura de Celsius para Fahrenheit

const celsius = parseFloat(prompt("temperatura em Celsius:"));
const fahrenheit = (celsius * 9/5) + 32;
console.log("Temperatura: " + fahrenheit);

//6. Escreva um programa que solicite dois números ao usuário e verifique se pelo menos um deles
//é múltiplo do outro. Se pelo menos um for múltiplo, exiba a mensagem “Pelo menos um dos
//números é múltiplo do outro”. Caso contrário, exiba a mensagem “Nenhum dos números é
//múltiplo do outro”.
const A = parseInt(prompt("primeiro"));
const B = parseInt(prompt("segundo"));                       
if (A % B === 0 || B % A === 0) {
    console.log("Pelo menos um dos números é múltiplo do outro");
}
else {
    console.log("Nenhum dos números é múltiplo do outro");
}

//7. Escreva um programa que peça ao usuário o valor de três lados de um triângulo e classifique-o
//como triângulo equilátero, isósceles, escaleno ou inválido.
const lado1 = parseInt(prompt("primeiro lado:"));
const lado2 = parseInt(prompt("segundo lado:"));      
const lado3 = parseInt(prompt("terceiro lado:"));
if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("Triângulo inválido");
}
else if (lado1 === lado2 && lado2 === lado3) {
    console.log("Triângulo equilátero");
} 
else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Triângulo isósceles");
} 
else {
    console.log("Triângulo escaleno");
}

//8. Crie um programa que simula um restaurante. O usuário escolhe um prato do menu (opções:
//pizza, hambúrguer, salada, macarrão) usando a instrução switch. Para cada prato escolhido,
//exiba o preço e a descrição do prato.

//seila fazer isso loko

//9. Escreva um programa que peça ao usuário sua altura e peso, calcule o IMC (Índice de Massa
//Corporal) e classifique conforme a tabela da OMS (abaixo do peso, peso normal, sobrepeso,
//obesidade). Exiba o valor do IMC e a respectiva classificação.
const altura = parseFloat(prompt("sua altura em metros:"));
const peso = parseFloat(prompt("seu peso em kg:"));
const imc = peso / (altura * altura);
if (imc < 18.5) {
    console.log("seu imc é:" + imc + "e você está abaixo do peso");
}
else if (imc >= 18.5 && imc < 24.9) {
    console.log("seu imc é" + imc + "e você está com peso normal");
}
else if (imc >= 25 && imc < 29.9) {
    console.log("seu imc é" + imc +"e você está sobrepeso");
}

//10. Escreva um programa que solicite ao usuário um número positivo e exiba todos os números
//pares de 0 até o número informado (use o laço de repetição while).

//tamojuntoooooooo

//11. Escreva um programa que solicite ao usuário um número positivo e exiba todos os números
//ímpares de 0 até o número informado (use o laço de repetição for).

//asiim voce que matar o cara po

//12. Crie um programa que calcule o fatorial de um número fornecido pelo usuário

//desisti

/*13. Implemente um jogo de adivinhação onde o computador gera um número aleatório entre 1 e
100 e o usuário tem que adivinhar qual é em até 10 tentativas. Verifique se cada palpite do
usuário está correto, menor ou maior do que o número secreto. Exiba mensagens informando
o resultado de cada tentativa e forneça pistas (menor/maior) para ajudar o usuário. Para gerar
um número aleatório entre 0 e 100 em JavaScript podemos usar Math.floor(Math.random()
* 101), onde Math.random() retorna um valor entre 0 (inclusive) e 1 (exclusivo), multiplicado
por 101 para incluir o 100, e Math.floor() arredonda o resultado para o número inteiro mais
próximo.*/