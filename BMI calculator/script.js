var person1 = document.getElementsByClassName("person1");
var person2 = document.getElementsByClassName("person2");
var claculate = document.getElementById("calc");
const weightStatus = document.getElementById('weightStatus');
const normalBodyWeight = document.getElementById('normalBodyWeight');
const weightPlusMinus = document.getElementById('weightPlusMinus');
const optimumBodyWeight = document.getElementById('optimumWeight');
const optimumBodyWeightPlusMinus = document.getElementById('optimumWeightPlusMinus');
const rezultatContainer = document.getElementsByClassName('rezultatContainer');
const rezultate = document.getElementById('rezultate');
const html = document.getElementById('html');

function diferenta(x, y) {
    var dif = x - y;
    return dif;
}
function fbmi(h, kg) {
    var imece = Math.ceil((kg / (h * h)) * 100);
    var imece = imece / 100;
    return imece;
}
function diferenta(x,y) {
    var dif = x - y;
    dif = Math.round(dif * 10) / 10;
    return dif;
}
function bmiNormal(h, kg) {
    var normalbmi = Math.ceil((kg / (h * h)) * 100);
    normalbmi = normalbmi / 100;
    return normalbmi;
}
function weightOfPerson(bmi, h) {
    var weight = ((bmi * (h * h))  );
    weight = Math.round(weight * 10) / 10;
    return weight;
}
function optimumWeight(normalWeightHigh, normalWeightLow) {
    var optimumWeightForPerson = (normalWeightHigh + normalWeightLow) / 2;
    optimumWeightForPerson = Math.round(optimumWeightForPerson * 10) / 10;
    return optimumWeightForPerson;
}
function checkTypeL(person1) {
    var letters = /^[A-Za-z-' ]+$/;
    if (person1.value.match(letters)) {
        person1.style.border = ""
        return true;
    } else {
        person1.style.border = "2px solid red";
    }
}
const checkValues = function checkValues (Yna, Yhe, Ywe) {
    var letters = /^[A-Za-z]+$/;
    if (Yna.value == "") {
        Yna.style.border = "2px solid red";
    } else if (person1[0].value != "") {
        Yna.style.border = "";
    }
    if (Yhe.value == "") {
        Yhe.style.border = "2px solid red";
    } else if (Yhe.value != "") {
        Yhe.style.border = "";
    }
    if (Ywe.value == "") {
        Ywe.style.border = "2px solid red";
    } else if (Ywe.value != "") {
        Ywe.style.border = "";
    }
    if (((Yna.value) && (Yhe.value) && (Ywe.value)) != "") {
        return true;
    }
}

window.onload = function onload() {
    person1 = document.getElementsByClassName("person1");
    person2 = document.getElementsByClassName("person2");
    results = document.getElementsByClassName("rezultat");
    bmi = document.getElementsByClassName("bmi");
    person2Checkbox = document.getElementById('person2Checkbox');
    person2Parag = document.getElementById('person2Parag');
}
calc.onclick = ()=> {
    html.style.display = "flex";
    rezultate.style.display = "none";
    checkValues(person1[0], person1[1], person1[2]);
    if((checkValues(person1[0], person1[1], person1[2])) === true) {
        console.log('fields have value insde');
        if((checkTypeL(person1[0])) === true) {
        console.log('name value is correct');
            html.style.display = "block";
            rezultate.style.display = "block";
            results[0].innerHTML = person1[0].value;
            results[1].innerHTML = "Height: " + person1[1].value + " m";
            results[2].innerHTML = "Weight: " + person1[2].value + " kg";
            const bmiResultP1 = fbmi(person1[1].value, person1[2].value);
            console.log(bmiResultP1);
            bmi[0].innerHTML = bmiResultP1;
//            normalBodyWeight.style.color = "green";
//            optimumBodyWeight.style.color = "green";
            if(bmiResultP1 < 18.5) {
                bmi[0].style.color = "dodgerblue";
                weightStatus.style.color = "dodgerblue";
            } else if(bmiResultP1 < 25) {
                bmi[0].style.color = "green";
                weightStatus.style.color = "green";
            };
            const bmiP1 = bmiNormal(person1[1].value, person1[2].value);
            console.log("bmi P1:", bmiP1);
            if(bmiP1 > 24.99) {
                const weightP1 = weightOfPerson(bmiP1, person1[1].value);
                const weightNormalHigh = weightOfPerson(24.98, person1[1].value);
                const weightNormalLow = weightOfPerson(18.51, person1[1].value);
                const optimumWeightPerson = optimumWeight(weightNormalHigh, weightNormalLow);
                const weightDifferencePlusHigh = diferenta(weightP1, weightNormalHigh);
                const weightDifferencePlusLow = diferenta(weightP1, weightNormalLow);
                const weightDifferenceOptimumPlus = diferenta(weightP1, optimumWeightPerson);
                console.log(weightDifferenceOptimumPlus);
                
                normalBodyWeight.innerHTML = "Normal body weight is between " + "<span class='normalBodyWeightSpan'>" + weightNormalLow + "</span>" + " kg - " + "<span class='normalBodyWeightSpan'>" + weightNormalHigh + "</span>" + " kg";
                optimumBodyWeight.innerHTML = "Optimum weight: " + "<span id='optimumBodyWeightSpan'>" + optimumWeightPerson + "</span>" + " kg";
                weightPlusMinus.innerHTML = "For normal weight, lose between " + weightDifferencePlusHigh + " kg - " + weightDifferencePlusLow + " kg";
                optimumBodyWeightPlusMinus.innerHTML = "For optimum weight, lose " + "<span id='optimumBodyWeightPlusMinusSpan'>" + weightDifferenceOptimumPlus + "</span>" + " kg";
                const normalBodyWeightSpan = document.getElementsByClassName('normalBodyWeightSpan');
                const optimumBodyWeightSpan = document.getElementById('optimumBodyWeightSpan');
                const optimumBodyWeightPlusMinusSpan = document.getElementById('optimumBodyWeightPlusMinusSpan');
                normalBodyWeightSpan[0].style.color = "green";
                normalBodyWeightSpan[1].style.color = "green";
                optimumBodyWeightSpan.style.color = "green";
                console.log(optimumBodyWeightSpan);
                if(bmiResultP1 < 30) {
                weightStatus.innerHTML = "Overweight";
                bmi[0].style.color = "orange";
                weightStatus.style.color = "orange";
                optimumBodyWeightPlusMinusSpan.style.color = "orange";
            } else if(bmiResultP1 < 35) {
                weightStatus.innerHTML = "Obese (1st degree)";
                bmi[0].style.color = "lightcoral";
                weightStatus.style.color = "lightcoral";
                optimumBodyWeightPlusMinusSpan.style.color = "lightcoral";
            } else if(bmiResultP1 < 40) {
                weightStatus.innerHTML = "Obese (2st degree)";
                bmi[0].style.color = "red";
                weightStatus.style.color = "red";
                optimumBodyWeightPlusMinusSpan.style.color = "red";
            } else if(bmiResultP1 > 40) {
                weightStatus.innerHTML = "Morbid obesity";
                bmi[0].style.color = "darkred";
                weightStatus.style.color = "darkred";
                optimumBodyWeightPlusMinusSpan.style.color = "darkred";
            };
            }
            if(18.49 < bmiP1 && bmiP1 <25) {
                const weightP1 = weightOfPerson(bmiP1, person1[1].value);
                const weightNormalHigh = weightOfPerson(24.98, person1[1].value);
                const weightNormalLow = weightOfPerson(18.51, person1[1].value);
                const optimumWeightPerson = optimumWeight(weightNormalHigh, weightNormalLow);
                const weightDifferencePlusHigh = diferenta(weightP1, weightNormalHigh);
                const weightDifferencePlusLow = diferenta(weightP1, weightNormalLow);
                const weightDifferenceOptimumPlus = diferenta(weightP1, optimumWeightPerson);
                const weightDifferenceOptimumMinus = diferenta(optimumWeightPerson, weightP1);
                
                weightStatus.innerHTML = "Normal weight";
                normalBodyWeight.innerHTML = "Normal body weight is between " + "<span class='normalBodyWeightSpan'>" + weightNormalLow + "</span>" + " kg - " + "<span class='normalBodyWeightSpan'>" + weightNormalHigh + "</span>" + " kg";
                optimumBodyWeight.innerHTML = "Optimum weight: " + "<span id='optimumBodyWeightSpan'>" + optimumWeightPerson + "</span>" + " kg";
                weightPlusMinus.innerHTML = "Your weight is in normal standards";
                if(person1[2].value > optimumWeightPerson) {
                    optimumBodyWeightPlusMinus.innerHTML = "For optimum weight, lose " + "<span id='optimumBodyWeightPlusMinusSpan'>" + weightDifferenceOptimumPlus + "<span>" + " kg";
                } else if(person1[2].value < optimumWeightPerson) {
                    optimumBodyWeightPlusMinus.innerHTML = "For optimum weight, gain " + "<span id='optimumBodyWeightPlusMinusSpan'>" + weightDifferenceOptimumMinus + "<span>" + " kg";
                } else if(person1[2].value == optimumWeightPerson) {
                    optimumBodyWeightPlusMinus.innerHTML = "Congratulations, you have optimum weight!";
                }
                const normalBodyWeightSpan = document.getElementsByClassName('normalBodyWeightSpan');
                const optimumBodyWeightSpan = document.getElementById('optimumBodyWeightSpan');
                const optimumBodyWeightPlusMinusSpan = document.getElementById('optimumBodyWeightPlusMinusSpan');
                normalBodyWeightSpan[0].style.color = "green";
                normalBodyWeightSpan[1].style.color = "green";
                optimumBodyWeightSpan.style.color = "green";
                optimumBodyWeightPlusMinusSpan.style.color = "green";
            }
            if(bmiP1 <= 18.49) {
                const weightP1 = weightOfPerson(bmiP1, person1[1].value);
                const weightNormalHigh = weightOfPerson(18.51, person1[1].value);
                const weightNormalLow = weightOfPerson(24.98, person1[1].value);
                const optimumWeightPerson = optimumWeight(weightNormalHigh, weightNormalLow);
                const weightDifferenceMinusHigh = diferenta(weightNormalHigh, weightP1);
                const weightDifferenceMinusLow = diferenta(weightNormalLow, weightP1);
                const weightDifferenceOptimumMinus = diferenta(optimumWeightPerson, weightP1);
                console.log(optimumWeightPerson);
                console.log(weightDifferenceOptimumMinus);
                
                weightStatus.innerHTML = "Underweight";
                normalBodyWeight.innerHTML = "Normal body weight is between " + "<span class='normalBodyWeightSpan'>" + weightNormalHigh + "</span>" + " kg - " + "<span class='normalBodyWeightSpan'>" + weightNormalLow + "</span>" + " kg";
                optimumBodyWeight.innerHTML = "Optimum weight: " + "<span id='optimumBodyWeightSpan'>" + optimumWeightPerson + "</span>" + " kg";
                weightPlusMinus.innerHTML = "For normal weight, gain between " + weightDifferenceMinusHigh + " kg - " + weightDifferenceMinusLow + " kg";
                optimumBodyWeightPlusMinus.innerHTML = "For optimum weight, gain " + "<span id='optimumBodyWeightPlusMinusSpan'>" + weightDifferenceOptimumMinus + "<span>" + " kg";
                const normalBodyWeightSpan = document.getElementsByClassName('normalBodyWeightSpan');
                const optimumBodyWeightSpan = document.getElementById('optimumBodyWeightSpan');
                const optimumBodyWeightPlusMinusSpan = document.getElementById('optimumBodyWeightPlusMinusSpan');
                normalBodyWeightSpan[0].style.color = "green";
                normalBodyWeightSpan[1].style.color = "green";
                optimumBodyWeightSpan.style.color = "green";
                optimumBodyWeightPlusMinusSpan.style.color = "dodgerblue";
            }
        }
    }
}