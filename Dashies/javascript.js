
var xmlString =
"<?xml version=\"1.0\" encoding=\"UTF-8\"?>"+

"<download_list>"+
    "<download>"+
        "<name>generic payload</name>"+
        "<url>"+
            "<con>downloadsLocation/gey.txt</con>"+
            "<gui>https://realwebsite.really/download/payloadgui.file</gui>"+
        "</url>"+
        "<desc>real amaze payload mkay</desc>"+
    "</download>"+
    "<download>"+
        "<name>generic payload #2</name>"+
        "<url>"+
            "<con>https://realwebsite.really/download/payload2.file</con>"+
            "<gui>https://realwebsite.really/download/payloadgui2.file</gui>"+
        "</url>"+
        "<desc>real amaze payload #2 mkay</desc>"+
    "</download>"+
"</download_list>";

$(document).ready(function (){
    $("#Load").click(function(){
        LoadDownloads();
    });
    $("#Parse").click(function(){
        parseXmlToList(xmlString);
    });
    parseXmlToList(xmlString);
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

    console.log(_xmlString);

    parser = new DOMParser();
    xmlDoc = parser.parseFromString(_xmlString,"text/xml");

    var downloads = xmlDoc.getElementsByTagName("download");

    if(downloads.length <= 0) return;
    else console.log(downloads.length);
    var htmlBuffer = "";

    for(var i = 0; i < 1; i++){
        htmlBuffer += "<br><div class='download'><span class='downloadName'>"
        + downloads[i].childNodes[0].childNodes[0].nodeValue
        + "</span><a href='"
        + downloads[i].childNodes[1].childNodes[0].childNodes[0].nodeValue
        + "' download>CON</a><a href='"
        + downloads[i].childNodes[1].childNodes[1].childNodes[0].nodeValue
        + "' download>GUI</a><div class='downloadDesc'>"
        + downloads[i].childNodes[2].childNodes[0].nodeValue
        + "</div></div>"
    }

    $("#downloads").html(htmlBuffer);
}


