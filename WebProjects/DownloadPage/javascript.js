/**
 * To-Do:
 * Sort Categories,
 * Basic searching,
 * Enhance the look a bit
 * 
 */

var downloadLocation = "http://www.dashware-software.co.uk/Direct_Filez/Software_Lookup/";

$(document).ready(function (){
    LoadFromJson();
});

function LoadFromJson() {

    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", "downloads.json", true);
    rawFile.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var downloads = JSON.parse(rawFile.responseText);
            console.log(downloads[0].name);
        
            var htmlBuffer = "";
        
            for(var i = 0; i < downloads.length; i++){
                htmlBuffer += `<div class='download'><span class='downloadName'>${downloads[i].name}</span><div class='downloadDesc'>${downloads[i].desc}</div>${downloads[i].ConsoleFileName == "" ? "" : `<a href='${downloadLocation + downloads[i].ConsoleFileName}' download><button class='downloadButton'>CON</button></a>`}${downloads[i].GUIFileName == "" ? "" : `<a href='${downloadLocation + downloads[i].GUIFileName}' download><button class='downloadButton'>GUI</button></a>`}</div>`;
            }
        
            $("#downloads").html(htmlBuffer);
        }
    };
    rawFile.send(null);
}