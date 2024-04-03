from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Product, Category


def list_products(request):
    products = Product.objects.all()
    data = {"products": list(products.values())}
    return JsonResponse(data)


def get_product(request, id):
    product = get_object_or_404(Product, id=id)
    data = {'id': product.id, 'name': product.name, 'price': product.price, 'description': product.description, 'count': product.count, 'is_active': product.is_active}
    return JsonResponse(data)


def list_categories(request):
    categories = Category.objects.all()
    data = {"categories": list(categories.values())}
    return JsonResponse(data)


def get_category(request, id):
    category = get_object_or_404(Category, id=id)
    data = {'id': category.id, 'name': category.name}
    return JsonResponse(data)


def list_products_by_category(request, id):
    category = get_object_or_404(Category, id=id)
    products = Product.objects.filter(description__contains=category.name)
    data = {"products": list(products.values())}
    return JsonResponse(data)
