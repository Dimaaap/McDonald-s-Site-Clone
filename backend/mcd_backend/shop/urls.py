from django.urls import path

from .views import ProductsViewSet, UniqueProductView

urlpatterns = [
    path("/all-products", ProductsViewSet.as_view({"get": "list"})),
    path("/product/<uuid:product_id>/", UniqueProductView.as_view())
]