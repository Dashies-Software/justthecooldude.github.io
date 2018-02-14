
$(document).ready(function (){
    LoadDownloads();
});

var downloads;
function LoadDownloads() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            parseXmlToList(xhttp.responseText);
        }
    };
    xhttp.open("GET", "downloads.xml", true);
    xhttp.send();
}


function parseXmlToList(_xmlString){

    parser = new DOMParser();
    xmlDoc = parser.parseFromString(_xmlString,"text/xml");

    var downloads = xmlDoc.getElementsByTagName("download");

    if(downloads.length <= 0) return;
    var htmlBuffer = "";

    for(var i = 0; i < downloads.length; i++){
        htmlBuffer += "<div class='download'><span class='downloadName'>"
        + downloads[i].childNodes[0].childNodes[0].nodeValue
        + "</span><div class='downloadDesc'>" 
        + downloads[i].childNodes[2].childNodes[0].nodeValue
        +"</div><a href='"
        + downloads[i].childNodes[1].childNodes[0].childNodes[0].nodeValue
        + "' download><button class='downloadButton'>CON</button></a><a href='"
        + downloads[i].childNodes[1].childNodes[1].childNodes[0].nodeValue
        + "' download><button class='downloadButton'>GUI</button></a>"
        + "</div>"
    }

    $("#downloads").html(htmlBuffer);
}


