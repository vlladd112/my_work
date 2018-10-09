const generateNumbers = document.getElementById('generate');
const result = document.getElementById('result');
const upToLottoNr = 49;
const amountOfNumbersToBeDisplayed = 6;
let randomNr = 0;
generateNumbers.addEventListener('click', ()=>{
    const numbersArray = [];
    const finalNumbers = [];
    for (i=1; i<=upToLottoNr; i++) {
        numbersArray.push(i);
        randomNr = numbersArray.length;
    }
    for (let i=amountOfNumbersToBeDisplayed; i>0; i--) {
        let rn = Math.ceil(Math.random()*randomNr)-1;
        let numarDePushat = numbersArray.splice(rn,1);
        finalNumbers.push(numarDePushat);
        randomNr -=1;
    }
    const numereleFinale = String(finalNumbers);
    const noCommas = numereleFinale.replace(/,/g, " &nbsp;&nbsp;");
    result.innerHTML = noCommas;
})