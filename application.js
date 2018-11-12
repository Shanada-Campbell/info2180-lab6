// JavaScript File

window.onload = function() {
    let search = document.getElementById("button");
    search.addEventListener( "click" , function(){
        let hRequest = XMLHttpRequest();
        hRequest.onreadystagechange = function() {
            if (hRequest.readyState == 4 && hRequest.status == 200) {
                alert(hRequest.responseText);
            }
        };
        hRequest.open("GET","request.php?q=definition",true);
        hRequest.send();
    });
};