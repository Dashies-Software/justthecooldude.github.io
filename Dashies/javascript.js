$(document).ready(function (){
    $("#main").click(function(){
        ReadFile("downloads.xml");
    });
});

function ReadFile(filepath) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main").innerHTML =
            this.responseText;
        }
    };
    xhttp.open("GET", filepath, true);
    xhttp.send();
}
