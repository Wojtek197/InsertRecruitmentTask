from django.db import models

# Create your models here.

class Category(models.Model):
    Id = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=100)
    Ordering = models.IntegerField()

class Offer(models.Model):
    Id = models.AutoField(primary_key=True)
    Title = models.CharField(max_length=100)
    Description = models.CharField(max_length=255)
    Price = models.DecimalField(max_digits=11, decimal_places=2)
    Category = models.CharField(max_length=100)
    Created_at = models.DateField()

