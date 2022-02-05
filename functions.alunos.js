// Testes com Functions
// Média dos alunos

const alunos = [{
        nome: "Michell",
        idade: 39,
        nota1: 8.5,
        nota2: 6.5
    },
    {
        nome: "Nielson",
        idade: 38,
        nota1: 9.5,
        nota2: 2.5
    }
]

function calculamedia(alunos) {
    return (alunos.nota1 + alunos.nota2) / 2
}

const media1 = calculamedia(alunos[0])
const media2 = calculamedia(alunos[1])

function resultado(media, nome) {
    if (media >= 7) {
        console.log(`${nome}, você obteve média igual a ${media}, portanto, estás APROVADO!`)
    } else {
        console.log(`${nome}, você obteve média igual a ${media}, portanto, estás REPROVADO!`)
    }
}

resultado(media1, `Michell`)
resultado(media2, `Nielson`)