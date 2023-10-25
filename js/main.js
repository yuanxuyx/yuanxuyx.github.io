function download(name) 
{
    var link = document.createElement("a");
    link.download = name;
    link.href = name;
    link.click();
}
function getData()
{
    var text = document.getElementById("groupID").value;
    var filename = "twitter/".concat(text.toString()).concat(".zip")
    download(filename);
}


