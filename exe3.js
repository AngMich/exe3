$(document).ready(function () {
    let today = new Date().getDay(); 
    if (today === 0) {
        $("#day-message").text("It is Sunday!").css("color", "green");
    } else {
        $("#day-message").text("It is not Sunday.").css("color", "blue");
    }
});