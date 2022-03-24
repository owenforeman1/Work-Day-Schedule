var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd MMMM, Do"));

var currentHour = $(".hourBlock");
$.each(currentHour, function (idx, element) {
    var hourString = $(element).children().children().eq(1).attr("id");      
    var momentHour =  moment(hourString,"ha");
    var momentCurrentTime = moment();

      if(momentHour.format("ha") == momentCurrentTime.format("ha")) {
          $(element).children().children().eq(1).addClass("present")
        console.log("present");
        textArea = "present"
      } else if (momentHour.isBefore(momentCurrentTime)) {
            $(element).children().children().eq(1).addClass("past")
        console.log("past");
        textArea = "past"
   
    }else if (momentHour.isAfter(momentCurrentTime)) {
          $(element).children().children().eq(1).addClass("future")
        console.log("future");
        textArea = "future";
    }
});









function theButtonSave(event) {
    console.log("button clicked");
    var textSelect = $(event.target).siblings().val();
    localStorage.setItem("textSave", textSelect);
    localStorage.setItem("textSave", textSelect);
    localStorage.setItem("textSave", textSelect);
    localStorage.setItem("textSave", textSelect);
    localStorage.setItem("textSave", textSelect);
    localStorage.setItem("textSave", textSelect);
    localStorage.setItem("textSave", textSelect);
    localStorage.setItem("textSave", textSelect);
    localStorage.setItem("textSave", textSelect);
    console.log($(event.target).siblings().val());
}



 $(".saveBtn").click(function(event){
   console.log($(event.target).siblings());
   theButtonSave(event); 
 });







function getSavedText() {
console.log(localStorage.getItem("textSave")); 
console.log(localStorage.getItem("textSave"));
}

$(document).ready(function () {
    console.log("ready!");
    getSavedText();
});









// You don't have a .letter-button  class but a .saveBtn one.
// You don't have a buttonListEl but your buttons are probably in a container that can listen for a click.
// If you can successfully console.log($(event.target)) and store it in a variable
// How can you use DOM traversal methods to navigate from the button to the neighboring input or textarea?

// var buttonSave addeventlistener function to get hourstring 
/**
 * need function for save button
 * function= save contents of textarea to local sotrage,hourstring , textareacontents
 * function = get saved text area from local storage
 * function that accepts hour string
 */
// loop style hour blocks

// $(".saveBtn").on("click",function(event){
//   event.preventDefault();
//   var value = $(this).siblings(".textArea").value();
// })

//   localStorage.setItem("finalFinalScore", JSON.stringify(sortedHighScores));