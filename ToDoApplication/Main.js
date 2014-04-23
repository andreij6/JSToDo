//$(document).ready(function () {
//    $('#container').css({
//        position: 'absolute',
//        left: ($(window).width() + $('#container').outerWidth()) / 2,
//        top: ($(window).height() - $('#container').outerHeight()) / 2
//    });
//});
    
//$("#button").on("click", function () {
    
//    var input = $("#todoInput").val();

//    $("#todoList").append("<li>" + input + "</li>");

//    $("#todoInput").val(" ");

//    $("li").on("click", function () {
//        event.target.setAttribute("class", "strikeOut");  //works
//        //$(event.target).toggleClass("strikeOut");       // doesnt work
//        //$(this).toggleClass("strikeOut");               // doesnt work
//    });
//});




    
//
var doSomething = function () {
    "use strict";
    var input = document.getElementById("todoInput");
    var theList = document.getElementById("todoList");

    if (input.value) {
        var li = document.createElement("li");                     // Create li 

        li.appendChild(document.createTextNode(input.value));      // Add The Text to the li
        li.setAttribute("onclick", "strikeThrough();");            // give it the onclick attribute and set it equal to the strikeThrough(); method
        input.value = null;                                        // clear

        theList.appendChild(li);                                   // add the li to the ordered list
    }
};

//Toggles the class attribute
var strikeThrough = function () {
    "use strict";
    if (event.target.hasAttribute("class"))                     
    {
        event.target.removeAttribute("class");
    }
    else
    {
        event.target.setAttribute("class", "strikeOut");
    }

};

document.getElementById("button").onclick = doSomething;

