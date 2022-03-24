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

var buttonSave = $("saveBtn");
buttonSave.addEventListener("click", hourString);



function buttonSave() {
  localStorage.setItem("textArea", textArea);
}

function getSavedText() {
  var textArea = localStorage.getItem("textArea")
}




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