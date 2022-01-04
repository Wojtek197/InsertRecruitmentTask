from django.db import models
from rest_framework import serializers
from InsertRecruitmentTaskApp.models import Category, Offer

class CategorySerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Category
        fields = ('Id',
                  'Name',
                  'Ordering')

class OfferSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Offer
        fields = ('Id',
                  'Title',
                  'Description',
                  'Price',
                  'Category',
                  'Created_at')