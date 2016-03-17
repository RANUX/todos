
export var Todos = new Mongo.Collection<ToDo>('todos');

Todos.allow({
    insert: function() {
    var user = Meteor.user();
    return true;
    //return !!user;
  },
  update: function() {
    var user = Meteor.user();
    return true;
    //return !!user;
  },
  remove: function() {
    var user = Meteor.user();
    return true;
    //return !!user;
  }
});

// Things.allow({
//   insert: function(userId, thing) {
//     thing.createdAt = new Date();
//     thing.name_sort = thing.name.toLowerCase();
//     return true;
//   },
//   update: function(userId, thing, fields, modifier) {
//     thing.createdAt = new Date();
//     thing.name_sort = thing.name.toLowerCase();
//     return true;
//   },
//   remove: function(userId, thing) {
//     return true;
//   }
// });


