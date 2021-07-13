let inputName = document.querySelector('#inputName')
let confimPass = document.querySelector('#inputSenha')
let titulo = document.querySelector('#loginTitle')
let btCadastro = document.querySelector('#btCadastro')
let btEntrar = document.querySelector('#entrar')
let inputPassword1 = document.querySelector('#InputPassword1')
let inputPassword2 = document.querySelector('#InputPassword2')
let inputEmail = document.querySelector('#inputEmail')

function autenticar()
{
    let form = document.querySelector('#formulario')

    if (inputPassword1.value != inputPassword2.value)
    {
        inputPassword1.value = ''
        inputPassword2.value = ''
        alert('As senhas não conferem!')
    }
    else if (inputPassword1.value == '')
    {
        alert('Não é permitido cadastrar uma senha vazia! Preencha os campos de tente novamente!')
    }
}
function login()
{
    inputName.parentNode.removeChild(inputName)
    confimPass.parentNode.removeChild(confimPass)
    btCadastro.classList.remove('btn-primary')
    btCadastro.classList.add('btn-success')
    btCadastro.innerHTML = 'Entrar'

    titulo.innerHTML = 'Entre Agora!'
    inputEmail.focus()

    btEntrar.classList.remove('btn-success')
    btEntrar.classList.add('btn-primary')
    btEntrar.innerHTML = 'Cadastre-se'
    btEntrar.setAttribute('onclick', 'cadastro()')
}
function cadastro()
{
    let index = document.querySelector('#index')
    index.href = 'file:///C:/Users/Dell%20i5/Documents/Git/projeto-estudos/views/index.html'
}