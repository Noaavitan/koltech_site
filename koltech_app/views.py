from django.core.mail import send_mail
from django.shortcuts import render
from django.http import HttpResponse
from .extra_utils import *
from .models import *
# Create your views here.




def index(request):
    if request.method == 'POST':
        print(request.POST)
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')
        form_data = {
            'name': name,
            'mail': email,
            'phone': phone,
            'message': message,
        }

        contect.objects.create(**form_data).save()

    context = {}
    context["list_img"] = list_img
    print(list_img)
    return render(request,r'koltech_app/index.html',context )

