import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Quote
from .serializers import QuoteSerializer

EXTERNAL_API_URL = "https://zenquotes.io/api/random"

CATEGORY_MAP = {
    "motivation": "success",
    "humor": "funny",
    "movies": "movie",
    "philosophy": "philosophy"
}

@api_view(['GET'])
def get_quotes(request, category):
    mapped_category = CATEGORY_MAP.get(category, "success")
    try:
        response = requests.get(EXTERNAL_API_URL)
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                data = data[0]

            quote, created = Quote.objects.get_or_create(
                text=data["q"],
                author=data["a"],
                category=category
            )
            serializer = QuoteSerializer(quote)
            return Response(serializer.data)
    
    except requests.exceptions.RequestException as e:
        return Response({"error": f"Failed to fetch quotes: {str(e)}"}, status=500)
    
    return Response({"error": "Failed to fetch quotes"}, status=500)
