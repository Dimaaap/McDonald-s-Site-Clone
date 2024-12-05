from rest_framework import serializers

from .models import ProductsModel


class AllProductsSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductsModel
        fields = "__all__"
        read_only_fields = ["id", "image"]


class UniqueProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductsModel
        fields = "__all__"
        read_only_fields = ["id", "image"]