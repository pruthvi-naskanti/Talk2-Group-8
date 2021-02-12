let Color1=document.getElementById("c1");
let Color2=document.getElementById("c2")
function main(){
    console.log("Main function has started")
}
window.addEventListener('load', main);
Color1.addEventListener('touch',onClickColor1);
Color1.addEventListener('click',onClickColor1);
Color2.addEventListener('touch',onClickColor2);
Color2.addEventListener('click',onClickColor2);
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