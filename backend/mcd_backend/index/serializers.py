from rest_framework import serializers
from .models import MenuCategory, Product


class MenuCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = MenuCategory
        fields = "__all__"
        read_only_fields = ["id", "image"]


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ["id", "title", "image"]
        read_only_fields = fields


class UniqueProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = "__all__"
        read_only_fields = ["id", "title", "image"]