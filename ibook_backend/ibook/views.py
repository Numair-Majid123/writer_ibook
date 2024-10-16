from rest_framework import generics
from .models import Book, BookShare
from .serializers import BookSerializer, BookShareSerializer, UserSerializer

# UserCreateView
class UserCreateView(generics.CreateAPIView):
    serializer_class = UserSerializer

# Book Views
class BookListCreateView(generics.ListCreateAPIView):

    serializer_class = BookSerializer

    def perform_create(self, serializer):
        book = Book.objects.get(id=self.request.data["book_id"])
        serializer.save(book=book, author_id=self.request.user.id)

    def get_queryset(self):
        return Book.objects.filter(author=self.request.data)


class BookDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


# BookShare Views


class BookShareListCreateView(generics.ListCreateAPIView):
    queryset = BookShare.objects.all()
    serializer_class = BookShareSerializer

    def perform_create(self, serializer):
        book = Book.objects.get(id=self.request.data["book_id"])
        serializer.save(book=book)


class BookShareDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = BookShare.objects.all()
    serializer_class = BookShareSerializer
