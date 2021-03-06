import {Component, View} from 'angular2/core';
import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {Todos} from 'collections/todos';


@Component({
    selector: 'todo-form',
    templateUrl: 'client/todos/templates/todo-form.html'
})


export class TodoForm {
    
    todosForm: ControlGroup;
    

    constructor() {
         
         var fb = new FormBuilder();
  
        this.todosForm = fb.group({
            name: ['', Validators.required],
            description: [''],
            priority: ['', Validators.required]
        });
    }
    
    addNewTodo(todo) {
        
        if (this.todosForm.valid) {
                Todos.insert({
                    name: todo.name,
                    description: todo.description,
                    priority: todo.priority
            });

            (<Control>this.todosForm.controls['name']).updateValue('');
            (<Control>this.todosForm.controls['description']).updateValue('');
            (<Control>this.todosForm.controls['priority']).updateValue('');
        } else {
            console.log('Invalid todo form!');
        }
    }
    

 }

