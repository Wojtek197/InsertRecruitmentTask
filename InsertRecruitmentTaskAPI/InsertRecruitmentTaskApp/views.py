from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from InsertRecruitmentTaskApp.models import Category, Offer
from InsertRecruitmentTaskApp.serializers import CategorySerializer, OfferSerializer

# Create your views here.
@csrf_exempt
def categoryApi(request, id=0):
    if request.method=='GET':
        category = Category.objects.all()
        category_serializer = CategorySerializer(category, many=True)
        return JsonResponse(category_serializer.data, safe=False)

    elif request.method=='POST':
        category_data = JSONParser().parse(request)
        category_serializer = CategorySerializer(data = category_data)
        if category_serializer.is_valid():
            category_serializer.save()
            return JsonResponse("Pomyślnie zapisano!", safe=False)
        return JsonResponse ("Błąd zapisu!", safe=False)
    
    elif request.method=='PUT':
        category_data = JSONParser().parse(request)
        category = Category.objects.get(Id=category_data['Id'])
        category_serializer = CategorySerializer(category, data = category_data)
        if category_serializer.is_valid():
            category_serializer.save()
            return JsonResponse("Pomyślnie zapisano!", safe=False)
        return JsonResponse ("Błąd zapisu!", safe=False)

    elif request.method=='DELETE':
        category = Category.objects.get(Id = id)
        category.delete()
        return JsonResponse("Pomyślnie usunięto!", safe=False)


@csrf_exempt
def offerApi(request, id=0):
    if request.method=='GET':
        offer = Offer.objects.all()
        offer_serializer = OfferSerializer(offer, many=True)
        return JsonResponse(offer_serializer.data, safe=False)

    elif request.method=='POST':
        offer_data = JSONParser().parse(request)
        offer_serializer = OfferSerializer(data = offer_data)
        if offer_serializer.is_valid():
            offer_serializer.save()
            return JsonResponse("Pomyślnie zapisano!", safe=False)
        return JsonResponse ("Błąd zapisu!", safe=False)
    
    elif request.method=='PUT':
        offer_data = JSONParser().parse(request)
        offer = Offer.objects.get(Id=offer_data['Id'])
        offer_serializer = OfferSerializer(offer, data = offer_data)
        if offer_serializer.is_valid():
            offer_serializer.save()
            return JsonResponse("Pomyślnie zapisano!", safe=False)
        return JsonResponse ("Błąd zapisu!", safe=False)

    elif request.method=='DELETE':
        offer = Offer.objects.get(Id = id)
        offer.delete()
        return JsonResponse("Pomyślnie usunięto!", safe=False)
