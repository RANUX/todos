

import {Component, View, NgZone} from 'angular2/core';
import {bootstrap} from 'angular2-meteor';
import {Todos} from 'collections/todos';
import {TodosForm} from 'client/todos/todosForm'

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html',
    directives: [TodosForm]
})
class ToDoApp { 
    
    todos : Mongo.Cursor<Object>;
    
    constructor (zone: NgZone) 
    {
        // Reactive wrapper that will run data when a change occurs
        // Tracker.autorun(() => zone.run(() => {
        //     this.todos = Todos.find().fetch();
        // }));
        
        this.todos = Todos.find();
        
        
    // this.todos = [
    //     {
    //         'name': 'Создать новый сайт',
    //         'description': 'Надо узнать сколько стоит.',
    //     },
    //     {
    //         'name': 'Изменить список покупок',
    //         'description': 'Добавить покупки!',
    //     },
    //     {
    //         'name': 'Это еще один вариант того, что надо сделать',
    //         'description': 'Надо обязательно сделать!',
    //     }

    // ];

    }
    
        
    removeTodo(todo : ToDo)
    {
        Todos.remove(todo._id);
    }
}

 

bootstrap(ToDoApp);

