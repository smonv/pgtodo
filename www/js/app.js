$(document).on("deviceready", onDeviceReady());

function onDeviceReady() {
    $("#addForm").submit(function(e) {
        var mes = $("#message").val();
        alert(mes);
        addToDo(mes);
    });
}

function addToDo(message) {
    $("#todo-list ul li:before").append($('li').text(message));
    $("p").text(message);
}
