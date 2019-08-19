const escola = "cod3r"
console.log(escola.charAt(4)) // Pegar Caractere dentro da string na posição 4
console.log(escola.charAt(5)) // Pegar caractere fora da string
console.log(escola.charCodeAt(3)) // Pegar caractere referente a tabela UNICODE
console.log(escola.indexOf(3)) // Pegar Caracteres como indíce na posição 3
console.log(escola.substring(1)) // // Começar o índice a partir da posição 1
console.log(escola.substring(0, 3)) // Pegar caracteres da posição 0 a posição 3
console.log('Escola ' .concat(escola).concat("!")) // Concatenar Palavras á string 
console.log("Escola " + escola + "!") // Concatenação com "+"
console.log("A Melhor Escola " .concat(escola).concat(" Sempre!")) // Concatenar Palavras á string 
console.log(escola.replace(3, "e")) // Susbtituir o caractere da posição 3 pelo "E"
console.log('Ana,Maria,Pedro'.split(',')) // Criar uma Array 
