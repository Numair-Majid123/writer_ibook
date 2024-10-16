from django.db import models
from django.contrib.auth.models import User


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Book(BaseModel):
    title = models.CharField(max_length=255)
    description = models.TextField()
    content = models.JSONField()
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="written_books"
    )


class BookShare(BaseModel):
    shared_book = models.ForeignKey(
        Book, on_delete=models.CASCADE, related_name="shares"
    )
    shared_by = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="shared_books"
    )
    shared_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
