function aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula('Bem vindo', 123)
const aula2 = new aula('Até breve', 456)

console.log(aula1, aula2)

//simulando o 'New'
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(aula, 'Bem vindo', 123)
console.log(aula3)
