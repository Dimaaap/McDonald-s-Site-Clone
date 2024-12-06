from django.core.management.base import BaseCommand, CommandError

from index.store import DataStorage
from index.models import HappyMealToys, HappyMealCollection

toys = DataStorage.HAPPY_MEAL_TOYS


class Command(BaseCommand):
    help = "Insert happy meal toys in db"

    def handle(self, *args, **kwargs):
        try:
            for toy in toys:
                collection = HappyMealCollection.objects.get(title=toy["collection"])
                new_toy = HappyMealToys(title=toy["title"], image=toy["image"],
                                        is_active=toy["is_active"], collection=collection)
                new_toy.save()
        except Exception as e:
            raise CommandError(e)
        return "done"