const generateNumbers = document.getElementById('generate');
const result = document.getElementById('result');
let randomNr = 0;
let amountOfNumbersToBeDisplayed = document.getElementById("amountOfNumbers");
let upToLottoNr = document.getElementById("upToNumbers");
upToLottoNr.value = 49;
amountOfNumbersToBeDisplayed.value = 6;

function checkNumbers() {
    const nr1NrMin = Number(amountOfNumbersToBeDisplayed.min);
    const nr1NrMax = Number(amountOfNumbersToBeDisplayed.max);
    if(amountOfNumbersToBeDisplayed.value < nr1NrMin) {
        amountOfNumbersToBeDisplayed.value = nr1NrMin;
        amountOfNumbersToBeDisplayed.innerHTML = amountOfNumbersToBeDisplayed.value;
    }
    else if(amountOfNumbersToBeDisplayed.value > nr1NrMax) {
        amountOfNumbersToBeDisplayed.value = nr1NrMax;
        amountOfNumbersToBeDisplayed.innerHTML = amountOfNumbersToBeDisplayed.value;
    }
    upToLottoNr.min = Number(amountOfNumbersToBeDisplayed.value);
    const nr2NrMin = Number(upToLottoNr.min);
    const nr2NrMax = Number(upToLottoNr.max);
    if(upToLottoNr.value < nr2NrMin) {
        upToLottoNr.value = nr2NrMin;
        upToLottoNr.innerHTML = upToLottoNr.value;
    }
    else if(upToLottoNr.value > nr2NrMax) {
        upToLottoNr.value = nr2NrMax;
        upToLottoNr.innerHTML = upToLottoNr.value;
    }
}

generateNumbers.addEventListener('click', () => {

    const numbersArray = [];
    const finalNumbers = [];
    checkNumbers();
    for (i = 1; i <= upToLottoNr.value; i++) {
        numbersArray.push(i);
        randomNr = numbersArray.length;
        result.innerHTML = "";
    }
    for (let i = amountOfNumbersToBeDisplayed.value; i > 0; i--) {
        let rn = Math.ceil(Math.random() * randomNr) - 1;
        let numarDePushat = numbersArray.splice(rn, 1);
        randomNr -= 1;
        const numarSimplu = String(numarDePushat);
        finalNumbers.push(numarSimplu);
        const divForShadow = document.createElement('div');
        divForShadow.className = "divForShadow";
        result.appendChild(divForShadow);
        const divForNumberSpan = document.createElement('div');
        divForNumberSpan.className = "divForNumberSpan";
        divForShadow.appendChild(divForNumberSpan);
        const createSpanForEachNumber = document.createElement('span');
        createSpanForEachNumber.innerHTML = numarSimplu;
        divForNumberSpan.appendChild(createSpanForEachNumber);
    }
    //    const numereleFinale = String(finalNumbers);
    //    const noCommas = finalNumbers.replace(/,/g, " &nbsp;&nbsp;");
    //    console.log(finalNumbers);
    //    result.innerHTML = noCommas;
})
