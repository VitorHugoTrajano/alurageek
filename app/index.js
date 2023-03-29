var usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
var btnLogin = document.querySelector('#btnLogin');
var logado = document.querySelector('#usuarioLogin');

var cartaoInfo = document.querySelector('#usuario__info');
var btnSair = document.querySelector('#info__botao');

if(usuarioLogado.nome.length > 0) {
    btnLogin.setAttribute('style', 'display: none')
    logado.setAttribute('style', 'display: block')
    logado.innerHTML = `Olá, ${usuarioLogado.nome}`
} else {
    logado.setAttribute('style', 'display: none')
    btnLogin.setAttribute('style', 'display: block')
}

logado.addEventListener('click', () => {
    let tituloCartao = document.querySelector('#info__titulo');
    let emailCartao = document.querySelector('#info__email');
    let imagemCartao = document.querySelector('#info__imagem')

    cartaoInfo.classList.toggle('usuario__info-ativo')
    tituloCartao.innerHTML = `${usuarioLogado.nome} ${usuarioLogado.sobrenome}`
    emailCartao.innerHTML = `${usuarioLogado.email}`
    imagemCartao.src = `${usuarioLogado.imagem}`
})

btnSair.addEventListener('click', () => {
    window.location.href = 'login.html';
    localStorage.removeItem('usuarioLogado')
    localStorage.removeItem('token')
})


