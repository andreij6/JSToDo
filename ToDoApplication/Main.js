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

//put the input into an array read the 

var todoButton = document.getElementById("button");
var removeButton = document.getElementById("remove");
var todoItems = [];
var inputBox = document.getElementById("todoInput");
var count = 1;

var todoList = {
    Items: {
        Hidden: false,
        Text: "",
        Priority: 1,
    },

    Name: " "

};
//
var addSomething = function () {
    "use strict";
    
    var input = document.getElementById("todoInput");
    var theList = document.getElementById("todoList");
    
    var allListItems = document.getElementsByTagName("li");

    if (input.value) {

        todoList.Items.Text = input.value();
        todoList.Items.Hidden = false;
        todoList.Items.Priority = count;

        todoItems.push(innerArray);
        for (var i = 0; i < allListItems.length; i++) {
            allListItems[i].setAttribute("class", "hidden");
        }

        for (var i = 0; i < todoItems.length; i++) {
            if (todoItems[i][1]) {
                var li = document.createElement("li");                     // Create li 
                
                var checkbox = document.createElement("input");


                li.appendChild(document.createTextNode(todoItems[i][0]));      // Add The Text to the li
                li.setAttribute("onclick", "strikeThrough();");
                
                // give it the onclick attribute and set it equal to the strikeThrough(); method

                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("value", i);
                checkbox.setAttribute("onclick", "strikeOut();")

                input.value = null;                                        // clear

                theList.appendChild(li);                                   // add the li to the ordered list
                li.appendChild(checkbox);
                
            }
        }
        console.log(todoItems);
        
        changeInformation();
        
        removeButton.setAttribute("class", "show btn btn-warning");
        removeButton.removeAttribute("hidden");
    }

    count++;
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

var strikeOut = function () {
    "use strict";
    var allListItems = document.getElementsByTagName("li");

    for (var i = 0; i < allListItems.length; i++) {
        var checkboxs = allListItems[i].childNodes;
        var checkbox = checkboxs[1];

        if (checkbox.checked && !allListItems[i].hasAttribute("class")) {
            allListItems[i].setAttribute("class", "strikeOut");
        }
    }
};

var removeCheckedBoxes = function () {
    var allListItems = document.getElementsByTagName("li");
    
    for (var i = 0; i < allListItems.length; i++) {
        var checkboxs = allListItems[i].childNodes;
        var checkbox = checkboxs[1];
        var count = 0;
        

        if (checkbox.checked) {
            for (var j = 0; j < todoItems.length; j++) {
                var word = allListItems[i].innerText;

                if (todoItems[j][0] == word) {
                    todoItems[j][1] = false;

                    //to delete the item from the array
                }
            }
            allListItems[i].setAttribute("class", "hidden");
        }
    }
    for (var i = 0; i < todoItems.length; i++) {
        if (todoItems[i][1] == false) {
            count++;
        }
    }

    if (count === todoItems.length) {
        removeButton.setAttribute("class", "hidden");
    }
    
    console.log(todoItems);
};

var changeInformation = function () {
    "use strict";

    if (todoItems.length === 0) {

        console.log("did nothing")

    } else if (todoItems.length === 1) {

        $("#info").remove();

        $("#infoContainer").html('<h1 id="info">Information: <small>Select & Clear to Remove Items</small></h1>');

    } else {

        $(".navbar-fixed-bottom").remove();
    }
};

removeButton.onclick = removeCheckedBoxes;

inputBox.onkeyup = function (e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    var nowValue;

    if (keyCode == '13') {

        addSomething();
        $("#stuff").remove();

    } else {

        nowValue = $("#todoInput").val();
        $("#stuff").html("<h1>"+ nowValue + "</h1>");
    }

    
}
//todoButton.onclick = addSomething;


//Object Oriented Way



