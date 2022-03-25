var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd MMMM, Do"));

var currentHour = $(".hourBlock");
$.each(currentHour, function (idx, element) {
    var hourString = $(element).children().children().eq(1).attr("id");
    var momentHour = moment(hourString, "ha");
    var momentCurrentTime = moment();

    if (momentHour.format("ha") == momentCurrentTime.format("ha")) {
        $(element).children().children().eq(1).addClass("present");
        console.log("present");
        textArea = "present";
    } else if (momentHour.isBefore(momentCurrentTime)) {
        $(element).children().children().eq(1).addClass("past");
        console.log("past");
        textArea = "past";
    } else if (momentHour.isAfter(momentCurrentTime)) {
        $(element).children().children().eq(1).addClass("future");
        console.log("future");
        textArea = "future";
    }
});

function theButtonSave(event) {
    console.log("button clicked");
    var textSelect = $(event.target).siblings().val();
    var textId = $(event.target).siblings().attr("id");
    localStorage.setItem(textId, textSelect);
    console.log($(event.target).siblings().val());
}

$(".saveBtn").click(function (event) {
    console.log($(event.target).siblings());
    theButtonSave(event);
});

function getSavedText() {
    $("textarea").each(function () {
        var textId = $(this).attr("id");
        var textLoad = localStorage.getItem(textId);
        $(this).val(textLoad);
    });
}

$(document).ready(function () {
    console.log("ready!");
    getSavedText();
});
