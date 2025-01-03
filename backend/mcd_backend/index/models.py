from uuid import uuid4

from django.db import models
from django.template.defaultfilters import slugify

class Region(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    slug = models.SlugField(default="")
    title = models.CharField(max_length=150, default="")

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.slug = slugify(self.title)

class City(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    title = models.CharField(max_length=155, default="")
    slug = models.SlugField(max_length=155, default="")

    has_glovo_delivery = models.BooleanField(default=False)
    has_bolt_delivery = models.BooleanField(default=False)
    glovo_area_image = models.URLField(default="")
    bolt_area_image = models.URLField(default="")

    region = models.ForeignKey(Region, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title


class CityArea(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    title = models.CharField(max_length=155, default="")
    slug = models.SlugField(max_length=155, default="")
    city = models.ForeignKey(City, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"{self.title} район"

class Restaurant(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    title = models.CharField(max_length=155, default="")
    address = models.CharField(max_length=255, default="")
    number = models.IntegerField()
    phone_number = models.CharField(max_length=20)
    main_open_time = models.CharField(default="05:00", max_length=5)
    drive_open_time = models.CharField(default="05:00", max_length=5)
    main_close_time = models.CharField(default="22:30", max_length=5)
    drive_close_time = models.CharField(default="05:00", max_length=5)
    express_open_time = models.CharField(default="05:00", max_length=5)
    express_close_time = models.CharField(default="05:00", max_length=5)

    is_open_now = models.BooleanField(default=True)
    is_has_generator = models.BooleanField(default=True)
    is_has_mcdrive = models.BooleanField(default=True)
    is_has_bicycle_parking = models.BooleanField(default=True)
    is_has_express_window = models.BooleanField(default=False)
    is_has_delivery = models.BooleanField(default=True)

    area = models.ForeignKey(CityArea, on_delete=models.CASCADE)
    city = models.ForeignKey(City, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.city}, {self.area} {self.address} №{self.number} '{self.title}'"


class Office(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    address = models.CharField(max_length=255, default="")
    city_id = models.ForeignKey(City, on_delete=models.CASCADE)

    def __str__(self):
        return self.address


class RestaurantVacancy(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    vacancy_title = models.CharField(max_length=255, default="")
    open_date = models.DateField(auto_created=True)
    is_closed = models.BooleanField(default=False)

    restaurant_id = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    def __str__(self):
        return self.vacancy_title


class OfficeVacancy(models.Model):

    class VacancySpecialization(models.TextChoices):
        NONE = "", ""
        LEGAL = "Legal", "Legal"
        TECHNOLOGY = "Technology", "Technology"
        IMPACT = "Impact", "Impact"
        MARKETING = "Marketing", "Marketing"
        PEOPLE = "People", "People"
        FINANCE = "Finance", "Finance"
        OPERATIONS = "Operations", "Operations"
        DEVELOPMENT = "Development", "Development"
        SUPPLY_CHAIN = "Supply Chain", "Supply Chain"

    id = models.UUIDField(primary_key=True, default=uuid4)
    specialization = models.CharField(max_length=200,
                                      choices=VacancySpecialization.choices,
                                      default=VacancySpecialization.NONE)
    title = models.CharField(max_length=255, default="")
    description = models.TextField(default="")
    open_date = models.DateField(auto_created=True)
    is_closed = models.BooleanField(default=False)

    office = models.ForeignKey(Office, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class OfficeVacancyFeedback(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    full_name = models.CharField(max_length=155, default="")
    cv = models.FileField(upload_to="candidates/cv", default="")
    additional_info = models.TextField(default="")

    vacancy = models.ForeignKey(OfficeVacancy, on_delete=models.CASCADE)

    def __str__(self):
        return self.full_name



class RestaurantVacancyFeedback(models.Model):

    class WorkTime(models.TextChoices):
        MORNING = "зранку", "зранку"
        DAY = "вдень", "вдень"
        AFTERNOON = "ввечері", "ввечері"
        NIGHT = "вночі", "вночі"
        MIX_TIME = "змішані години", "змішані години"

    id = models.UUIDField(primary_key=True, default=uuid4)
    name = models.CharField(max_length=255, default="")
    birth_date = models.DateField(default="")
    phone_number = models.CharField(max_length=10, default="")
    can_work_any_time = models.BooleanField(default=False)
    when_can_work = models.CharField(max_length=100, choices=WorkTime.choices,
                                     default=WorkTime.MORNING)
    has_experience = models.BooleanField(default=False)
    additional_info = models.TextField(default="")

    vacancy_id = models.ForeignKey(RestaurantVacancy, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name}, {self.phone_number}"


class MenuCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    title = models.CharField(max_length=200, default="")
    image = models.URLField(max_length=255, default="")

    def __str__(self):
        return self.title


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    title = models.CharField(max_length=155, default="")
    image = models.URLField(max_length=255, default="")
    weight = models.IntegerField(default=0)
    volume = models.IntegerField(default=0)
    calories = models.IntegerField(default=0)
    description = models.TextField(default="")
    fats = models.IntegerField(default=0)
    carbonhydrates = models.IntegerField(default=0)
    proteins = models.IntegerField(default=0)
    sault = models.FloatField(default=0)
    sugar = models.FloatField(default=0)
    compound = models.TextField(default="")
    alergens = models.TextField(default="")
    price = models.IntegerField(default=0)

    similar_product = models.ManyToManyField("self", blank=True)
    categories = models.ManyToManyField(MenuCategory, blank=True)

    def __str__(self):
        return f'{self.title}, {self.weight}г'


class HappyMealCollection(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True)
    title = models.CharField(max_length=150, default="")

    def __str__(self):
        return self.title


class HappyMealToys(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True)
    title = models.CharField(max_length=100, default="")
    image = models.URLField(default="")
    is_active = models.BooleanField(default=False)

    collection = models.ForeignKey(HappyMealCollection, on_delete=models.CASCADE)

    def __str__(self):
        return self.title