from django.core.management.base import BaseCommand, CommandError

from index.store import DataStorage
from index.models import City, Region

cities = DataStorage.CITIES


class Command(BaseCommand):
    help = "Insert cities in db"

    def handle(self, *args, **kwargs):
        try:
            for city in cities:
                new_city = City.objects.create(title=city["title"])
                city_region = city["region"]
                if city_region:
                    new_city.region = Region.objects.get(title=city["region"])
                new_city.save()
        except Exception as e:
            raise CommandError(e)
        return "done"