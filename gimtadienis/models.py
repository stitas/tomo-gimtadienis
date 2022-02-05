from django.db import models

# Create your models here.
class Question(models.Model):
    question = models.CharField(max_length=200,null=True)
    opt1 = models.CharField(max_length=200,null=True)
    opt2 = models.CharField(max_length=200,null=True)
    opt3 = models.CharField(max_length=200,null=True)
    opt4 = models.CharField(max_length=200,null=True)
    ans = models.CharField(max_length=200,null=True)
    
    def __str__(self):
        return self.question
    
class Code(models.Model):
    title = models.CharField(max_length=200,null=True)
    code = models.CharField(max_length=200,null=True)
    
    def __str__(self):
        return self.title