/*
PaRA casa: Implemente uma função que
receba uma lista de alunos de ISW-008
(nome,RA,notaP1,notaP2).
    Exemplo: {nome:"Diego",RA:"0050832311004",
    notaP1:10,notaP2:8}
Essa função deverá
a) mostRAr na tela os alunos em tabela
b) notas menores que 6 em vermelho,
    caso contrário azul
c) média da P1 da turma
d) média da P2 da turma
e) média de cada aluno
f) quantidade de apro
g) quantidade de repro
*/

/*VARIAVEL COM OS DADOS DOS ALUNOS*/
var alunos = [
    { nome: "Murilo", RA: "0050832311040", P1: 7, P2: 8 },
    { nome: "Gustavo", RA: "0050832311041", P1: 5, P2: 6 },
    { nome: "Biscardi", RA: "0050832311043", P1: 7, P2: 9 },
    { nome: "Apolo", RA: "0050832311044", P1: 7, P2: 6 },
    { nome: "Felipe", RA: "0050832311045", P1: 8, P2: 9 },
    { nome: "Pedro", RA: "0050832311046", P1: 7, P2: 5 },
    { nome: "Tayanne", RA: "0050832311047", P1: 9, P2: 6 },
    { nome: "Heitor", RA: "0050832311049", P1: 4, P2: 5 },
    { nome: "Victor", RA: "0050832311050", P1: 9, P2: 7 },
    { nome: "Enzo", RA: "0050832311051", P1: 9, P2: 4 }
];

dadosAlunos(alunos);

/*FUNÇÃO QUE RECEBE A LISTA, E IMPRIME A MÉDIA DE CADA ALUNO/TURMA*/
function dadosAlunos(alunos) {
    var tbl = "<table><thead><tr><th>Nome</th><th>RA</th><th>P1</th><th>P2</th><th>Média</th></tr></thead><tbody></tr>";
    var meP1 = 0;
    var meP2 = 0;
    var apro = 0;
    var repro = 0;
    
    for (var i = 0; i < alunos.length; i++) {
        tbl += "<tr><td>" + alunos[i].nome + "</td>" +
            "<td>" + alunos[i].RA + "</td>" +
            "<td class='P1'>" + alunos[i].P1 + "</td>" +
            "<td class='P2'>" + alunos[i].P2 + "</td>" +
            "<td class='media'>" + (alunos[i].P1 + alunos[i].P2) / 2 + "</td></tr>";
    }

    /*CALCULA A SOMA DE P1 E P2*/
    for (var i = 0; i < alunos.length; i++) {
        meP1 += alunos[i].P1;
        meP2 += alunos[i].P2;
    }

    /*VAI CALCULAR A MÉDIA*/
    meP1 = meP1 / alunos.length;
    meP2 = meP2 / alunos.length;

    for (var i = 0; i < alunos.length; i++) {
        if ((alunos[i].P1 + alunos[i].P2) / 2 >= 6) {
            apro++;
        } else {
            repro++;
        }
    }

    tbl += "<tr><td>Média da Sala P1 - </td>" + "<td class='meP1'>" + meP1 + "</td>" + "<td> Aprovado </td>" + "<td>" + apro + "</td></tr>" + "<p><td>Média da Sala P2 - </td>" + "<td class='meP2'>" + meP2 + "</td>" + "<td> Reprovado</td>" + "<td>" + repro + "</td></tr>";
    tbl += "</tbody></table>";
    document.write(tbl);
}
