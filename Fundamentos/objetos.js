const prod1 = {}
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.9
prod1["Desconto Legal"] = 0.40  // Evitar Atributos com espaço
console.log(prod1)

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90,
    Propriedades: {
        Cor: "Branco",
        tamanho: "G",
       Descontos: {
        desconto1: 0.10,
        desconto2: 0.15
        }
       } 
    }

console.log(prod2.nome, prod2.preco, prod2.Propriedades)