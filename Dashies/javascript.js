
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
                htmlBuffer += "<div class='download'><span class='downloadName'>"
                + downloads[i].name
                + "</span><div class='downloadDesc'>" 
                + downloads[i].desc
                +"</div><a href='"
                + downloads[i].urlConsole
                + "' download><button class='downloadButton'>CON</button></a><a href='"
                + downloads[i].urlGUI
                + "' download><button class='downloadButton'>GUI</button></a>"
                + "</div>"
            }
        
            $("#downloads").html(htmlBuffer);
         
        }
    };
    rawFile.send(null);
}


