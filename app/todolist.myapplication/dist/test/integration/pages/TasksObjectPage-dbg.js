sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'todolist.myapplication',
            componentId: 'TasksObjectPage',
            contextPath: '/TodoLists/tasks'
        },
        CustomPageDefinitions
    );
});