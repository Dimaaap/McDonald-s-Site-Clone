from django.core.exceptions import ObjectDoesNotExist
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from .models import ProductsModel
from .serializers import AllProductsSerializer, UniqueProductSerializer


class ProductsViewSet(viewsets.ModelViewSet):
    queryset = ProductsModel.objects.all()
    serializer_class = AllProductsSerializer
    permission_classes = [AllowAny]


class UniqueProductView(APIView):

    def get(self, request, product_id):
        try:
            product = ProductsModel.objects.get(id=product_id)
        except ObjectDoesNotExist:
            return Response(
                {"error": "Product was not found"},
                status=status.HTTP_404_NOT_FOUND
            )
        serializer = UniqueProductSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)