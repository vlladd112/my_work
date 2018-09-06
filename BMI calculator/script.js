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

function diferenta(x, y) {
    var dif = x - y;
    return dif;
}
function fbmi(h, kg) {
    var imece = Math.ceil((kg / (h * h)) * 1000000);
    var imece = imece / 100;
    return imece;
}
function diferenta(x,y) {
    var dif = x - y;
    dif = Math.round(dif * 10) / 10;
    return dif;
}
function bmiNormal(h, kg) {
    var normalbmi = Math.ceil((kg / (h * h)) * 1000000);
    normalbmi = normalbmi / 100;
    return normalbmi;
}
function weightOfPerson(bmi, h) {
    var weight = ((bmi * (h * h)) / 10000);
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
        person1.style.border = "1px solid red";
    }
}

const checkValues = function checkValues (Yna, Yhe, Ywe) {
    var letters = /^[A-Za-z]+$/;
    if (Yna.value == "") {
        Yna.style.border = "1px solid red";
    } else if (person1[0].value != "") {
        Yna.style.border = "";
    }
    if (Yhe.value == "") {
        Yhe.style.border = "1px solid red";
    } else if (Yhe.value != "") {
        Yhe.style.border = "";
    }
    if (Ywe.value == "") {
        Ywe.style.border = "1px solid red";
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
    checkValues(person1[0], person1[1], person1[2]);
    if((checkValues(person1[0], person1[1], person1[2])) === true) {
        console.log('fields have value insde');
        if((checkTypeL(person1[0])) === true) {
        console.log('name value is correct');
            rezultate.style.display = "block";
            results[0].innerHTML = "Name: " + person1[0].value;
            results[1].innerHTML = "Height: " + person1[1].value + "cm";
            results[2].innerHTML = "Weight: " + person1[2].value + "kg";
            const bmiResultP1 = fbmi(person1[1].value, person1[2].value);
            console.log(bmiResultP1);
            bmi[0].innerHTML = bmiResultP1;
            if(bmiResultP1 < 18.5) {
                bmi[0].style.color = "blue";
            } else if(bmiResultP1 < 25) {
                bmi[0].style.color = "green";
            } else if(bmiResultP1 < 30) {
                bmi[0].style.color = "gold";
            } else if(bmiResultP1 < 35) {
                bmi[0].style.color = "orange";
            } else if(bmiResultP1 < 40) {
                bmi[0].style.color = "red";
            } else if(bmiResultP1 > 40) {
                bmi[0].style.color = "darkred";
            };
            const bmiP1 = bmiNormal(person1[1].value, person1[2].value);
            console.log("bmi P1:", bmiP1);
            if(bmiP1 > 24.99) {
                const weightP1 = weightOfPerson(bmiP1, person1[1].value);
                const weightNormalHigh = weightOfPerson(24.99, person1[1].value);
                const weightNormalLow = weightOfPerson(18.5, person1[1].value);
                const optimumWeightPerson = optimumWeight(weightNormalHigh, weightNormalLow);
                const weightDifferencePlusHigh = diferenta(weightP1, weightNormalHigh);
                const weightDifferencePlusLow = diferenta(weightP1, weightNormalLow);
                const weightDifferenceOptimumPlus = diferenta(weightP1, optimumWeightPerson);
                console.log(weightDifferenceOptimumPlus);
                results[0].innerHTML = "Name: " + person1[0].value;
                results[1].innerHTML = "Height: " + person1[1].value + " cm";
                results[2].innerHTML = "Weight: " + person1[2].value + " kg";
                weightStatus.innerHTML = "Overweight";
                normalBodyWeight.innerHTML = "Your normal body weight should be between " + weightNormalLow + " kg - " + weightNormalHigh + " kg";
                optimumBodyWeight.innerHTML = "Optimum weight: " + optimumWeightPerson + " kg";
                weightPlusMinus.innerHTML = "For normal weight, loose between " + weightDifferencePlusHigh + " kg - " + weightDifferencePlusLow + " kg";
                optimumBodyWeightPlusMinus.innerHTML = "For optimum weight, loose " + weightDifferenceOptimumPlus + " kg";
            }
            if(18.5 <= bmiP1 && bmiP1 <= 25) {
                const weightP1 = weightOfPerson(bmiP1, person1[1].value);
                const weightNormalHigh = weightOfPerson(24.99, person1[1].value);
                const weightNormalLow = weightOfPerson(18.5, person1[1].value);
                const optimumWeightPerson = optimumWeight(weightNormalHigh, weightNormalLow);
                
                const weightDifferencePlusHigh = diferenta(weightP1, weightNormalHigh);
                const weightDifferencePlusLow = diferenta(weightP1, weightNormalLow);
                const weightDifferenceOptimumPlus = diferenta(weightP1, optimumWeightPerson);
                const weightDifferenceOptimumMinus = diferenta(optimumWeightPerson, weightP1);
                
                results[0].innerHTML = "Name: " + person1[0].value;
                results[1].innerHTML = "Height: " + person1[1].value + " cm";
                results[2].innerHTML = "Weight: " + person1[2].value + " kg";
                weightStatus.innerHTML = "Normal weight";
                normalBodyWeight.innerHTML = "Your normal body weight should be between " + weightNormalLow + " kg - " + weightNormalHigh + " kg";
                optimumBodyWeight.innerHTML = "Optimum weight: " + optimumWeightPerson + " kg";
                console.log('NORMAL WEIGHT');
                
                weightPlusMinus.innerHTML = "Your weight is in normal standarns";
                
                if(person1[2].value > optimumWeightPerson) {
                    optimumBodyWeightPlusMinus.innerHTML = "For optimum weight, loose " + weightDifferenceOptimumPlus + " kg";
                } else if(person1[2].value < optimumWeightPerson) {
                    optimumBodyWeightPlusMinus.innerHTML = "For optimum weight, gain " + weightDifferenceOptimumMinus + " kg";
                } else if (person1[2].value == optimumWeightPerson) {
                    optimumBodyWeightPlusMinus.innerHTML = "Congratulations, you have optimum weight!";
                }
                
//                const optimumWeightPerson = optimumWeight(weightNormalHigh, weightNormalLow);
            }
            if(bmiP1 < 18.5) {
                const weightP1 = weightOfPerson(bmiP1, person1[1].value);
                const weightNormalHigh = weightOfPerson(18.51, person1[1].value);
                const weightNormalLow = weightOfPerson(24.99, person1[1].value);
                const optimumWeightPerson = optimumWeight(weightNormalHigh, weightNormalLow);
                const weightDifferenceMinusHigh = diferenta(weightNormalHigh, weightP1);
                const weightDifferenceMinusLow = diferenta(weightNormalLow, weightP1);
                const weightDifferenceOptimumMinus = diferenta(optimumWeightPerson, weightP1);
                console.log(optimumWeightPerson);
                console.log(weightDifferenceOptimumMinus);
                results[0].innerHTML = "Name: " + person1[0].value;
                results[1].innerHTML = "Height: " + person1[1].value + " cm";
                results[2].innerHTML = "Weight: " + person1[2].value + " kg";
                weightStatus.innerHTML = "Underweight";
                normalBodyWeight.innerHTML = "Your normal body weight should be between " + weightNormalHigh + " kg - " + weightNormalLow + " kg";
                optimumBodyWeight.innerHTML = "Optimum weight: " + optimumWeightPerson + "kg";
                weightPlusMinus.innerHTML = "For normal weight, gain between " + weightDifferenceMinusHigh + " kg - " + weightDifferenceMinusLow + " kg";
                optimumBodyWeightPlusMinus.innerHTML = "For optimum weight, gain " + weightDifferenceOptimumMinus + " kg";
            }
        }
    }
}