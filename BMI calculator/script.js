let person1 = document.getElementsByClassName("person1");
const results = document.getElementsByClassName("rezultat");
const bmi = document.getElementsByClassName("bmi");
const person2Checkbox = document.getElementById('person2Checkbox');
const person2Parag = document.getElementById('person2Parag');
const claculate = document.getElementById("calc");
const weightStatus = document.getElementById('weightStatus');
const normalBodyWeight = document.getElementById('normalBodyWeight');
const weightPlusMinus = document.getElementById('weightPlusMinus');
const optimumBodyWeight = document.getElementById('optimumWeight');
const optimumBodyWeightPlusMinus = document.getElementById('optimumWeightPlusMinus');
const rezultatContainer = document.getElementsByClassName('rezultatContainer');
const rezultate = document.getElementById('rezultate');
const html = document.getElementById('html');

//function diferenta(x, y) {
//    let dif = x - y;
//    return dif;
//};
function fbmi(h, kg) {
    let imece = Math.ceil((kg / (h * h)) * 1000000);
    imece = imece / 100;
    return imece;
};
function diferenta(x,y) {
    let dif = x - y;
    dif = Math.round(dif * 10) / 10;
    return dif;
};
function bmiNormal(h, kg) {
    let normalbmi = Math.ceil((kg / (h * h)) * 1000000);
    normalbmi = normalbmi / 100;
    return normalbmi;
};
function weightOfPerson(bmi, h) {
    let weight = ((bmi * (h * h)) /10000 );
    weight = Math.round(weight * 10) / 10;
    return weight;
};
function optimumWeight(normalWeightHigh, normalWeightLow) {
    let optimumWeightForPerson = (normalWeightHigh + normalWeightLow) / 2;
    optimumWeightForPerson = Math.round(optimumWeightForPerson * 10) / 10;
    return optimumWeightForPerson;
};
function checkTypeL(person1) {
    const letters = /^[A-Za-z-' ]+$/;
    if (person1.value.match(letters)) {
        person1.style.border = ""
        return true;
    } else {
        person1.style.border = "2px solid red";
    }
};
const checkValues = function checkValues (name, height, weight) {
    const letters = /^[A-Za-z]+$/;
    if (name.value == "") {
        name.style.border = "2px solid red";
    } else if (person1[0].value != "") {
        name.style.border = "";
    }
    if (height.value == "") {
        height.style.border = "2px solid red";
    } else if (height.value != "") {
        height.style.border = "";
    }
    if (weight.value == "") {
        weight.style.border = "2px solid red";
    } else if (weight.value != "") {
        weight.style.border = "";
    }
    if (((name.value) && (height.value) && (weight.value)) != "") {
        return true;
    }
};

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
            results[1].innerHTML = "Height: " + (person1[1].value / 100) + " m";
            results[2].innerHTML = "Weight: " + person1[2].value + " kg";
            const bmiResultP1 = fbmi(person1[1].value, person1[2].value);
            console.log(bmiResultP1);
            bmi[0].innerHTML = bmiResultP1;
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
                
                normalBodyWeight.innerHTML = "Normal body weight: " + "<span class='normalBodyWeightSpan'>" + weightNormalLow + "</span>" + " kg - " + "<span class='normalBodyWeightSpan'>" + weightNormalHigh + "</span>" + " kg";
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
                    weightStatus.innerHTML = "Obese (3rd degree)";
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
                normalBodyWeight.innerHTML = "Normal body weight: " + "<span class='normalBodyWeightSpan'>" + weightNormalLow + "</span>" + " kg - " + "<span class='normalBodyWeightSpan'>" + weightNormalHigh + "</span>" + " kg";
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
                normalBodyWeight.innerHTML = "Normal body weight: " + "<span class='normalBodyWeightSpan'>" + weightNormalHigh + "</span>" + " kg - " + "<span class='normalBodyWeightSpan'>" + weightNormalLow + "</span>" + " kg";
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