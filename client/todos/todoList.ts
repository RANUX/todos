

import {Component, View, NgZone} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {Todos} from '../../collections/todos';
import {TodoForm} from './todoForm'

@Component({
    selector: 'todo-list'
})
@View({
    templateUrl: 'client/todos/templates/todo-list.html',
    directives: [TodoForm, RouterLink]
})
export class TodoList { 
    
    todos : Mongo.Cursor<Object>;
    
    constructor (zone: NgZone) 
    {
        // Reactive wrapper that will run data when a change occurs
        // Tracker.autorun(() => zone.run(() => {
        //     this.todos = Todos.find().fetch();
        // }));
        
        this.todos = Todos.find();
        

    }
        
    removeTodo(todo : ToDo)
    {
        Todos.remove(todo._id);
    }
}

 