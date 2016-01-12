$(document).on("deviceready", onDeviceReady());

function onDeviceReady() {
  $("#addForm").submit(function(e) {
    var mes = $("#message").val();
    addToDo(mes);
    $("#message").val("");
    e.preventDefault();
  });
}

function addToDo(message) {
  $("#todo-list").append('<li class="list-group-item">' + message + '</li>');
}
