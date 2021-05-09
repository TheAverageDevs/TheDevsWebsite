// JavaScript Document
$('.navTrigger').click(function () { //Checks for nav tirgger
    $(this).toggleClass('active'); // Toggles class
    $("#mainListDiv").toggleClass("show_list"); //Toggles Class
    $("#mainListDiv").fadeIn(); //Toggles Class

});