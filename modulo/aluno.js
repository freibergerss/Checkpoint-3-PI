//1º Crie um objeto aluno que tenha
function Aluno(nome, qtdFaltas, notas) {
    this.nome = nome
    this.qtdFaltas = qtdFaltas
    this.notas = notas
    //2º Criar metodos "calcular media" e "faltas"
    this.calcularMedia = function () {
        let media = 0
        for (i = 0; i < this.notas.length; i++) {
            media += this.notas[i]
        }
        return media / notas.length
    }
    this.faltas = function () {
        return this.qtdFaltas +1
    }

    // this.mediaAluno = this.calcularMedia().toFixed(1)
    this.totalFaltas = this.faltas()

console.log("Aluno: " + this.nome + " Total de faltas: " + this.totalFaltas + " Média: " + this.calcularMedia().toFixed(1));

}
const aluno1 = new Aluno("João", 2, [9, 7.5, 8, 5])
const aluno2 = new Aluno("Maria", 1, [10, 8.5, 8, 9])
const aluno3 = new Aluno("Pedro", 0, [8, 10, 9, 9])
const aluno4 = new Aluno("Joana", 4, [8, 6, 5.5, 7])

// let listaAlunos = [aluno1, aluno2, aluno3, aluno4]



module.exports = {Aluno, aluno1, aluno2, aluno3, aluno4}