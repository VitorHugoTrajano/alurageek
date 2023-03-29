var msgLogin = document.querySelector('#msgLogin');

var email = document.querySelector('#input-email');
var erroEmail = document.querySelector('#erroEmail');

var senha = document.querySelector('#input-senha');
var erroSenha = document.querySelector('#erroSenha');

var botao = document.querySelector('#input-botao');
var spanBtn = document.querySelector('#spanBtn');


email.addEventListener('blur', () => {
    if (email.value.length === 0) {
        erroEmail.innerHTML = 'O campo email não pode estar vazio.'
    } else {
        erroEmail.innerHTML = ''
    }
})

email.addEventListener('keyup', () => {
    validacaoEmail();
})

function validacaoEmail() {
    usuario = email.value.substring(0, email.value.indexOf("@"));
    dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length);
    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {

        erroEmail.innerHTML = " ";
    }
    else {
        erroEmail.innerHTML = "Digite um email com formato válido";
    }
}

senha.addEventListener('blur', () => {
    if (senha.value.length === 0) {
        erroSenha.innerHTML = 'O campo senha não pode estar vazio.'
    } else {
        erroSenha.innerHTML = ''
    }
})

senha.addEventListener('keyup', () => {
    checarSenha();
})

function checarSenha() {
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$/.test(senha.value) ? erroSenha.innerHTML = '' : erroSenha.innerHTML = 'Atenção! Sua senha deve conter 6 a 12 caracteres, uma letra maiúscula, um número e não deve conter símbolos.'
}


botao.addEventListener('click', (e) => {
    e.preventDefault();

    let valorEmail = email.value;
    let valorSenha = senha.value;
    let token = Math.random().toString(16).substring(2)
    let listaUsuario = []
    let userValid = {
        nome: "",
        email: "",
        senha: ""
    }

    listaUsuario = JSON.parse(localStorage.getItem('listaUser'))

    listaUsuario.forEach((item) => {
        if (valorEmail == item.emailCad && valorSenha == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                sobrenome: item.sobrenomeCad,
                email: item.emailCad,
                senha: item.senhaCad,
                imagem: item.imagemCad
            }
        }
    })

    if (valorEmail == userValid.email && valorSenha == userValid.senha) {
        window.location.href = 'index.html'
        localStorage.setItem('token', token)
        localStorage.setItem('usuarioLogado', JSON.stringify(userValid))

    } else {
        msgLogin.innerHTML = 'Email e/ou senha não cadastrado'
        msgLogin.classList.add('msgLoginErro')
    }

})



var listaUser = JSON.parse(localStorage.getItem('usuarioCadastrado') || '[]')

usuarioCadastrado = [{
    nomeCad: 'Paloma',
    sobrenomeCad: 'Marques',
    emailCad: 'loma.amaral@gmail.com',
    senhaCad: '1234Be',
    imagemCad: 'img/perfil-paloma.webp'

},

{
    nomeCad: 'Bernardo',
    sobrenomeCad: 'Marques Amaral',
    emailCad: 'bernardo@gmail.com',
    senhaCad: '1234Pa',
    imagemCad: 'img/perfil-bernardo.jpg'
}]

localStorage.setItem('listaUser', JSON.stringify(usuarioCadastrado))