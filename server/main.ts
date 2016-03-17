import 'collections/todos';
import {loadTodos} from './load-test-todos';
import './todos';

Meteor.startup( loadTodos );