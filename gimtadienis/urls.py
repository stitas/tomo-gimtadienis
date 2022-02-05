from django.urls import path
from . import views

urlpatterns = [
    path('index/',views.index,name='index'),
    path('quiz/',views.quiz,name='quiz'),
    path('puzzle/',views.puzzle,name='puzzle'),
    path('word-search/',views.word_search,name='word_search'),
    path('secret-code/',views.secret_code,name='secret_code'),
    path('end/',views.end,name='end')
]
