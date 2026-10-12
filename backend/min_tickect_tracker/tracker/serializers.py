from rest_framework import serializers
from .models import Ticket


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = "__all__"


class UpdateTicketStatusAndPrioritySerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['status', 'priority']
    
class TicketStatSerializer(serializers.Serializer):
    status = serializers.CharField()
    count = serializers.IntegerField()