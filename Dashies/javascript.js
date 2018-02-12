$(document).ready(function (){
    $("#main").click(function(){
        ReadFile();
    });
});

function ReadFile() {
    var xhttp = new XMLHttpRequest();
    var text;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            text = this.responseText;
        }
    };
    xhttp.open("GET", "downloads.xml", true);
    xhttp.send();

    var parser, downloadList;
    parser = new DOMParser;
    downloadList = parser.parseFromString(text, "text/xml").getElementsByTagName("download_list");

    var outputHtml;
    for(var i = 0; i < downloadList.length; i++) {
        var download = downloadList[i];
        outputHtml += download.getElementsByTagName("name").values;
    }

    $("main").innerHTML = outputHtml;
}
