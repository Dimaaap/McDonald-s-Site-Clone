from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from .models import ProductsModel
from .serializers import AllProductsSerializer


class ProductsViewSet(viewsets.ModelViewSet):
    queryset = ProductsModel.objects.all()
    serializer_class = AllProductsSerializer
    permission_classes = [AllowAny]



