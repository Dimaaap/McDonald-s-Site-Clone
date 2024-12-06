from rest_framework import serializers
from .models import MenuCategory, Product, City, HappyMealToys


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


class HappyMealToysSerializer(serializers.ModelSerializer):

    class Meta:
        model = HappyMealToys
        fields = ["id", "title", "image"]
        read_only_fields = fields


class UniqueProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = "__all__"
        read_only_fields = ["id", "title", "image"]


class CitiesSerializer(serializers.ModelSerializer):

    class Meta:
        model = City
        fields = ["id", "title", "has_glovo_delivery", "has_bolt_delivery",
                  "glovo_area_image", "bolt_area_image"]
        read_only_fields = fields