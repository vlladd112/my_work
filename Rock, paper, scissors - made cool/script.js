window.onload = function onload() {
    const playerNameInputContainer = document.getElementsByClassName('playerNameInputContainer')
    const playerNameInput = document.getElementsByClassName('playerNameInput');
    const selectGameTypeContainer = document.getElementById("selectGameTypeContainer");
    const infinite = document.getElementById("infinite");
    const rounds = document.getElementById("rounds");
    const selectRounds = document.getElementById("selectRounds");
    const play = document.getElementById('play');
    const rollButton = document.getElementById("roll");
    const roundsToBePlayed = document.getElementById("roundsToBePlayed");
    const playerName = document.getElementsByClassName('playerName');
    const rps = document.getElementsByClassName('rps');
    const rpsImage = document.getElementsByClassName('rpsImage');
    const playerRPSContainer = document.getElementsByClassName('playerRPSContainer');
    const results = document.getElementsByClassName("results");
    const theScore = document.getElementById('theScore');
    const score = document.getElementsByClassName("score");
    const imageContainer = document.getElementById("imageContainer");
    const resetScore = document.getElementById('resetScore');
    const changePlayers = document.getElementById('changePlayers');
    let player2Score = 0;
    let player1Score = 0;
    const player1Name = localStorage.getItem('player1');
    const player2Name = localStorage.getItem('player2');
    
    function gameType(){
        if(infinite.checked === true) {
            selectRounds.disabled = true;
        }
        else if(rounds.checked === true) {
            selectRounds.disabled = false;
        }
    }
    function clickRounds() {
        rounds.addEventListener('click', ()=> {
            selectRounds.disabled = false;
        })
    }
    function clickInfinite() {
        infinite.addEventListener('click', ()=> {
            selectRounds.disabled = true;
        })
    }
    
    
    
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
        imageContainer.style.display = "none";
        gameType();
        clickRounds();
        clickInfinite();
    }
    else if((player1Name || player2Name) !== null) {
        playerNameInputContainer[0].style.display = "none";
        playerNameInputContainer[1].style.display = "none";
        selectGameTypeContainer.style.display = "none";
        play.style.display = "none";
        rpsImage[0].style.display = "none";
        rpsImage[1].style.display = "none";
    }

    resetScore.addEventListener('click', ()=> {
        player1Score = 0;
        player2Score = 0;
        rpsImage[0].style.display = "none";
        rpsImage[1].style.display = "none";
        score[0].innerHTML = "0";
        score[1].innerHTML = "0";
        results[0].innerHTML = "Let's see who's better!";
    })
    play.addEventListener('click', (event)=> {
        for(let i=0; i<playerNameInput.length; i++) {
            if(playerNameInput[0].value === "" && playerNameInput[1].value === "") {
                
                playerNameInput[0].style.border = "2px solid red";
                playerNameInput[1].style.border = "2px solid red";
            }else if(playerNameInput[0].value !== "" && playerNameInput[1].value === "") {
                playerNameInput[0].style.border = "2px solid gray";
                playerNameInput[1].style.border = "2px solid red";
            }else if(playerNameInput[0].value === "" && playerNameInput[1].value !== "") {
                playerNameInput[0].style.border = "2px solid red";
                playerNameInput[1].style.border = "2px solid grey";
            }else if((playerNameInput[0].value && playerNameInput[1].value) !== ""){
                play.style.display = "none";
                selectGameTypeContainer.style.display = "none";
                playerRPSContainer[0].style.display = "flex";
                playerRPSContainer[1].style.display = "flex";
                rollButton.style.display = "flex";
                results[0].style.display = "flex";
                theScore.style.display = "flex";
                score[0].style.display = "flex";
                score[1].style.display = "flex";
                imageContainer.style.display = "flex";
                resetScore.style.display = "flex";
                changePlayers.style.display = "flex";
                rpsImage[0].style.display = "none";
                rpsImage[1].style.display = "none";
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
                
                if(infinite.checked === true) {
                    roundsToBePlayed.innerHTML = infinite.value;
                }
                else if(rounds.checked === true) {
                    console.log(selectRounds.value);
                    roundsToBePlayed.innerHTML = selectRounds.value;
                }
                
                changePlayers.addEventListener('click', ()=> {
                    localStorage.removeItem('player1');
                    localStorage.removeItem('player2');
                    playerRPSContainer[0].style.display = "none";
                    playerRPSContainer[1].style.display = "none";
                    rollButton.style.display = "none";
                    results[0].style.display = "none";
                    theScore.style.display = "none";
                    score[0].style.display = "none";
                    score[1].style.display = "none";
                    imageContainer.style.display = "none";
                    resetScore.style.display = "none";
                    changePlayers.style.display = "none";
                    playerNameInputContainer[0].style.display = "flex";
                    playerNameInputContainer[1].style.display = "flex";
                    selectGameTypeContainer.style.display = "flex";
                    play.style.display = "flex";
                    player1Score = 0;
                    player2Score = 0;
                    score[0].innerHTML = "0";
                    score[1].innerHTML = "0";
                    rpsImage[0].style.display = "none";
                    rpsImage[1].style.display = "none";
                    playerNameInput[0].style.border = "1px solid gray";
                    playerNameInput[1].style.border = "1px solid grey";
                    gameType();
                    clickRounds();
                    clickInfinite();
                });
                
                rollButton.onclick = function play() {
                    const posibilities = ["img/rock.png", "img/paper.png", "img/scissors.png"];
                    let a = Math.floor(Math.random() * 3);
                    let b = Math.floor(Math.random() * 3);
                    
                    rpsImage[0].style.display = "flex";
                    rpsImage[1].style.display = "flex";

                    playerName[0].innerHTML = player1Name;
                    rpsImage[0].src = posibilities[a];
                    playerName[1].innerHTML = player2Name;
                    rpsImage[1].src = posibilities[b];
                    
                    score[1].style.textShadow = "0 0 10px limegreen";
                    score[1].style.fontSize = "1em";
                    score[0].style.textShadow = "0 0 30px limegreen";
                    score[0].style.fontSize = "1em";

                    if ((a===0 && b===1) || (a===1 && b===2) || (a===2 && b===0)) {
                        results[0].innerHTML = player2Name + " WINS!";
                        player2Score++;
                        score[1].innerHTML = player2Score;
                        score[1].style.textShadow = "0px 0px 20px goldenrod";
                        score[1].style.fontSize = "1.5em";
//                        if(player2Score == selectRounds.)
                        return player2Score;
                    } else if ((b===0 && a===1) || (b===1 && a===2) || (b===2 && a===0)) {
                        results[0].innerHTML = player1Name + " WINS!";
                        player1Score++;
                        score[0].innerHTML = player1Score;
                        score[0].style.textShadow = "0px 0px 20px goldenrod";
                        score[0].style.fontSize = "1.5em";
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
        const posibilities = ["img/rock.png", "img/paper.png", "img/scissors.png"];
        let a = Math.floor(Math.random() * 3);
        let b = Math.floor(Math.random() * 3);
        
        rpsImage[0].style.display = "flex";
        rpsImage[1].style.display = "flex";

        playerName[0].innerHTML = player1Name;
        rpsImage[0].src = posibilities[a];
        playerName[1].innerHTML = player2Name;
        rpsImage[1].src = posibilities[b];
        score[1].style.textShadow = "0 0 10px limegreen";
        score[1].style.fontSize = "1em";
        score[0].style.textShadow = "0 0 30px limegreen";
        score[0].style.fontSize = "1em";

        if ((a===0 && b===1) || (a===1 && b===2) || (a===2 && b===0)) {
            results[0].innerHTML = player2Name + " WINS!";
            player2Score++;
            score[1].innerHTML = player2Score;
            score[1].style.textShadow = "0px 0px 20px goldenrod";
            score[1].style.fontSize = "1.5em";
            return player2Score;
        } else if ((b===0 && a===1) || (b===1 && a===2) || (b===2 && a===0)) {
            results[0].innerHTML = player1Name + " WINS!";
            player1Score++;
            score[0].innerHTML = player1Score;
            score[0].style.textShadow = "0px 0px 20px goldenrod";
            score[0].style.fontSize = "1.5em";
            return player1Score;
        } else {
            results[0].innerHTML = "DRAW!";
        };
        
    };
    changePlayers.addEventListener('click', ()=> {
        localStorage.removeItem('player1');
        localStorage.removeItem('player2');
        playerRPSContainer[0].style.display = "none";
        playerRPSContainer[1].style.display = "none";
        rollButton.style.display = "none";
        results[0].style.display = "none";
        theScore.style.display = "none";
        score[0].style.display = "none";
        score[1].style.display = "none";
        imageContainer.style.display = "none";
        resetScore.style.display = "none";
        changePlayers.style.display = "none";
        playerNameInputContainer[0].style.display = "flex";
        playerNameInputContainer[1].style.display = "flex";
        selectGameTypeContainer.style.display = "flex";
        play.style.display = "flex";
        player1Score = 0;
        player2Score = 0;
        score[0].innerHTML = "0";
        score[1].innerHTML = "0";
        rpsImage[0].style.display = "none";
        rpsImage[1].style.display = "none";
        gameType();
        clickRounds();
        clickInfinite();
    });
};