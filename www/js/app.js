$(document).on("deviceready", onDeviceReady);
function onDeviceReady() {
    $("#addForm").submit(function (e) {
        var mes;
        mes = $("#message").val();
        addTodo(mes);
        $("#message").val("");
        e.preventDefault();
    });
}
function addTodo(message) {
    $("#todo-list").prepend(buildListElement(message));
}
function buildListElement(message) {
    var li = $("<li></li>").addClass("list-group-item").addClass("clearfix").append(message).append($("<span></span>").addClass("pull-right").append($("<button></button>").addClass("btn btn-xs btn-info").append("Done")).append($("<button></button>").addClass("btn btn-xs btn-warning").append($("<span></span>").addClass("glyphicon glyphicon-trash"))));
    return li;
}
