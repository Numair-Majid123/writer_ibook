from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import (
    BookListCreateView,
    BookDetailView,
    BookShareListCreateView,
    BookShareDetailView,
    UserCreateView
)

urlpatterns = [
    # Auth Urls
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('sign-in/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('sign-up/', UserCreateView.as_view(), name='create-user'), 
    # Book URLs
    path("books/", BookListCreateView.as_view(), name="book-list"),
    path("books/<int:pk>/", BookDetailView.as_view(), name="book-detail"),
    # BookShare URLs
    path("book-shares/", BookShareListCreateView.as_view(), name="bookshare-list"),
    path(
        "book-shares/<int:pk>/", BookShareDetailView.as_view(), name="bookshare-detail"
    ),
]
