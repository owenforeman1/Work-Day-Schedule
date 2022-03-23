var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd MMMM, Do"));

/**
 * need function for save button
 * function= save contents of textarea to local sotrage
 * function = get saved text area from local storage
 * 
 */

// loop style hour blocks
var textStuff = $(".text-rows");
console.log(textStuff);
$.each(textStuff, function (idx, element) {
    
    /**pseudo coding how to identify hour for each row
     *hard code each row with hour in id
     within loop check thew id of each hour 
     write logic if hour past =grey current hour = red
     future = green
     jquery addClass
     */
    console.log(element);
});
