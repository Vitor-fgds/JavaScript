/* Tier: 1-Beginner

Binary is the number system all digital computers are based on. Therefore it's important for developers to understand binary, or base 2, mathematics. The purpose of Bin2Dec is to provide practice and understanding of how binary calculations.

Bin2Dec allows the user to enter strings of up to 8 binary digits, 0's and 1's, in any sequence and then displays its decimal equivalent.

This challenge requires that the developer implementing it follow these constraints:

Arrays may not be used to contain the binary digits entered by the user
Determining the decimal equivalent of a particular binary digit in the sequence must be calculated using a single mathematical function, for example the natural logarithm. It's up to you to figure out which function to use. */

const input = require("prompt-sync")();

let binario = input("Digite um número binário: ")
let decimal = 0;

for (let i = 0; i<binario.length; i++){
    decimal += (parseInt(binario[i]) * (2**(binario.length - 1 - i)))
}

console.log(`${binario} em decimal é: ${decimal}`)