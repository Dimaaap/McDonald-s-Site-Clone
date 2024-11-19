from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import MenuCategory, Product

from .serializers import MenuCategorySerializer, ProductSerializer


class MenuCategoryViewSet(viewsets.ModelViewSet):
    queryset = MenuCategory.objects.all()
    serializer_class = MenuCategorySerializer
    permission_classes = [AllowAny]


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class =  ProductSerializer
    permission_classes = [AllowAny]
