import geraSenha from "./geradores"; 
//esse modulo serve para mechermos no dom
//primeiro pegamos todos os elementos do dom e colocamos em nossas consts
const senhaGerada = document.querySelector('.senha-gerada')
const quatidadeDeCaracteres = document.querySelector('.qtd-caracteres')
const maiusculas = document.querySelector('.chk-maiusculas')
const minusculas = document.querySelector('.chk-minusculas')
const numeros = document.querySelector('.chk-numeros')
const simbolos = document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.gerar-senha')

//entao exportamos nosso evento para o nosso js principal, que vai desencadear tudo
export default function formGeraSenha(){
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera() //pegamos o evento de nosso botao, que resultara na alteração da nossa div para a nossa senha gerada
    })
}
 //aqui é o callback da nossa função geradora, que pegamos do nosso modulo geradores
function gera(){
    //informamos os parametros, que no caso retornam os booleanos da nossa check box, lembra, se estiver true esta checada entao vai gerar de acordo, com os checked
    const senha = geraSenha(
        quatidadeDeCaracteres.value, //aqui o valor da quantidade
        maiusculas.checked,
        minusculas.checked,
        numeros.checked,
        simbolos.checked
    )
        //que no final retorna nossa senha ou a nossa string caso nossa senha for false, sem nada chegado
    return senha || 'Nada Selecionado'
}