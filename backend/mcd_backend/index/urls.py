from django.urls import path

from .views import (MenuCategoryViewSet,
                    ProductViewSet,
                    UniqueCategoryView,
                    UniqueProductView,
                    AllCitiesWithDelivery, HappyMealToysViewSet)

urlpatterns = [
    path("menu-categories/all/", MenuCategoryViewSet.as_view({'get': 'list'})),
    path("products/all/", ProductViewSet.as_view({'get': 'list'})),
    path("products/category/<uuid:category_id>/", UniqueCategoryView.as_view()),
    path("product/<uuid:product_id>/", UniqueProductView.as_view()),
    path("cities-with-delivery/all/", AllCitiesWithDelivery.as_view({'get': 'list'})),
    path("toys/all/", HappyMealToysViewSet.as_view({"get": "list"}))
]