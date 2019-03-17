function addTodoItem() {
  var todoItem = $("#new-todo-item").val();
  $("#todo-list").append("<li class='do'>" + todoItem +
                         " <button class='todo-item-delete'>"+
                         "</button>" + "</li>");

 $("#new-todo-item").val("");
}

function deleteTodoItem(e, item) {
  e.preventDefault();
  $(item).parent().fadeOut('slow', function() {
    $(item).parent().remove();
  });
}

$(function() {

   $("#add-todo-item").on('click', function(e){
     e.preventDefault();
     addTodoItem()
   });

  $("#todo-list").on('click', '.todo-item-delete', function(e){
    var item = this;
    deleteTodoItem(e, item)
  })
});

$( function() {
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();
  } );
