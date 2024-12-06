from django.core.management.base import BaseCommand, CommandError

from index.store import DataStorage
from index.models import HappyMealCollection

collections = DataStorage.HAPPY_MEAL_COLLECTIONS


class Command(BaseCommand):
    help = "Insert happy meal collections in db"

    def handle(self, *args, **kwargs):
        try:
            for collection in collections:
                    new_collection = HappyMealCollection(title=collection)
                    new_collection.save()
        except Exception as e:
            raise CommandError(e)
        return "done"