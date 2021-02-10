
function onClickColor1() {
    {
        document.getElementById("c1").innerHTML = "light grey";       
        document.getElementById("c1").style.backgroundColor = "#71a832";
        let utterance = new SpeechSynthesisUtterance("light grey");
        speechSynthesis.speak(utterance);
    };
   
}
function onClickColor2() {
    {
        document.getElementById("c2").innerHTML = "blue color";
        document.getElementById("c2").style.backgroundColor  = "#6432a8";

        let utterance = new SpeechSynthesisUtterance("blue color");
        speechSynthesis.speak(utterance);
    };

}