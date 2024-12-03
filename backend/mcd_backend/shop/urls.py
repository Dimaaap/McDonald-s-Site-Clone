from django.urls import path

from .views import ProductsViewSet

urlpatterns = [
    path("/all-products", ProductsViewSet.as_view({"get": "list"}))
]