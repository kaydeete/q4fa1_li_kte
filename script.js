var br = "</br>";

function info()
{
    var name = document.getElementById("name").value;
    var uname = document.getElementById("username").value;
    var gender = document.getElementById("gender").value;
    var pword = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var loc = document.getElementById("address").value;
    var abt = document.getElementById("infouser").value;

    document.getElementById("outputdata").innerHTML =
    "Name: " + name + br +
    "Username: " + uname + br +
    "Gender: " + gender + br +
    "Password: " + pword + br +
    "Email: " + email + br +
    "Address: " + loc + br +
    "About the User: " + abt + br;

    return false;
}

function blurT(element)
{
    var inputE = document.getElementsByTagName("input");

    for (var i = 0; i < inputE.length; i++) {
        if (inputE[i].value == "") {
            inputE[i].style.borderColor = "red";
        } else {
            inputE[i].style.borderColor = "green";
        }
    }
}

function focusT(element)
{
    element.style.borderColor = "green";
}

function reset() {
    document.getElementById("signup-form").reset();
    var inputE = document.getElementsByTagName("input");
    var textE = document.getElementsByTagName("textarea");
    for (var i = 0; i < inputE.length; i++) {
        inputE[i].style.borderColor = "initial";
    }
    for (var i = 0; i < textE.length; i++) {
        textE[i].style.borderColor = "initial";
    }
    document.getElementById("outputdata").innerHTML = '';
    return false;
}