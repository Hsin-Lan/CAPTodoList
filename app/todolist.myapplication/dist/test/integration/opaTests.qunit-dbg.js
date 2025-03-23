sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'todolist/myapplication/test/integration/FirstJourney',
		'todolist/myapplication/test/integration/pages/TodoListsList',
		'todolist/myapplication/test/integration/pages/TodoListsObjectPage',
		'todolist/myapplication/test/integration/pages/TasksObjectPage'
    ],
    function(JourneyRunner, opaJourney, TodoListsList, TodoListsObjectPage, TasksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('todolist/myapplication') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTodoListsList: TodoListsList,
					onTheTodoListsObjectPage: TodoListsObjectPage,
					onTheTasksObjectPage: TasksObjectPage
                }
            },
            opaJourney.run
        );
    }
);