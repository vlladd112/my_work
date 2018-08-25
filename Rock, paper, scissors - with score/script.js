window.onload = function onload() {
    const playerNameInputContainer = document.getElementsByClassName('playerNameInputContainer')
    const playerNameInput = document.getElementsByClassName('playerNameInput');
    const play = document.getElementById('play');
    const rollButton = document.getElementById("roll");
    const playerName = document.getElementsByClassName('playerName');
    const rps = document.getElementsByClassName('rps');
    const rpsImage = document.getElementsByClassName('rpsImage');
    const playerRPSContainer = document.getElementsByClassName('playerRPSContainer');
    const results = document.getElementsByClassName("results");
    const theScore = document.getElementById('theScore');
    const score = document.getElementsByClassName("score");
    const resetScore = document.getElementById('resetScore');
    const changePlayers = document.getElementById('changePlayers');
    let player2Score = 0;
    let player1Score = 0;
    const player1Name = localStorage.getItem('player1');
    const player2Name = localStorage.getItem('player2');
    console.log(player1Name);
    console.log(player2Name);
    
    if((player1Name || player2Name) === null) {
        playerRPSContainer[0].style.display = "none";
        playerRPSContainer[1].style.display = "none";
        rollButton.style.display = "none";
        results[0].style.display = "none";
        theScore.style.display = "none";
        score[0].style.display = "none";
        score[1].style.display = "none";
        resetScore.style.display = "none";
        changePlayers.style.display = "none";
    }
    else if((player1Name || player2Name) !== null) {
        playerNameInputContainer[0].style.display = "none";
        playerNameInputContainer[1].style.display = "none";
        play.style.display = "none";
    }

    resetScore.addEventListener('click', ()=> {
        console.log('click reset score');
        player1Score = 0;
        player2Score = 0;
        score[0].innerHTML = "0";
        score[1].innerHTML = "0";
        rps[0].innerHTML = "";
        rps[1].innerHTML = "";
        results[0].innerHTML = "Let's see who's better!";
    })
    play.addEventListener('click', (event)=> {
        for(let i=0; i<playerNameInput.length; i++) {
            console.log(playerNameInput[i].value);
            if(playerNameInput[0].value === "" && playerNameInput[1].value === "") {
                
                playerNameInput[0].style.border = "1px solid red";
                playerNameInput[1].style.border = "1px solid red";
                playerNameInput[0].style.padding = "2px 1px";
                playerNameInput[1].style.padding = "2px 1px";
            }else if(playerNameInput[0].value !== "" && playerNameInput[1].value === "") {
                
                playerNameInput[0].style.border = "1px solid gray";
                playerNameInput[1].style.border = "1px solid red";
                playerNameInput[0].style.padding = "2px 1px";
                playerNameInput[1].style.padding = "2px 1px";
            }else if(playerNameInput[0].value === "" && playerNameInput[1].value !== "") {
                console.log("oare merge?");
                playerNameInput[0].style.border = "1px solid red";
                playerNameInput[1].style.border = "1px solid grey";
                playerNameInput[0].style.padding = "2px 1px";
                playerNameInput[1].style.padding = "2px 1px";
            }else if((playerNameInput[0].value && playerNameInput[1].value) !== ""){
                console.log('freeee');
                
                play.style.display = "none";
                playerRPSContainer[0].style.display = "flex";
                playerRPSContainer[1].style.display = "flex";
                rollButton.style.display = "flex";
                results[0].style.display = "flex";
                theScore.style.display = "flex";
                score[0].style.display = "flex";
                score[1].style.display = "flex";
                resetScore.style.display = "flex";
                changePlayers.style.display = "flex";
                
                playerNameInputContainer[i].style.display = "none";
                localStorage.setItem("player1", playerNameInput[0].value);
                localStorage.setItem("player2", playerNameInput[1].value);
                
                const player1Name = localStorage.getItem('player1');
                const player2Name = localStorage.getItem('player2');

                playerName[0].innerHTML = player1Name;
                playerName[1].innerHTML = player2Name;
                results[0].innerHTML = "Let's see who's better!";
                score[0].innerHTML = player1Score;
                score[1].innerHTML = player2Score;
                
                changePlayers.addEventListener('click', ()=> {
                    console.log('CLICK');
                    localStorage.removeItem('player1');
                    localStorage.removeItem('player2');
                    playerRPSContainer[0].style.display = "none";
                    playerRPSContainer[1].style.display = "none";
                    rollButton.style.display = "none";
                    results[0].style.display = "none";
                    theScore.style.display = "none";
                    score[0].style.display = "none";
                    score[1].style.display = "none";
                    resetScore.style.display = "none";
                    changePlayers.style.display = "none";
                    playerNameInputContainer[0].style.display = "flex";
                    playerNameInputContainer[1].style.display = "flex";
                    play.style.display = "flex";
                    player1Score = 0;
                    player2Score = 0;
                    score[0].innerHTML = "0";
                    score[1].innerHTML = "0";
                    rps[0].innerHTML = "";
                    rps[1].innerHTML = "";
                    playerNameInput[0].style.border = "1px solid gray";
                    playerNameInput[1].style.border = "1px solid grey";
                });
                
                rollButton.onclick = function play() {
                    const posibilities = ["Rock", "Paper", "Scissors"];
                    let a = Math.floor(Math.random() * 3);
                    let b = Math.floor(Math.random() * 3);

                    playerName[0].innerHTML = player1Name;
                    rps[0].innerHTML = posibilities[a];
                    playerName[1].innerHTML = player2Name;
                    rps[1].innerHTML = posibilities[b];

                    if ((a===0 && b===1) || (a===1 && b===2) || (a===2 && b===0)) {
                        results[0].innerHTML = player2Name + " WINS!";
                        player2Score++;
                        score[1].innerHTML = player2Score;
                        return player2Score;
                    } else if ((b===0 && a===1) || (b===1 && a===2) || (b===2 && a===0)) {
                        results[0].innerHTML = player1Name + " WINS!";
                        player1Score++;
                        score[0].innerHTML = player1Score;
                        return player1Score;
                    } else {
                        results[0].innerHTML = "DRAW!";
                    };
                };
            };
        };      
    });
    
    
    playerName[0].innerHTML = player1Name;
    playerName[1].innerHTML = player2Name;
    results[0].innerHTML = "Let's see who's better";
    score[0].innerHTML = player1Score;
    score[1].innerHTML = player2Score;
    
    rollButton.onclick = function play() {
        const posibilities = ["Rock", "Paper", "Scissors"];
        let a = Math.floor(Math.random() * 3);
        let b = Math.floor(Math.random() * 3);

        playerName[0].innerHTML = player1Name;
        rps[0].innerHTML = posibilities[a];
        playerName[1].innerHTML = player2Name;
        rps[1].innerHTML = posibilities[b];

        if ((a===0 && b===1) || (a===1 && b===2) || (a===2 && b===0)) {
            results[0].innerHTML = player2Name + " WINS!";
            player2Score++;
            score[1].innerHTML = player2Score;
            return player2Score;
        } else if ((b===0 && a===1) || (b===1 && a===2) || (b===2 && a===0)) {
            results[0].innerHTML = player1Name + " WINS!";
            player1Score++;
            score[0].innerHTML = player1Score;
            return player1Score;
        } else {
            results[0].innerHTML = "DRAW!";
        };
        
    };
    changePlayers.addEventListener('click', ()=> {
        console.log('CLICK');
        localStorage.removeItem('player1');
        localStorage.removeItem('player2');
        playerRPSContainer[0].style.display = "none";
        playerRPSContainer[1].style.display = "none";
        rollButton.style.display = "none";
        results[0].style.display = "none";
        theScore.style.display = "none";
        score[0].style.display = "none";
        score[1].style.display = "none";
        resetScore.style.display = "none";
        changePlayers.style.display = "none";
        playerNameInputContainer[0].style.display = "flex";
        playerNameInputContainer[1].style.display = "flex";
        play.style.display = "flex";
        player1Score = 0;
        player2Score = 0;
        score[0].innerHTML = "0";
        score[1].innerHTML = "0";
        rps[0].innerHTML = "";
        rps[1].innerHTML = "";
    });
};