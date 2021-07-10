function login()
{
    let inputPassword1 = document.querySelector('#InputPassword1')
    let inputPassword2 = document.querySelector('#InputPassword2')
    let form = document.querySelector('#formulario')

    if (inputPassword1.value != inputPassword2.value)
    {
        inputPassword1.value = ''
        inputPassword2.value = ''
        alert('As senhas não conferem!')
    }
    else if (inputPassword1.value != '')
    {
        form.submit()
    }
    else
    {
        alert('Não é permitido cadastrar uma senha vazia! Preencha os campos de tente novamente!')
    }
}
/*
let inputName = document.querySelector('#inputName')
let confimPass = document.querySelector('#inputSenha')
let titulo = document.querySelector('#loginTitle')
let btCadastro = document.querySelector('#btCadastro')

inputName.parentNode.removeChild(inputName)
confimPass.parentNode.removeChild(confimPass)
btCadastro.classList.remove('btn-primary')
btCadastro.classList.add('btn-success')
titulo.innerHTML = 'Entre Agora!'
btCadastro.innerHTML = 'Entrar'
*/