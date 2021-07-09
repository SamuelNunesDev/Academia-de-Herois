function login()
{
    let inputPassowrd1 = document.querySelector('#InputPassword1')
    let InputPassword2 = document.querySelector('#InputPassword2')
    let form = document.querySelector('#formulario')

    if (inputPassowrd1.value === InputPassword2.value)
    {
        form.submit()
    } 
}

let msg = document.querySelector('#msg')

if (msg.innerHTML == 'Sucesso! Usuário cadastrado com sucesso.')
{
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
}