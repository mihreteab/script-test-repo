

export default greeting(){
    document.addEventListener("DOMContentLoaded", function(event) {
    console.log("it is working");
    var h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode("Welcome"));
    document.body.appendChild(h1)
    });
}
