let stat=true;
function myfunction(){
    if(stat==false){
        document.getElementById("p1").innerHTML="A Paragraph.";
        console.log("Paragraph changed back")
        stat=true;
    }
    else{
        document.getElementById("p1").innerHTML="Paragraph Changed.";
        console.log("Paragraph changed ")
        stat=false;
    }

}