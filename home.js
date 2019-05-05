var inputs = document.getElementsByTagName("input");

var username = inputs[0];
var email = inputs[1];
var number = inputs[2];

username.pattern = "[a-zA-Z ]*";
email.pattern = "([a-zA-Z0-9\.]*)(@)([a-zA-Z]*)(\.)([a-zA-Z]*)";
number.pattern = "([0-9/(/)-]*)";

username.required = true;
email.required = true;