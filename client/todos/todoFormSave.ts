import {Component, View} from 'angular2/core';
import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {Todos} from 'collections/todos';


@Component({
    selector: 'todo-form-save',
    templateUrl: 'client/todos/templates/todo-form-save.html'
})


export class TodoFormSave {
    
    todosFormSave: ControlGroup;
    

    constructor() {
         
         var fb = new FormBuilder();
  
        this.todosFormSave = fb.group({
            name: ['', Validators.required],
            description: [''],
            priority: ['', Validators.required]
        });
    }
    
    saveTodo(todo) {
        if (this.todosFormSave.valid) {
            Todos.update( todo._id, {
                $set: {
                    name: todo.name,
                    description : todo.description,
                    priority: todo.priority
                }
            });
        }
    }

 }

