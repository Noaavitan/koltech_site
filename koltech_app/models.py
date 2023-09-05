from django.db import models

# Create your models here.


class contect(models.Model):
    name = models.CharField(null=True, blank=True,max_length=50)
    mail = models.EmailField( blank=True)
    phone = models.CharField(null=True, blank=True,max_length=15)
    message = models.CharField(null=True, blank=True,max_length=350)
    def __str__(self):
        return  f"{self.name} | {self.phone}"
