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
    document.getElementById("outputdata").innerHTML = "";
    document.getElementById("name").style.borderColor = "black";
    document.getElementById("username").style.borderColor = "black";
    document.getElementById("password").style.borderColor = "black";
    document.getElementById("email").style.borderColor = "black";
    document.getElementById("address").style.borderColor = "black";
    document.getElementById("infouser").style.borderColor = "black";
}