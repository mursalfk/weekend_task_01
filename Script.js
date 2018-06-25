//it maintains the popup appearence and disappearence
function design(){
    var  x=document.getElementById("text");   //declaring popping to a smaller variable
    if (x.style.display==="none") {  //giving condition for showing the popup
        x.style.display="block";       
    } 
    else {
        x.style.display="none"; //hiding the popup
    }
}


/*  Refferences
For buttons : https://www.w3schools.com/tags/tag_button.asp 
*/