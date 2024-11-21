from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q

from .models import MenuCategory, Product, City
from .serializers import (MenuCategorySerializer,
                          ProductSerializer,
                          UniqueProductSerializer,
                          CitiesSerializer)


class MenuCategoryViewSet(viewsets.ModelViewSet):
    queryset = MenuCategory.objects.all()
    serializer_class = MenuCategorySerializer
    permission_classes = [AllowAny]


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class =  ProductSerializer
    permission_classes = [AllowAny]


class AllCitiesWithDelivery(viewsets.ModelViewSet):
    queryset = City.objects.filter(Q(has_glovo_delivery=True) | Q(has_bolt_delivery=True))
    serializer_class = CitiesSerializer
    permission_classes = [AllowAny]

class UniqueProductView(APIView):
    def get(self, request, product_id):
        try:
            product = Product.objects.get(id=product_id)
        except ObjectDoesNotExist:
            return Response(
                {"error": "Product was not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        serializer = UniqueProductSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)

class UniqueCategoryView(APIView):
    def get(self, request, category_id):
        try:
            category = MenuCategory.objects.get(id=category_id)
        except ObjectDoesNotExist:
            return Response({
                "error": "Category was not found"},
                status=status.HTTP_404_NOT_FOUND
            )
        products = Product.objects.filter(categories=category)
        serializer = ProductSerializer(products, many=True)

        response_data = {
            "category": {
                "id": str(category.id),
                "title": category.title
            },
            "products": serializer.data
        }
        return Response(response_data, status=status.HTTP_200_OK)

