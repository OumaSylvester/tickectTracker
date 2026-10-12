from django.db import models
from rest_framework.response import Response
from rest_framework import generics
from .models import Ticket
from .serializers import TicketSerializer
from .pagination import TicketPagination


class TicketListCreateView(generics.ListCreateAPIView):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer
    pagination_class = TicketPagination

    def get_queryset(self):
        status = self.request.query_params.get('status', None)
        queryset = Ticket.objects.all()
        if status:
            queryset = queryset.filter(status=status)
        return queryset


class UpdateTicketView(generics.UpdateAPIView):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer

    # update ticket's status/priority
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.status = request.data.get('status', instance.status)
        instance.priority = request.data.get('priority', instance.priority)
        instance.save()
        return Response({'status': 'updated'})
  
    
class TicketStatsView(generics.ListAPIView):

    def get_queryset(self):
        """Get the statistics of tickets by status."""
        queryset = Ticket.objects.values('status').annotate(
            count=models.Count('id')
        )
        return queryset
