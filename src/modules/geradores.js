//aqui nesse modulo faremos nossas funçãos geradoras

//primeiro nosso classico random retornando os min e max de lei.
function random(min,max) { 
    return Math.floor(Math.random() * (max - min) + min)
};

//aqui utilizamos um metodo chamado fromCharCode que pega caracteres baseados na tabela ascii
//consultando a taleba separamos uns valores para serem gerados randomicamente com a nossa função randomica
const geraMaiuscula = () => String.fromCharCode(random(65, 91));
const geraMinuscula = () => String.fromCharCode(random(97, 123));
const geraNumeros = () => String.fromCharCode(random(48, 58));
const simbolos = '[]{}\/*-+._=?><@#$%&!' //os simbolos colocamos na mão
const geraSimbolos = () => simbolos[random(0, simbolos.length)] //aqui buscamos os simbolos de acordo com o sistema de indice, de 0 ao tamanho da string de simbolos

//essa é a função principal geradora, que recebe todos os parametros para gerar a senha, exportamos ela como default pra usarmos nos outros modulos
export default function geraSenha(qt, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [] // criamos um array para receber nossa senha mais facilmente com o for
    qt = Number(qt) //transformamos a quantidade escolhida pelo usuário em numero
    for(let i = 0; i < qt; i++){ //nesse for iteramos pelas quantidades
        //utilizamos curto circuito para fazer, maiusculas estando true, a outra também é true
        //assim gerando nosso caractere no final do array
        //gera nessa ordem mesmo
        maiusculas && senhaArray.push(geraMaiuscula()) 
        minusculas && senhaArray.push(geraMinuscula())
        numeros && senhaArray.push(geraNumeros())
        simbolos && senhaArray.push(geraSimbolos())
    }
    //no final retorna nosso array transformamo em string e reduzido pela quantidade pedida, por que e nao informamos esse slice, a senha dobra de tamanho, pois no for ele vai gerar um dos caracteres para cada quantidade.
    return senhaArray.join('').slice(0, qt)
}



