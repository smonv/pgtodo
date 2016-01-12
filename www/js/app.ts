/// <reference path="../../typings/tsd.d.ts" />

$(document).on("deviceready", onDeviceReady);

function onDeviceReady() {
    $("#addForm").submit(function(e) {
        var mes: string;
        mes = $("#message").val();
        addTodo(mes);
        $("#message").val("");
        e.preventDefault();
    });
    console.log(navigator.notification);
    $(document).on('touchend', 'button#btn-delete', function() {
        var li = $(this).parent().parent();
        navigator.notification.confirm(
            'Are you sure?',
            function(buttonIndex) {
                removeTodo(li);
            },
            'Confirm',
            ['Remove', 'Cancle']
            )
    });
}

function addTodo(message: string): void {
    $("#todo-list").prepend(buildListElement(message));

}

function removeTodo(element: any): void {
    $(element).remove();
}

function buildListElement(message: string): any {
    var li = $("<li></li>").addClass("list-group-item").addClass("clearfix").append(message).append(
        $("<span></span>").addClass("pull-right").append(
            $("<button></button>").addClass("btn btn-xs btn-warning").attr('id', 'btn-delete').append("X")
            )
        );
    return li;
}
