from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required
from .models import Question, Code

@login_required
def index(request):
    return render(request,'index.html')

@login_required
def quiz(request):
    if request.method == 'POST':
        correct = 0
        total = 0
        questions = Question.objects.all()
        for q in questions:
            total += 1
            if q.ans == request.POST.get('question_'+str(total)):
                correct += 1
        percent = (correct*100)/total
        context = {
            'total':total,
            'correct':correct,
            'percent':percent
        }
        return render(request,'quiz_result.html',context)
    else:
        questions = Question.objects.all()
        context = {
            'questions':questions
        }
        return render(request,'quiz.html',context)

@login_required
def puzzle(request):
    return render(request,'puzzle.html')

@login_required
def word_search(request):
    return render(request,'word_search.html')

@login_required
def secret_code(request):
    return render(request,'secret_code.html')

@login_required
def end(request):
    code = Code.objects.filter(title='Eneba kodas gimtadienis').values_list('code')
    context = {
        'code':code[0][0]
        }
    return render(request,'end.html',context)