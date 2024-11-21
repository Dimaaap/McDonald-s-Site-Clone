from django.core.management.base import BaseCommand, CommandError

from index.store import DataStorage
from index.models import City, Region

cities = DataStorage.CITIES


class Command(BaseCommand):
    help = "Insert cities in db"

    def handle(self, *args, **kwargs):
        try:
            for city in cities:
                new_city = City.objects.create(title=city["title"],
                                               has_glovo_delivery=city.get("has_glovo_delivery", False),
                                               has_bolt_delivery=city.get("has_bolt_delivery", False),
                                               glovo_area_image=city.get("glovo_area_image", ""),
                                               bolt_area_image=city.get("bolt_area_image", ""))
                city_region = city["region"]
                if city_region:
                    new_city.region = Region.objects.get(title=city["region"])
                new_city.save()
        except Exception as e:
            raise CommandError(e)
        return "done"