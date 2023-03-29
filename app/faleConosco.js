var nomeUsuario = document.querySelector('#nome')
var textoUsuario = document.querySelector('#msgUsuario')
var msgErroFormulario = document.querySelector('#msgErroFormulario')
var btnFormulario = document.querySelector('#btnFormulario')

btnFormulario.addEventListener('click', (e) => {
    e.preventDefault()

    if (nomeUsuario.value && textoUsuario.value != "") {

        msgErroFormulario.innerHTML = ''
        let msgUser = JSON.parse(localStorage.getItem('msgUser') || '[]')

        msgUser.push({
            nome: nomeUsuario.value,
            texto: textoUsuario.value
        })

        localStorage.setItem('msgUser', JSON.stringify(msgUser))

    } else {
        msgErroTexto.setAttribute('style', 'display: none')
        msgErroFormulario.setAttribute('style', 'display: block')
        msgErroFormulario.innerHTML= 'Os campos acima devem estar preenchidos.'
    }

})

function limiteCaracteresNome() {
    let numeroMaximoCaracteres = 40
    let msgErroNome = document.querySelector('#msgErroNome')

    nomeUsuario.value = nomeUsuario.value.substring(0, numeroMaximoCaracteres)

    if(nomeUsuario.value.length === numeroMaximoCaracteres) {
        msgErroNome.innerHTML = `O campo nome deve conter até ${numeroMaximoCaracteres} caracteres.`
    } else {
        msgErroNome.innerHTML = ''
    }
}

nomeUsuario.addEventListener('input', limiteCaracteresNome)

function limiteCatacteresTexto() {
    let numeroMaximoCaracter = 120
    let msgErroTexto = document.querySelector('#msgErroTexto')
    textoUsuario.value = textoUsuario.value.substring(0, numeroMaximoCaracter)

    if(textoUsuario.value.length === numeroMaximoCaracter) {
        msgErroTexto.setAttribute('style', 'display: block')
        msgErroFormulario.innerHTML = ''
        msgErroTexto.innerHTML = `O campo nome deve conter até ${numeroMaximoCaracter} caracteres.`
    } else {
        msgErroTexto.innerHTML = ''
    }
}

textoUsuario.addEventListener('input', limiteCatacteresTexto )
    



