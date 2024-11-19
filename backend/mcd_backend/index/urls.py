from django.urls import path

from .views import MenuCategoryViewSet, ProductViewSet

urlpatterns = [
    path("menu-categories/all/", MenuCategoryViewSet.as_view({'get': 'list'})),
    path("products/all/", ProductViewSet.as_view({'get': 'list'}))
]