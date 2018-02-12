$(document).ready(function (){
    $("#Load").click(function(){
        LoadDownloads();
    });    
    $("#Parse").click(function(){
        parseXmlToList(Text);
    });
});

var text;

function LoadDownloads() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            text = xhttp.responseText;
        }
    };
    xhttp.open("GET", "downloads.xml", true);

    console.log(text);

    xhttp.send();

    console.log(text);

    
}

function parseXmlToList(xmlText){
    var parser = new DOMParser;
    var downloadList = parser.parseFromString(text, "text/xml");

    var outputHtml;
    for(var i = 0; i < downloadList.length; i++) {
        var download;
        outputHtml = downloadList[0].childNodes[i].childNodes[0].nodeValue;
        console.log(outputHtml);
    }

    console.log("Final: " + outputHtml);
}