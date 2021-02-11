
function onClickColor1() {
    {
        document.getElementById("c1").innerHTML = "The color displayed is light Grey.";       
        document.getElementById("c1").style.backgroundColor = "#71a832";
        let utterance = new SpeechSynthesisUtterance("The color displayed is light Grey.");
        speechSynthesis.speak(utterance);
    };
   
}
function onClickColor2() {
   {
        document.getElementById("c2").innerHTML = "The color displayed is blue color.";
        document.getElementById("c2").style.backgroundColor  = "#6432a8";

        let utterance = new SpeechSynthesisUtterance("The color displayed is blue color.");
        speechSynthesis.speak(utterance);
    };

}