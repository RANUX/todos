

import {Component, View, provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';
import {TodoList}  from './todos/todoList';
import {TodoItem}  from './todos/todoItem';

@Component({
    selector: 'app'
})

@View({
    template: '<router-outlet>',        // "default layout" template. Render a view on the page based on the current URL.
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/',             as: 'TodoList',  component: TodoList },
    { path: '/todo/:todoId', as: 'TodoItem',  component: TodoItem }
])

class ToDoApp {
    
}

bootstrap(ToDoApp, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);

