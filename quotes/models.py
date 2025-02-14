from django.db import models

class Quote(models.Model):
    CATEGORY_CHOICES = [
        ('motivation', 'Motivation'),
        ('humor', 'Humor'),
        ('tv_movies', 'TV & Movies'),
        ('philosophy', 'Philosophy'),
    ]

    text = models.TextField()
    author = models.CharField(max_length=255, blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)

    def __str__(self):
        return f'"{self.text}" - {self.author}'
