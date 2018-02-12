$(document).ready(function (){
    $("#main").click(function(){
        LoadDownloads();
    });
});

function LoadDownloads() {
    var xhttp = new XMLHttpRequest();
    var text;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            text = xhttp.responseText;
        }
    };
    xhttp.open("GET", "downloads.xml", true);
    xhttp.send();

    var parser;
    parser = new DOMParser;
    var downloadList = parser.parseFromString(text, "text/xml");

    var outputHtml;
    for(var i = 0; i < downloadList.length; i++) {
        var download;
        outputHtml = downloadList[0].childNodes[i].childNodes[0].nodeValue;
        console.log(outputHtml);
    }

    $("#main").innerHTML = outputHtml;
}
