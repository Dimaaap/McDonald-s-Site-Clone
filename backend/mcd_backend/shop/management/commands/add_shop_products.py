from django.core.management.base import BaseCommand, CommandError

from shop.store import DataStorage
from shop.models import ProductsModel

products = DataStorage.PRODUCTS


class Command(BaseCommand):
    help = "Insert shop products in db"

    def handle(self, *args, **kwargs):
        try:
            for product in products:
                    new_product = ProductsModel.objects.create(**product)
                    new_product.save()
        except Exception as e:
            raise CommandError(e)
        return "done"