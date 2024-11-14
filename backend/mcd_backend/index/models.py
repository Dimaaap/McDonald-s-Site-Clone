from uuid import uuid4

from django.db import models

class Region(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    slug = models.SlugField(default="")
    title = models.CharField(max_length=150, default="")

    def __str__(self):
        return self.title


class City(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    title = models.CharField(max_length=155, default="")
    slug = models.SlugField(max_length=155, default="")
    region = models.ForeignKey(Region, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class CityArea(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    title = models.CharField(max_length=155, default="")
    slug = models.SlugField(max_length=155, default="")
    city = models.ForeignKey(City, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.title} район"

class Restaurant(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    title = models.CharField(max_length=155, default="")
    address = models.CharField(max_length=255, default="")
    number = models.IntegerField(unique=True)
    phone_number = models.CharField(max_length=10, unique=True)
    email = models.EmailField(max_length=80, unique=True)
    open_time = models.TimeField(default="05:00")
    close_time = models.TimeField(default="22:30")
    is_open_now = models.BooleanField(default=False)
    is_has_generator = models.BooleanField(default=True)

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
    id = models.UUIDField(primary_key=True, default=uuid4)
    specialization = models.CharField(max_length=200, default="") #TODO: Make this field enum
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
    cv = models.FileField(upload_to="/candidates/cv", default="")
    additional_info = models.TextField(default="")

    vacancy = models.ForeignKey(OfficeVacancy, on_delete=models.CASCADE)

    def __str__(self):
        return self.full_name



class RestaurantVacancyFeedback(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    name = models.CharField(max_length=255, default="")
    birth_date = models.DateField(default="")
    phone_number = models.CharField(max_length=10, default="")
    can_work_any_time = models.BooleanField(default=False)
    when_can_work = models.CharField(max_length=100, default="") # TODO: Make this field enum
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
    calories = models.IntegerField(default=0)
    description = models.TextField(default="")
    fats = models.IntegerField(default=0)
    carbonhydrates = models.IntegerField(default=0)
    proteins = models.IntegerField(default=0)
    sault = models.FloatField(default=0)
    sugar = models.FloatField(default=0)
    compound = models.TextField(default="")
    price = models.IntegerField()

    similar_product = models.ManyToManyField("Product", on_delete=models.CASCADE)
    categories = models.ManyToManyField(MenuCategory, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.title}, {self.weight}г'
