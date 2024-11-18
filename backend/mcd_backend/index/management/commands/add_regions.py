from django.core.management.base import BaseCommand, CommandError

from index.store import DataStorage
from index.models import Region

regions = DataStorage.REGIONS


class Command(BaseCommand):
    help = "Insert regions in db"

    def handle(self, *args, **kwargs):
        try:
            for region in regions:
                new_region = Region.objects.create(**region)
                new_region.save()
        except Exception as e:
            raise CommandError(e)
        return "done"
