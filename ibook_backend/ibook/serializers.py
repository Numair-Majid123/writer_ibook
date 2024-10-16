from rest_framework import serializers
from .models import Book, BookShare, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email"]
        extra_kwargs = {
            'password': {'write_only': True}  # Ensure password is write-only
        }
    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])  # Hash the password
        user.save()
        return user


class BookSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Book
        fields = [
            "id",
            "title",
            "description",
            "content",
            "created_at",
            "updated_at",
            "author",
        ]


class BookShareSerializer(serializers.ModelSerializer):
    book = BookSerializer(read_only=True)

    class Meta:
        model = BookShare
        fields = [
            "id",
            "book",
            "shared_at",
            "name",
            "email",
            "address",
            "city",
            "created_at",
            "updated_at",
        ]
