

import {Todos} from 'collections/todos';

export function loadTodos() {

    if (Todos.find().count() === 0) 
    {
        var todos = [
            {
                "name" : "A new TODO",
                "description" : "Just test todo!",
                "priority" : 2
            },
            {
                "name" : "My TODO",
                "description" : "Just do it!",
                "priority" : 3
            },
            {
                "name" : "Clean code",
                "description" : "Do clean!",
                "priority" : 1
            }
        ];

        for (var i = 0; i < todos.length; i++) 
        {
            Todos.insert(todos[i]);
        }
  }
};

