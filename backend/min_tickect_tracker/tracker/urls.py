from django.urls import path
from . import views

app_name = 'tracker'

urlpatterns = [
    path('', views.TicketListCreateView.as_view()),
    path('<int:pk>/', views.UpdateTicketView.as_view()),
    path('stats/', views.TicketStatsView.as_view()),
]

