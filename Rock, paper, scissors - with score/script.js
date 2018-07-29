window.onload = function onload() {
    var playButton = document.getElementById("play");
    var results = document.getElementsByClassName("results");
    var score = document.getElementsByClassName("score");
    var scoreVlad = 0;
    var scoreLaptop = 0;
    
    results[0].innerHTML = "Laptop:"
    results[1].innerHTML = "Vlad:"
    results[2].innerHTML = "Who will WIN?";
    score[0].innerHTML = "Score Vlad: " + scoreVlad;
    score[1].innerHTML = "Score Laptop: " + scoreLaptop;
    
    playButton.onclick = function play() {
        var posibilities = ["Rock", "Paper", "Scissors"];
        var a = Math.floor(Math.random() * 3);
        var b = Math.floor(Math.random() * 3);
        
        results[0].innerHTML = "Laptop: " + posibilities[a];
        results[1].innerHTML = "Vlad: " + posibilities[b];
        
        if ((a===0 && b===1) || (a===1 && b===2) || (a===2 && b===0)) {
            b = "Vlad";
            results[2].innerHTML = b + " WINS!";
            scoreVlad++;
            score[0].innerHTML = "Sscore Vlad: " + scoreVlad;
            return scoreVlad;
        } else if ((b===0 && a===1) || (b===1 && a===2) || (b===2 && a===0)) {
            a = "Laptop";
            results[2].innerHTML = a + " WINS!";
            scoreLaptop++;
            score[1].innerHTML = "Score Laptop: " + scoreLaptop;
            return scoreLaptop;
        } else {
            results[2].innerHTML = "DRAW!";
        }
    }
}