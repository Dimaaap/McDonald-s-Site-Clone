from django.core.management.base import BaseCommand, CommandError

from index.store import DataStorage
from index.models import CityArea, City, Restaurant

restaurants = DataStorage.RESTAURANTS


class Command(BaseCommand):
    help = "Insert restaurants in db"

    def handle(self, *args, **kwargs):
        try:
            for restaurant in restaurants:
                print(restaurant)
                city = City.objects.get(title=restaurant.get('city', ''))
                city_area = CityArea.objects.get(title=restaurant.get('area', ''), city=city)
                restaurant = Restaurant.objects.create(title=restaurant.get('title', ''),
                                                        address=restaurant.get('address', ''),
                                                        number=restaurant.get('number', ''),
                                                        phone_number=restaurant.get('phone_number', ''),
                                                        main_open_time=restaurant.get('main_open_time', ''),
                                                        drive_open_time=restaurant.get('drive_open_time', ''),
                                                        express_open_time=restaurant.get('express_open_time', ''),
                                                        main_close_time=restaurant.get('main_close_time', ''),
                                                        drive_close_time=restaurant.get('drive_close_time', ''),
                                                        express_close_time=restaurant.get('express_close_time', ''),
                                                        is_has_mcdrive=restaurant.get('is_has_mcdrive', False),
                                                        is_has_generator=restaurant.get('is_has_generator', False),
                                                        is_has_bicycle_parking=restaurant.get('is_has_bicycle_parking', False),
                                                        is_has_express_window=restaurant.get('is_has_express_window', False),
                                                        is_has_delivery=restaurant.get('is_has_delivery', False),
                                                        area=city_area,
                                                        city=city)
                restaurant.save()
        except Exception as e:
            raise CommandError(e)

