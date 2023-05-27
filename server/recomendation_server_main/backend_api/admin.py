from django.contrib import admin
from .models import Users, Groups, Groups_Now, Attends
from import_export import resources
from import_export.admin import ImportExportModelAdmin

# класс обработки данных
class UsersResource(resources.ModelResource):

    class Meta:
        model = Users

# вывод данных на странице
class UsersAdmin(ImportExportModelAdmin):
    resource_classes = [UsersResource]

admin.site.register(Users, UsersAdmin)

class GroupsResource(resources.ModelResource):

    class Meta:
        model = Groups

# вывод данных на странице
class GroupsAdmin(ImportExportModelAdmin):
    resource_classes = [GroupsResource]

admin.site.register(Groups, GroupsAdmin)

class Groups_NowResource(resources.ModelResource):

    class Meta:
        model = Groups_Now

# вывод данных на странице
class Groups_NowAdmin(ImportExportModelAdmin):
    resource_classes = [Groups_NowResource]

admin.site.register(Groups_Now, Groups_NowAdmin)

class AttendsResource(resources.ModelResource):

    class Meta:
        model = Attends

# вывод данных на странице
class AttendsAdmin(ImportExportModelAdmin):
    resource_classes = [AttendsResource]

admin.site.register(Attends, AttendsAdmin)
