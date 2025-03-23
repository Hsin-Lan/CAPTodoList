using { TodoList as my } from '../db/schema.cds';

@path : '/service/todoList'
service todoListSrv
{
    @odata.draft.enabled
    entity TodoLists as
        projection on my.TodoLists;

    entity Tasks as
        projection on my.Tasks;
}

annotate todoListSrv with @requires :
[
    'authenticated-user'
];
