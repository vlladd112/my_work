window.onload = function onload() {
    const playerNameInputContainer = document.getElementsByClassName('playerNameInputContainer')
    const playerNameInput = document.getElementsByClassName('playerNameInput');
    const selectGameTypeContainer = document.getElementById("selectGameTypeContainer");
    const infinite = document.getElementById("infinite");
    const rounds = document.getElementById("rounds");
    const scoreGlobalContainer = document.getElementById("scoreGlobalContainer");
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
//    const player1Name = localStorage.getItem('player1');
//    const player2Name = localStorage.getItem('player2');
    const checkForLS = localStorage.getItem("RPS");
    const getRpsLS = localStorage.getItem('RPS');
//    const parsedRpsLS = JSON.parse(getRpsLS);
//    console.log("parsedRpsLs:", parsedRpsLS, getRpsLS, checkForLS);
//    const player1Name = parsedRpsLS.player1;
//    const player2Name = parsedRpsLS.player2;
//    const rn = parsedRpsLS.roundNr;
//    const rst = parsedRpsLS.roundStr;
    
//    roundsToBePlayed.innerHTML = rst;
    
    console.log("Check for LS:", checkForLS);
    
    if(checkForLS === null){
        console.log("NO LS DETECTED");
    }
    else if(checkForLS !== null){
        console.log("LS HAS BEEN DETECTED");
    }
    
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
    
    
    
    if(checkForLS === null) {
        playerRPSContainer[0].style.display = "none";
        playerRPSContainer[1].style.display = "none";
        rollButton.style.display = "none";
        results[0].style.display = "none";
        theScore.style.display = "none";
        console.log("been here");
//        scoreGlobalContainer.style.display = "none";
        score[0].style.display = "none";
        score[0].style.display = "none";
        score[1].style.display = "none";
        resetScore.style.display = "none";
        changePlayers.style.display = "none";
        imageContainer.style.display = "none";
        roundsToBePlayed.style.display = "none";
        gameType();
        clickRounds();
        clickInfinite();
    }
    else if(checkForLS !== null) {
        const parsedRpsLS = JSON.parse(getRpsLS);
        console.log("parsedRpsLs:", parsedRpsLS, getRpsLS, checkForLS);
        const player1Name = parsedRpsLS.player1;
        const player2Name = parsedRpsLS.player2;
        const rn = parsedRpsLS.roundNr;
        const rst = parsedRpsLS.roundStr;
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
        rollButton.style.visibility = "visible";
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
                rpsImage[0].style.display = "none";
                rpsImage[1].style.display = "none";
                playerNameInputContainer[i].style.display = "none";
                roundsToBePlayed.style.display = "block";
                playerRPSContainer[0].style.display = "flex";
                playerRPSContainer[1].style.display = "flex";
                rollButton.style.display = "flex";
                rollButton.style.visibility = "visible";
                results[0].style.display = "flex";
                theScore.style.display = "flex";
                score[0].style.display = "flex";
                score[1].style.display = "flex";
                imageContainer.style.display = "flex";
                resetScore.style.display = "flex";
                changePlayers.style.display = "flex";
                
                
                const roundsString = selectRounds.value;
//                console.log("roundsString", roundsString);
                let roundNumber = roundsString.slice(0, 2);
//                console.log("round NR:", roundNumber);
                
                
                
//                const player1Name = localStorage.getItem('player1');
//                const player2Name = localStorage.getItem('player2');
                const rpsLS = {
                    player1 : playerNameInput[0].value,
                    player2 : playerNameInput[1].value,
                    roundNr : roundNumber,
                    roundStr : ""
                }
                
                console.log("XXXXX", rpsLS, JSON.stringify(rpsLS));
                
                localStorage.setItem("RPS", JSON.stringify(rpsLS));
//                const pula = localStorage.getItem("RPS");
//                const pulala = JSON.parse(pula);
//                console.log("PULA", pula);
//                console.log("PULALALA", pulala.roundStr);
                const getRpsLS = localStorage.getItem('RPS');
                const parsedRpsLS = JSON.parse(getRpsLS);
                const player1Name = parsedRpsLS.player1;
                const player2Name = parsedRpsLS.player2;
                const rn = parsedRpsLS.roundNr;
                const rst = parsedRpsLS.roundStr;
                console.log("Local storage complet:", player1Name, player2Name, rn, rst);

                playerName[0].innerHTML = player1Name;
                playerName[1].innerHTML = player2Name;
                results[0].innerHTML = "Let's see who's better!";
                score[0].innerHTML = player1Score;
                score[1].innerHTML = player2Score;
                
                if(infinite.checked === true) {
                    roundsToBePlayed.innerHTML = infinite.value;
                    rpsLS.roundStr = infinite.value;
                    rpsLS.roundNr = "";
                    localStorage.setItem("RPS", JSON.stringify(rpsLS));
                    roundNumber = -1;
                }
                else if(rounds.checked === true) {
                    console.log(selectRounds.value);
                    roundsToBePlayed.innerHTML = selectRounds.value;
                    const roundsString = selectRounds.value;
                    rpsLS.roundStr = selectRounds.value;
                    localStorage.setItem("RPS", JSON.stringify(rpsLS));
                    console.log("roundsString", roundsString);
                    roundNumber = roundsString.slice(0, 2);
                    console.log("round NR:", roundNumber);
                }
                
                
                
//                localStorage.setItem("player1", playerNameInput[0].value);
//                localStorage.setItem("player2", playerNameInput[1].value);
//                console.log("la LS vede?", roundNumber);
//                console.log("select round ls LS:", selectRounds.value);
                
                changePlayers.addEventListener('click', ()=> {
                    localStorage.removeItem('player1');
                    localStorage.removeItem('player2');
                    roundsToBePlayed.style.display = "none";
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
                        if(player2Score == roundNumber){
                            console.log("RUNDA CAStigata de p2");
                            rollButton.style.visibility = "hidden";
                            results[0].innerHTML = "Round winner: " + player2Name;
                            console.log("o vede?", roundNumber);
                        }
                        return player2Score;
                    } else if ((b===0 && a===1) || (b===1 && a===2) || (b===2 && a===0)) {
                        results[0].innerHTML = player1Name + " WINS!";
                        player1Score++;
                        score[0].innerHTML = player1Score;
                        score[0].style.textShadow = "0px 0px 20px goldenrod";
                        score[0].style.fontSize = "1.5em";
                        if(player1Score == roundNumber){
                            console.log("RUNDA CAStigata de p1");
                            rollButton.style.visibility = "hidden";
                            results[0].innerHTML = "Round winner: " + player1Name;
                            console.log("o vede?", roundNumber);
                        }
                        return player1Score;
                    } else {
                        results[0].innerHTML = "DRAW!";
                    };
                };
            };
        }; 
    });
    
    
    const parsedRpsLS = JSON.parse(getRpsLS);
    console.log("parsedRpsLs:", parsedRpsLS, getRpsLS, checkForLS);
    const player1Name = parsedRpsLS.player1;
    const player2Name = parsedRpsLS.player2;
    const rn = parsedRpsLS.roundNr;
    const rst = parsedRpsLS.roundStr;
    
//    const roundsString = selectRounds.value;
//    console.log("roundsString", roundsString);
//    let roundNumber = roundsString.slice(0, 1);
//    console.log("round NR:", roundNumber);
    
    playerName[0].innerHTML = player1Name;
    playerName[1].innerHTML = player2Name;
    results[0].innerHTML = "Let's see who's better";
    score[0].innerHTML = player1Score;
    score[1].innerHTML = player2Score;
    roundsToBePlayed.innerHTML = rst;
    
    
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
            if(player2Score == rn){
                            console.log("RUNDA CAStigata de p2");
                            rollButton.style.visibility = "hidden";
                            results[0].innerHTML = "Round winner: " + player2Name;
//                            console.log("o vede?", roundNumber);
                        }
            return player2Score;
        } else if ((b===0 && a===1) || (b===1 && a===2) || (b===2 && a===0)) {
            results[0].innerHTML = player1Name + " WINS!";
            player1Score++;
            score[0].innerHTML = player1Score;
            score[0].style.textShadow = "0px 0px 20px goldenrod";
            score[0].style.fontSize = "1.5em";
            if(player1Score == rn){
                console.log("RUNDA CAStigata de p1");
                rollButton.style.visibility = "hidden";
                results[0].innerHTML = "Round winner: " + player1Name;
//                console.log("o vede?", roundNumber);
            }
            return player1Score;
        } else {
            results[0].innerHTML = "DRAW!";
        };
        
    };
    changePlayers.addEventListener('click', ()=> {
        localStorage.removeItem('player1');
        localStorage.removeItem('player2');
        roundsToBePlayed.style.display = "none";
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