//Created varibles to build an Array
var $9AM = $("#9AM");
var $10AM = $("#10AM");
var $11AM = $("#11AM");
var $12PM = $("#12PM");
var $1PM = $("#1PM");
var $2PM = $("#2PM");
var $3PM = $("#3PM");
var $4PM = $("#4PM"); 
var $5PM = $("#5PM");

//Create an Object to use as an Array
var buttons = document.querySelectorAll(".saveBtn")

var timeblocksArray = [
                        $9AM, $10AM, $11AM, $12PM, $1PM, 
                        $2PM, $3PM, $4PM, $5PM 
                    ]

//Intial Array of TextArea values
var todoList =[ 
                "", "", "", "", "", 
                "", "", "", "",
                ];



$(document).ready(function () {


//Interval function displays the current Date and time of day 
setInterval(function() { 

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}, 1000);

//Function for assigning text values to the textareas and also addding the appropriate Class of Past, Present, and Future.
    function setCurrentState() {
        var loadTime = moment().format('HH');
        var count = parseInt(loadTime);

       for(var i = 0; i < timeblocksArray.length; i ++)
       {
           //Check to see if there is any values in the local storage
           if (localStorage.todoArray)
           {
           timeblocksArray[i].text(JSON.parse(localStorage.todoArray)[i])
           }
            if((count - 9) > i)
                timeblocksArray[i].addClass("past");
            else if ((count - 9) === i)
                timeblocksArray[i].addClass("present");
            else if((count - 9) < i)
                timeblocksArray[i].addClass("future");
       }

    }

    //Call for creating the Daily Planner with correct values
    setCurrentState();


    //Adds an Event Listener functions for all the save buttons to store new values into an array on the local storage.
    for (const button of buttons) {
       button.addEventListener('click', function () {
            
           for (var i = 0; i < timeblocksArray.length; i++) {
               todoList[i] = timeblocksArray[i].val();
               localStorage.todoArray = JSON.stringify(todoList);

           }

       })
    }




});