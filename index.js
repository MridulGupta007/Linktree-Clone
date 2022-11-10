var seconds=0
 function displaySeconds(){
    seconds += 1
    document.getElementById("link").innerText="This page will redirect in "+ seconds +" Seconds"
 }

 setInterval(displaySeconds, 5000);
