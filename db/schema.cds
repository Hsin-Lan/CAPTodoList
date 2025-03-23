namespace TodoList;
using { cuid, managed } from '@sap/cds/common';

@assert.unique: { title: [title] }
entity TodoLists : cuid, managed {
  title: String(100) @mandatory;
  createdDate: Date;
  status: String(20);
  tasks: Composition of many Tasks on tasks.todoList = $self;
}

@assert.unique: { description: [description] }
entity Tasks : cuid {
  description: String(200) @mandatory;
  dueDate: Date;
  completed: Boolean;
  todoList: Association to TodoLists;
}
