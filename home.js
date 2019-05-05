var inputs = document.getElementsByTagName("input");

var name = inputs[0];
var email = inputs[1];
var number = inputs[2];

name.pattern = "[a-zA-Z]*";
email.pattern = "([a-zA-Z0-9\.]*)(@)([a-zA-Z]*)(\.)([a-zA-Z]*)";
number.pattern = "([0-9/(/)-]*)";
