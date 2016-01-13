$(document).on("deviceready", onDeviceReady);

function onDeviceReady() {
    $("#addForm").submit(function(e) {
        var mes;
        mes = $("#message").val();
        addTodo(mes);
        $("#message").val("");
        e.preventDefault();
    });
    $(document).on('touchend', 'button#btn-delete', function() {
        var li = $(this).parent().parent();
        navigator.notification.confirm('Are you sure?', function(buttonIndex) {
            if(buttonIndex == 1){
                removeTodo(li);
            }
        }, 'Confirm', ['OK', 'Cancle']);
    });
}

function addTodo(message) {
    $("#todo-list").prepend(buildListElement(message));
}

function removeTodo(element) {
    $(element).remove();
}

function buildListElement(message) {
    var li = $("<li></li>").addClass("list-group-item").addClass("clearfix").append(message).append($("<span></span>").addClass("pull-right").append($("<button></button>").addClass("btn btn-xs btn-warning").attr('id', 'btn-delete').append("X")));
    return li;
}
