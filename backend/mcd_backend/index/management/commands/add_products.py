from django.core.management.base import BaseCommand, CommandError

from index.store import DataStorage
from index.models import Product, MenuCategory


products = DataStorage.PRODUCTS


class Command(BaseCommand):
    help = "Insert menu products in db"

    def handle(self, *args, **kwargs):
        try:
            for product in products:
                new_product = Product.objects.create(
                    title=product["title"], image=product["image"],
                    weight=product.get("weight", 0),
                    volume=product.get("volume", 0),
                    calories=product.get("calories", 0),
                    description=product.get("description", ""),
                    fats=product.get("fats", 0),
                    carbonhydrates=product.get("carbonhydrates", 0),
                    proteins=product.get("proteins", 0),
                    sault=product.get("sault", 0),
                    sugar=product.get("sugar", 0),
                    compound=product.get("compound", ""),
                    alergens=product.get("alergens", "")
                )
                categories_in_db = MenuCategory.objects.filter(title__in=product["categories"])
                new_product.categories.set(categories_in_db)
                product.popitem()
        except Exception as e:
            raise CommandError(e)
        return "done"

