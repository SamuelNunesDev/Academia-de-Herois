from django.shortcuts import redirect, render, HttpResponseRedirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required


# Create your views here.


def index(request):
    return render(request, 'index.html')

@require_POST
def register(request):
    try:
        usuario_aux = User.objects.get(email=request.POST['email'])
        if usuario_aux:
            messages.error(request, 'Erro! Já existe um usuário com o mesmo e-mail.')
            return render(request, 'index.html')
    except User.DoesNotExist:
        try:
            usuario_aux = User.objects.get(username=request.POST['username'])
            if usuario_aux:
                messages.error(request, 'Erro! Já existe um usuário com o mesmo nome.')
                return render(request, 'index.html')

        except User.DoesNotExist:
            username = request.POST['username']
            email = request.POST['email']
            password = request.POST['password']
            novo_usuraio = User.objects.create_user(username=username, email=email, password=password)
            novo_usuraio.save()
            messages.success(request, 'Sucesso! Usuário cadastrado com sucesso.')
            return render(request, 'index.html')


def login_user(request):
    return render(request, 'login.html')


@require_POST
def entrar(request):
    if request.method == 'POST':
        usuario_aux = User.objects.get(email=request.POST['email'])
        usuario = authenticate(username=usuario_aux.username,
                                password=request.POST['password'])

    if usuario is not None:
        login(request, usuario)
        return render(request, 'homeProf.html')
    
    else:
        messages.error(request, 'Usuário ou senha inválido!')

    return render(request, 'login.html')


@login_required
def logout_user(request):
    logout(request)
    return redirect('/login_user')