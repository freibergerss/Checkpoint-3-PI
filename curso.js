const {Aluno, aluno1, aluno2, aluno3, aluno4} = require("./modulo/aluno")

let curso = {
  nomeCurso: 'Certified Tech Developer - DH',
  notaAprovacao: 7,
  maxFaltas: 3,
  listaEstudantes: [aluno1, aluno2, aluno3, aluno4],
  addEstudante: function(nome, qtdFaltas, notas) {
    this.listaEstudantes.push(new Aluno(nome, qtdFaltas, notas))
  },   
  aprovacao: function(nomeAluno){
    let alunoSelecionado = nomeAluno
    for(let i in this.listaEstudantes) {
      if (nomeAluno === this.listaEstudantes[i].nome) {
        alunoSelecionado = this.listaEstudantes[i];
      }
    }
    const faltas = alunoSelecionado.qtdFaltas;
    const media = alunoSelecionado.calcularMedia();
    if (faltas < this.maxFaltas && media >= this.notaAprovacao){
        return true
    } else if (faltas === this.maxFaltas && media >= this.notaAprovacao*0.1){
        return true    
    } else {
        return false
    } 
  },
  resultados: function(){
    let resultadoAlunos = [];
    for(let i in this.listaEstudantes){
      resultadoAlunos.push(this.aprovacao(this.listaEstudantes[i].nome))
    }
    return resultadoAlunos;
  }
}

curso.addEstudante("José", 0, [10, 10, 6, 8]);
console.log(curso.aprovacao("José"));
console.log(curso.resultados());

//evertinho passou por aqui
