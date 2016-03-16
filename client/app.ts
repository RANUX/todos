

import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

 

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html'
})
class ToDo { 
    
    todos : any[];
    
    constructor () {

    this.todos = [
        {
            'name': 'Создать новый сайт',
            'description': 'Надо узнать сколько стоит.',
        },
        {
            'name': 'Изменить список покупок',
            'description': 'Добавить покупки!',
        },
        {
            'name': 'Это еще один вариант того, что надо сделать',
            'description': 'Надо обязательно сделать!',
        }

    ];

}
}

 

bootstrap(ToDo);

