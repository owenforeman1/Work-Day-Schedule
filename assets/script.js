var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd MMMM, Do"));


/**
 * need function for save button
 * function= save contents of textarea to local sotrage
 * function = get saved text area from local storage
 * 
 */

// var saveButtonF = ("saveBtn");
// saveButtonF.addEventListener("click", function (event) {
    
// });


// loop style hour blocks
var currentHour = $(".hourBlock");
$.each(currentHour, function (idx, element) {
    var hourString = $(element).children().children().eq(1).attr("id");      
    var momentHour =  moment(hourString,"ha");
    var momentCurrentTime = moment().subtract("hours", 8);

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
    /**pseudo coding how to identify hour for each row
     *hard code each row with hour in id
     within loop check thew id of each hour 
     write logic if hour past =grey current hour = red
     future = green
     jquery addClass
     */
    // console.log(element);
});

var currentHour = moment();
$("#text9am").text(currentHour.format("h:a"));