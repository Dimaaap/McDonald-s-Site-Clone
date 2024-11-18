from django.core.management.base import BaseCommand, CommandError

from index.store import DataStorage
from index.models import City, CityArea

cities_area = DataStorage.CITIES_AREA


class Command(BaseCommand):
    help = "Insert city areas in db"

    def handle(self, *args, **kwargs):
        try:
            for area in cities_area:
                new_area = CityArea.objects.create(title=area["title"])
                print(City.objects.get(title=area["city"]))
                new_area.city = City.objects.get(title=area["city"])
                new_area.save()
        except Exception as e:
            raise CommandError(e)
        return "done"