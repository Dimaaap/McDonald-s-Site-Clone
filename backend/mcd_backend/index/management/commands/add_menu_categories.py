from django.core.management.base import BaseCommand, CommandError

from index.store import DataStorage
from index.models import MenuCategory

menu_categories = DataStorage.MENU_CATEGORIES


class Command(BaseCommand):
    help = "Insert menu categories into bd"

    def handle(self, *args, **kwargs):
        for category in menu_categories:
            new_category = MenuCategory(**category)
            try:
                new_category.save()
            except Exception as e:
                raise CommandError(e)
        return "done"
