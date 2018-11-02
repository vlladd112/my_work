const generateNumbers = document.getElementById('generate');
const result = document.getElementById('result');

let randomNr = 0;

    let amountOfNumbersToBeDisplayed = document.getElementById("amountOfNumbers");
    let upToLottoNr = document.getElementById("upToNumbers");
    upToLottoNr.value = 49;
    amountOfNumbersToBeDisplayed.value = 6;

function frstNr(){
    let n1 = Number(amountOfNumbersToBeDisplayed.value);
        let n2 = Number(upToLottoNr.value);
    if(amountOfNumbersToBeDisplayed.value > 10) {
        
        if(amountOfNumbersToBeDisplayed.value > 10 && upToLottoNr.value < 10) {
            console.log("II bai");
            upToLottoNr.value = amountOfNumbersToBeDisplayed.max;
        }
        
        console.log(amountOfNumbersToBeDisplayed.value, ">", amountOfNumbersToBeDisplayed.max);
        amountOfNumbersToBeDisplayed.value = amountOfNumbersToBeDisplayed.max;
        amountOfNumbersToBeDisplayed.innerHTML = amountOfNumbersToBeDisplayed.max;
        console.log(amountOfNumbersToBeDisplayed.value, amountOfNumbersToBeDisplayed.max)
        console.log("DA, e mai mare")
    } else if (amountOfNumbersToBeDisplayed.value < 1) {
        console.log("noooo");
        amountOfNumbersToBeDisplayed.value = amountOfNumbersToBeDisplayed.min;
        amountOfNumbersToBeDisplayed.innerHTML = amountOfNumbersToBeDisplayed.min;
        
    } else if(n1 > n2) {
            console.log("EEEEEEEEEEEEEEEEEEEEE");
        upToLottoNr.min = amountOfNumbersToBeDisplayed.value;
        
        upToLottoNr.value = upToLottoNr.min;
    } else if(upToLottoNr.value > 99) {
        upToLottoNr.value = upToLottoNr.max;
        upToLottoNr.innerHTML = upToLottoNr.max;
        console.log("CE dracy?");
    }
};

function secndNr(){
    if(upToLottoNr.value < amountOfNumbersToBeDisplayed.value) {
        upToLottoNr.value = amountOfNumbersToBeDisplayed.value;
        upToLottoNr.innerHTML = upToLottoNr.value;
        console.log("Hopaaa");
    } else if(upToLottoNr.value > 99) {
        upToLottoNr.value = upToLottoNr.max;
        upToLottoNr.innerHTML = upToLottoNr.max;
        console.log("CE dracy?");
    }
};

generateNumbers.addEventListener('click', ()=>{
    
    const numbersArray = [];
    const finalNumbers = [];
//    let amountOfNumbersToBeDisplayed = document.getElementById("amountOfNumbers");
//    let upToLottoNr = document.getElementById("upToNumbers");
////    const upToLottoNrMax = document.getElementById("upToNumbers").max;
//    console.log(amountOfNumbersToBeDisplayed.value);
//    if(amountOfNumbersToBeDisplayed.value > 10) {
//        if(amountOfNumbersToBeDisplayed.value > 10 && upToLottoNr.value < 10) {
//            console.log("II bai");
//            upToLottoNr.value = amountOfNumbersToBeDisplayed.max;
//        }
//        console.log(amountOfNumbersToBeDisplayed.value, ">", amountOfNumbersToBeDisplayed.max);
//        amountOfNumbersToBeDisplayed.value = amountOfNumbersToBeDisplayed.max;
//        amountOfNumbersToBeDisplayed.innerHTML = amountOfNumbersToBeDisplayed.max;
//        console.log(amountOfNumbersToBeDisplayed.value, amountOfNumbersToBeDisplayed.max)
//        console.log("DA, e mai mare")
//    } else if (amountOfNumbersToBeDisplayed.value < 1) {
//        console.log("noooo");
//        amountOfNumbersToBeDisplayed.value = amountOfNumbersToBeDisplayed.min;
//        amountOfNumbersToBeDisplayed.innerHTML = amountOfNumbersToBeDisplayed.min;
//    }
    frstNr();
    console.log(amountOfNumbersToBeDisplayed.value);
    console.log(upToLottoNr.value);
    console.log("plm:", amountOfNumbersToBeDisplayed.value, "uptolottovalue:", upToLottoNr.value);
//    secndNr();
    
//    if(upToLottoNr.value < amountOfNumbersToBeDisplayed.value) {
//        upToLottoNr.value = amountOfNumbersToBeDisplayed.value;
//        upToLottoNr.innerHTML = upToLottoNr.value;
//        console.log("Hopaaa");
//    } else if(upToLottoNr.value > 99) {
//        upToLottoNr.value = upToLottoNr.max;
//        upToLottoNr.innerHTML = upToLottoNr.max;
//        console.log("CE dracy?");
//    }
    for (i=1; i<=upToLottoNr.value; i++) {
        numbersArray.push(i);
        randomNr = numbersArray.length;
        result.innerHTML = "";
    }
    console.log("amountOfNumbersToBeDisplayed.value before loop:", amountOfNumbersToBeDisplayed.value);
    for (let i=amountOfNumbersToBeDisplayed.value; i>0; i--) {
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