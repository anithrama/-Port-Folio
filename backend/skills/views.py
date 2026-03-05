from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Skill
from .serializers import SkillSerializer

@api_view(['GET'])
def skill_list(request):

    skills = Skill.objects.all()
    serializer = SkillSerializer(skills, many=True)

    return Response(serializer.data)
