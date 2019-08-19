const nome = "Rebeca"
const concatenacao = "Ola " + nome + "!"
const template = `
Olá
${nome} !
`
console.log(concatenacao, template)

//Expressoes

console.log(`1+1 = ${1+1}`) // Vai interpretar somente o que estiver entre ${}

const up = texto => texto.toUpperCase()
console.log(`Ei.. ${(up('Cuidado'))}`)

const nome2 = 'Leandro'

console.log(`E ai,  ${(up(nome2))}`)


