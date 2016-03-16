

import {Component, View, NgZone} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Todos} from 'collections/todos';
 

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html'
})
class ToDo { 
    
    todos : any[];
    
    constructor (zone: NgZone) 
    {
        // Reactive wrapper that will run data when a change occurs
        Tracker.autorun(() => zone.run(() => {
            this.todos = Todos.find().fetch();
        }));
        
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
}

 

bootstrap(ToDo);

