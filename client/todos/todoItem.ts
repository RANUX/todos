

import {Component, View, Inject} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {RouterLink} from 'angular2/router';
import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {Todos} from '../../collections/todos';
//import {TodoForm} from './todoForm'

@Component({
  selector: 'todo-item',
  templateUrl: 'client/todos/templates/todo-item.html',
  directives: [RouterLink]
})



export class TodoItem {
    
    todo : ToDo;
    
    todosFormSave: ControlGroup;
    

    constructor(params: RouteParams) {
         
         var fb = new FormBuilder();
  

        var todoId = params.get('todoId');
        this.todo = Todos.findOne(todoId);
        
        this.todosFormSave = fb.group({
            _id : [ this.todo._id, Validators.required],
            name: [ this.todo.name, Validators.required],
            description: [ this.todo.description ],
            priority: [ this.todo.priority, Validators.required]
        });
    }
    
    saveTodo(todo) {

        //console.log(this.todosFormSave.valid);
        if (this.todosFormSave.valid) {
            console.log(todo);
            
            var res = Todos.update( todo._id, {
                $set: {
                    name: todo.name,
                    description : todo.description,
                    priority: todo.priority
                }
            });
        }
    }
}

