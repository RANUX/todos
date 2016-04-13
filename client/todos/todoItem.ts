

import {Component, View} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {RouterLink} from 'angular2/router';
import {Todos} from '../../collections/todos';

@Component({
  selector: 'todo-item',
  templateUrl: 'client/todos/templates/todo-item.html',
  directives: [RouterLink]
})



export class TodoItem {
    
    todo : ToDo;
    
    constructor(params: RouteParams) 
    {
        var todoId = params.get('todoId');
        this.todo = Todos.findOne(todoId);
    }
}

