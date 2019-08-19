const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0] , valores [4]);
valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3} , null, false, "teste");
console.log(valores)


console.log(valores.pop()) // Propriedade pop remove o útimo valor da array
console.log(valores) 
delete valores[0] // Remove o primeiro valor da array [0] representa indice zero
console.log(valores)
console.log(typeof valores)
