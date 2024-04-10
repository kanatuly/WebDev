from rest_framework import generics
from rest_framework.renderers import JSONRenderer

from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


class CompanyListAPIView(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    renderer_classes = [JSONRenderer]


class CompanyDetailAPIView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'id'
    renderer_classes = [JSONRenderer]


class CompanyVacanciesListAPIView(generics.ListAPIView):
    serializer_class = VacancySerializer
    renderer_classes = [JSONRenderer]

    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id=company_id)


class VacancyListAPIView(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    renderer_classes = [JSONRenderer]


class VacancyDetailAPIView(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_field = 'id'
    renderer_classes = [JSONRenderer]


class TopTenVacanciesListAPIView(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:10]
    serializer_class = VacancySerializer
    renderer_classes = [JSONRenderer]
