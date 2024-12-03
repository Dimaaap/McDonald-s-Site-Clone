from uuid import uuid4

from django.db import models


class ProductsModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    image = models.URLField(default='')
    title = models.CharField(max_length=255, default="")
    price = models.IntegerField(default=0)
    is_promo = models.BooleanField(default=False)
    description = models.TextField(default="")

    def __str__(self):
        return f"{self.title} {self.price}грн"
