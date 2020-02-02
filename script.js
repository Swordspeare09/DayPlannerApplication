
var $9AM = $("#9AM");
var $10AM = $("#10AM");
var $11AM = $("#11AM");
var $12PM = $("#12PM");
var $1PM = $("#1PM");
var $2PM = $("#2PM");
var $3PM = $("#3PM");
var $4PM = $("#4PM"); 
var $5PM = $("#5PM");

var timeblocksArray = [
                        $9AM, $10AM, $11AM, $12PM, $1PM, 
                        $2PM, $3PM, $4PM, $5PM 
                    ]

var todoList =[ 
                "", "", "", "", "", 
                "", "", "", "",
                ];



$(document).ready(function () {


    console.log("ready!");

setInterval(function() { 

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}, 1000);

    function setCurrentState() {
        var loadTime = moment().format('HH');
        var count = parseInt(loadTime);

       for(var i = 0; i < timeblocksArray.length; i ++)
       {
            if((count - 9) > i)
                timeblocksArray[i].addClass("past");
            else if ((count - 9) === i)
                timeblocksArray[i].addClass("present");
            else if((count - 9) < i)
                timeblocksArray[i].addClass("future");
       }

    }

    function storingTodos() {

        for(var i = 0; i < timeblocksArray.length; i++)
        {
            todoList[i] = timeblocksArray[i].text();
            
        }

    }

    storingTodos();

    setCurrentState();




});