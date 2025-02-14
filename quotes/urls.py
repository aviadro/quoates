from django.urls import path
from .views import get_quotes

urlpatterns = [
    path('quotes/<str:category>/', get_quotes, name='get_quotes'),
]
