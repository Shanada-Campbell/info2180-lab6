// JavaScript File

window.onload = function() {
    let search = document.getElementById("search");
    let result = document.getElementById("result");
    let search_term = document.getElementById("search_val");
    let complete_search = document.getElementById("define");
    search.addEventListener( "click" , function(){
        let hRequest = new XMLHttpRequest();
        hRequest.onreadystatechange = function() {
            if (hRequest.readyState == 4 && hRequest.status == 200) {
                result.innerHTML = "<h2>Result</h2>" + hRequest.responseText.split("</h3>");
            }
        };
        let url = "request.php?q=" + search_term.value;
        hRequest.open("GET", url, true);
        hRequest.send();
    });
    complete_search.addEventListener("click", function(){
       let hRequest_all = new XMLHttpRequest();
       hRequest_all.onreadystatechange = function(){
           if (hRequest_all.readyState === 4 && hRequest_all.status === 200){
               let list = "<ol>";
               let xml_doc = hRequest_all.responseXML;
               let definitions = xml_doc.getElementById("define");
               for(let i = 0; i < definitions.length; i++){
                   list += "<li><h3>" + definitions[i].getAttribute("name") + "</h3><p>" + definitions[i].childNodes[0].nodeValue + "</p><p> - "+definitions[i].getAttributeNode("author").value + "</p></li>";
               }
               list += "</ol>";
               result.innerHTML = "<h2>Result</h2>" + list;
           }
       };
       hRequest_all.open("GET", "request.php?q=&all=true", true);
       hRequest_all.send();
    });
};