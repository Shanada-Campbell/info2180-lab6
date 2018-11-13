// JavaScript File

window.onload = function() {
    let search = document.getElementById("search");
    let result = document.getElementById("result");
    search.addEventListener( "click" , function(){
        let hRequest = XMLHttpRequest();
        hRequest.onreadystatechange = function() {
            if (hRequest.readyState == 4 && hRequest.status == 200) {
                let reply = document.createElement();
                reply.innerHTML = hRequest.responseText;
                result.appendChild(reply);
            }
        };
        let url = "request.php?q="+document.getElementById("search_value").value;
        hRequest.open("GET", url, true);
        hRequest.send();
    });
};