function login()
{
    let inputName = document.querySelector('#inputName')
    let senha = document.querySelector('#inputSenha')
    let titulo = document.querySelector('#loginTitle')
    let btCadastro = document.querySelector('#btCadastro')
    
    inputName.parentNode.removeChild(inputName)
    senha.parentNode.removeChild(senha)
    btCadastro.classList.remove('btn-primary')
    btCadastro.classList.add('btn-success')
    titulo.innerHTML = 'Entre Agora!'
    btCadastro.innerHTML = 'Entrar'
}