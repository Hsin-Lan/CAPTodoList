sap.ui.define(["sap/ui/test/opaQunit"],function(i){"use strict";var e={run:function(){QUnit.module("First journey");i("Start application",function(i,e,t){i.iStartMyApp();t.onTheTodoListsList.iSeeThisPage()});i("Navigate to ObjectPage",function(i,e,t){e.onTheTodoListsList.onFilterBar().iExecuteSearch();t.onTheTodoListsList.onTable().iCheckRows();e.onTheTodoListsList.onTable().iPressRow(0);t.onTheTodoListsObjectPage.iSeeThisPage()});i("Teardown",function(i,e,t){i.iTearDownMyApp()})}};return e});
//# sourceMappingURL=FirstJourney.js.map