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
        result.innerHTML = "";
    }
    for (let i=amountOfNumbersToBeDisplayed; i>0; i--) {
        let rn = Math.ceil(Math.random()*randomNr)-1;
        let numarDePushat = numbersArray.splice(rn,1);
        randomNr -=1;
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