var imagemProduto = document.querySelector('#imagem-produto')
var nomeProduto = document.querySelector('#nome-produto')
var precoProduto = document.querySelector('#preco-produto')
var descricaoProduto = document.querySelector('#descricao-produto')
var msgErroFormularioAdd = document.querySelector('#msgErroFormularioAdicionar')
var btnAdicionarProdto = document.querySelector('#btnAdicionarProdto')

function limiteCaracterNomeProduto() {
    let msgErroNomeProduto = document.querySelector('#msgErroNomeProduto')
    let maximoCaracter = 20
    nomeProduto.value = nomeProduto.value.substring(0, maximoCaracter)

    if (nomeProduto.value.length === maximoCaracter) {
        msgErroNomeProduto.setAttribute('style', 'display: block')
        msgErroNomeProduto.innerHTML = `O campo nome deve conter até ${maximoCaracter} caracteres`
    } else {
        msgErroNomeProduto.innerHTML = ''
    }
}

nomeProduto.addEventListener('input', limiteCaracterNomeProduto)

function limiteCaracterDescricao() {
    let msgErroDescricao = document.querySelector('#msgErroDescricao')
    let maximoCaracter = 120
    descricaoProduto.value = descricaoProduto.value.substring(0, maximoCaracter)

    if (descricaoProduto.value.length === maximoCaracter) {
        msgErroDescricao.setAttribute('style', 'display: block')
        msgErroDescricao.innerHTML = `O campo descrição deve conter até ${maximoCaracter} caracteres`
    } else {
        msgErroDescricao.setAttribute('style', 'display: none')
        msgErroDescricao.innerHTML = ''
    }
}

descricaoProduto.addEventListener('input', limiteCaracterDescricao)


function formatoMoedaReal() {
    let formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    });

    precoProduto.value = formatter.format(precoProduto.value)
}

precoProduto.addEventListener('blur', formatoMoedaReal)

btnAdicionarProdto.addEventListener('click', (e) => {
    e.preventDefault()

    let categoriaProduto = document.querySelector('#categoria-produto')

    if (imagemProduto.value === '' || categoriaProduto.value === '' || nomeProduto.value === '' || precoProduto.value === '' || descricaoProduto.value === '') {
        msgErroFormularioAdd.setAttribute('style', 'display: block')
        msgErroFormularioAdd.innerHTML = 'Todos os campos acima devem estar preenchidos'
    } else {

        let produtoAdicionado = JSON.parse(localStorage.getItem('produtoAdicionado') || '[]')

        produtoAdicionado.push({
            imagem: imagemProduto.value,
            categoria: categoriaProduto.value,
            descricao: descricaoProduto.value,
            titulo: nomeProduto.value,
            preco: precoProduto.value
        })

        localStorage.setItem('produtoAdicionado', JSON.stringify(produtoAdicionado))
        msgErroFormularioAdd.innerHTML = ''
    }
})
