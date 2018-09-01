var person1 = document.getElementsByClassName("person1");
var person2 = document.getElementsByClassName("person2");
var claculate = document.getElementById("calc");
const normalBodyWeight = document.getElementById('normalBodyWeight');
const weightPlusMinus = document.getElementById('weightPlusMinus');
const rezultatContainer = document.getElementsByClassName('rezultatContainer');

function diferenta(x, y) {
    var dif = x - y;
    return dif;
}
function fimc(h, kg) {
    var imece = Math.ceil((kg / (h * h)) * 1000000);
    var imece = imece / 100;
    return imece;
}
function diferenta(x,y) {
    var dif = x - y;
    dif = Math.round(dif * 10) / 10;
    return dif;
}
function imcNormal(h, kg) {
    var normalImc = Math.ceil((kg / (h * h)) * 1000000);
    normalImc = normalImc / 100;
    return normalImc;
}
function weightOfPerson(imc, h) {
    var weight = ((imc * (h * h)) / 10000);
    weight = Math.round(weight * 10) / 10;
    return weight;
}
function checkTypeL(person1, person2) {
    var letters = /^[A-Za-z ]+$/;
    if (person1.value.match(letters)) {
        person1.style.border = ""
    } else {
        person1.style.border = "1px solid red";
    } if (person2.value.match(letters)) {
        person2.style.border = ""
    } else {
        person2.style.border = "1px solid red";
    }
}

function checkValues (Yna, Yhe, Ywe, Cna, Che, Cwe) {
    var letters = /^[A-Za-z ]+$/;
    if (person1[0].value == "") {
        person1[0].style.border = "1px solid red";
    }
    if (person1[1].value == "") {
        person1[1].style.border = "1px solid red";
    } else if (person1[1].value != "") {
        person1[1].style.border = "";
    } if (person1[2].value == "") {
        person1[2].style.border = "1px solid red";
    } else if (person1[2].value != "") {
        person1[2].style.border = "";
    }
    if (person2[0].value == "") {
        person2[0].style.border = "1px solid red";
    } if (person2[1].value == "") {
        person2[1].style.border = "1px solid red";
    } else if (person2[1].value != "") {
        person2[1].style.border = "";
    }
    if (person2[2].value == "") {
        person2[2].style.border = "1px solid red";
    } else if (person2[2].value != "") {
        person2[2].style.border = "";
    }
    if (((person1[0].value && person1[1].value && person1[2].value && person2[0].value && person2[1].value && person2[2].value) !== "") && ((person1[0].value.match(letters)) && (person2[0].value.match(letters))) ) {
        console.log("CHECK NUMERE OKKK!!!!: ", person1[0].value, person1[1].value, person1[2].value, person2[0].value, person2[1].value, person2[2].value);
        person1[0].style.border = "";
        person1[1].style.border = "";
        person1[2].style.border = "";
        person2[0].style.border = "";
        person2[1].style.border = "";
        person2[2].style.border = "";
        
        
        results[0].innerHTML = "Names: " + person1[0].value + " and " + person2[0].value;
        results[1].innerHTML = "Height: " + person1[1].value + "cm";
        results[2].innerHTML = "Weight: " + person1[2].value + "kg";
        if (person1[1].value > person2[1].value) {
            results[1].innerHTML = "Height: " + person1[0].value + " is " + diferenta(person1[1].value, person2[1].value) + "cm taller than " + person2[0].value;
        } if (person1[1].value < person2[1].value) {
            results[1].innerHTML = "Height: " + person2[0].value + " is " + diferenta(person2[1].value, person1[1].value) + "cm taller than " + person1[0].value;
        } if (person1[1].value === person2[1].value) {
            results[1].innerHTML = "Height: " + person1[0].value + " and " + person2[0].value + " are the same height";
        }  if (person1[2].value > person2[2].value) {
            results[2].innerHTML = "Weight: " + person1[0].value + " is " + diferenta(person1[2].value, person2[2].value) + "kg heavier  than " + person2[0].value;
        } if (person1[2].value < person2[2].value) {
            results[2].innerHTML = "Weight: " + person2[0].value + " is " + diferenta(person2[2].value, person1[2].value) + "kg heavier than " + person1[0].value;
        } if (person1[2].value === person2[2].value) {
            results[2].innerHTML = "Weight: " + person1[0].value + " and " + person2[0].value + " are the same weight";
        }
        const imcResultP1 = fimc(person1[1].value, person1[2].value);
        const imcResultP2 = fimc(person2[1].value, person2[2].value);
        console.log(imcResultP1, imcResultP2);
        imcName[0].innerHTML = person1[0].value + ":&nbsp;";
        imc[0].innerHTML = imcResultP1;
        imcName[1].innerHTML = person2[0].value + ":&nbsp;";
        imc[1].innerHTML = imcResultP2;

        if(imcResultP1 < 18.5) {
            imc[0].style.color = "blue";
        } else if(imcResultP1 < 25) {
            imc[0].style.color = "green";
        } else if(imcResultP1 < 30) {
            imc[0].style.color = "gold";
        } else if(imcResultP1 < 35) {
            imc[0].style.color = "orange";
        } else if(imcResultP1 < 40) {
            imc[0].style.color = "red";
        } else if(imcResultP1 > 40) {
            imc[0].style.color = "darkred";
        };
        if(imcResultP2 < 18.5) {
            console.log('SLAB');
            imc[1].style.color = "blue";
        } else if(imcResultP2 < 25) {
            console.log('NORMAL');
            imc[1].style.color = "green";
        } else if(imcResultP2 < 30) {
            console.log('GRAS');
            imc[1].style.color = "yellow";
        } else if(imcResultP2 < 35) {
            console.log('GRASS');
            imc[1].style.color = "orange";
        } else if(imcResultP2 < 40) {
            console.log('GRASSS');
            imc[1].style.color = "red";
        } else if(imcResultP2 > 40) {
            imc[1].style.color = "darkred";
        }
    }
}

const xxx = new Promise(function(){
    person2Checkbox.addEventListener('click', ()=>{
        if(person2Checkbox.checked == true) {
//            calc.onclick = function () {
//                if(person2Checkbox.checked == true) {
//                    alert('XCX');
//                    checkTypeL (person1[0], person2[0]);
//                    checkValues (person1[0], person1[1], person1[2], person2[0], person2[1], person2[2]);
//                }
//            }
            person2Parag.style.color = "black";
            person2[0].disabled = false;
            person2[1].disabled = false;
            person2[2].disabled = false;
        } else if(person2Checkbox.checked == false) {
//            calc.onclick = function () {
//                if(person2Checkbox.checked == false) {
//                    alert('OOO');
//                    
//                }
//            }
            person2[0].disabled = true;
            person2[1].disabled = true;
            person2[2].disabled = true;
            person2Parag.style.color = "gray";
            imcName[1].style.display = "none";
            imc[1].style.display = "none";
        }
    });
});

//function checkTypeL(person1, person2) {
//    var letters = /^[A-Za-z ]+$/;
//    if (person1.value.match(letters)) {
//        person1.style.border = ""
//    } else {
//        person1.style.border = "1px solid red";
//    } if (person2.value.match(letters)) {
//        person2.style.border = ""
//    } else {
//        person2.style.border = "1px solid red";
//    }
//}


window.onload = function onload() {
    person1 = document.getElementsByClassName("person1");
    person2 = document.getElementsByClassName("person2");
    results = document.getElementsByClassName("rezultat");
    imc = document.getElementsByClassName("imc");
    imcName = document.getElementsByClassName('imcName');
    person2Checkbox = document.getElementById('person2Checkbox');
    person2Parag = document.getElementById('person2Parag');
    
    person2[0].disabled = true;
    person2[1].disabled = true;
    person2[2].disabled = true;
    person2Parag.style.color = "gray";
}
calc.onclick = function () {
    if(person2Checkbox.checked == true) {
        rezultatContainer[1].style.display = "none";
        imcName[1].style.display = "flex";
        imc[1].style.display = "flex";
        checkTypeL (person1[0], person2[0]);
        checkValues (person1[0], person1[1], person1[2], person2[0], person2[1], person2[2]);
    } else if(person2Checkbox.checked == false) {
        results[0].innerHTML = "Name: " + person1[0].value;
        results[1].innerHTML = "Height: " + person1[1].value + "cm";
        results[2].innerHTML = "Weight: " + person1[2].value + "kg";
        const imcResultP1 = fimc(person1[1].value, person1[2].value);
        const imcResultP2 = fimc(person2[1].value, person2[2].value);
        console.log(imcResultP1, imcResultP2);
        imcName[0].innerHTML = person1[0].value + ":&nbsp;";
        imc[0].innerHTML = imcResultP1;
        if(imcResultP1 < 18.5) {
            imc[0].style.color = "blue";
        } else if(imcResultP1 < 25) {
            imc[0].style.color = "green";
        } else if(imcResultP1 < 30) {
            imc[0].style.color = "gold";
        } else if(imcResultP1 < 35) {
            imc[0].style.color = "orange";
        } else if(imcResultP1 < 40) {
            imc[0].style.color = "red";
        } else if(imcResultP1 > 40) {
            imc[0].style.color = "darkred";
        };
        imcName[1].style.display = "none";
        imc[1].style.display = "none";
        const imcP1 = imcNormal(person1[1].value, person1[2].value);
        console.log("IMC P1:", imcP1);
        if(imcP1 > 24.99) {
            const weightP1 = weightOfPerson(imcP1, person1[1].value);
            console.log("Weight P1:", weightP1);
            const weightNormalHigh = weightOfPerson(24.99, person1[1].value);
//            console.log("weight for normal IMC:", weightNormalHigh);
            const weightNormalLow = weightOfPerson(18.5, person1[1].value);
            console.log("Your normal body weight should be between", weightNormalHigh, "kg -", weightNormalLow, "kg");
            const weightDifferencePlusHigh = diferenta(weightP1, weightNormalHigh);
//            console.log("loose between:", weightDifferencePlusHigh, "-", weightDifferencePlusLow);
            const weightDifferencePlusLow = diferenta(weightP1, weightNormalLow);
            console.log("You have to loose between:", weightDifferencePlusHigh, "kg -", weightDifferencePlusLow, "kg");
            results[0].innerHTML = "Name: " + person1[0].value;
            results[1].innerHTML = "Height: " + person1[1].value + " cm";
            results[2].innerHTML = "Weight: " + person1[2].value + " kg";
//            const plusMinusWeight = document.createElement('p');
//            plusMinusWeight.innerHTML = "You have to loose between:" + " " + weightDifferencePlusHigh + " kg - " + weightDifferencePlusLow + " kg";
//            const imcNameContainer = document.getElementsByClassName('imcNameContainer');
//            imcNameContainer[0].appendChild(plusMinusWeight);
            
            normalBodyWeight.innerHTML = "Your normal body weight should be between " + weightNormalHigh + " kg - " + weightNormalLow + " kg";
            weightPlusMinus.innerHTML = "You have to loose between:" + " " + weightDifferencePlusHigh + " kg - " + weightDifferencePlusLow + " kg";
        }
        if(18.5 <= imcP1 && imcP1 <= 25) {
            console.log('NORMAL WEIGHT');
        }
        if(imcP1 < 18.5) {
            const weightP1 = weightOfPerson(imcP1, person1[1].value);
            console.log("Weight P1:", weightP1);
            const weightNormalHigh = weightOfPerson(18.51, person1[1].value)
            console.log("weight for normal IMC - high:", weightNormalHigh);
            const weightDifferenceMinusHigh = diferenta(weightNormalHigh, weightP1);
            const weightNormalLow = weightOfPerson(24.99, person1[1].value)
            console.log("Your normal body weight should be between", weightNormalHigh, "kg -", weightNormalLow, "kg");
            const weightDifferenceMinusLow = diferenta(weightNormalLow, weightP1);
            
            console.log("You have to gain between :", weightDifferenceMinusHigh, " kg -", weightDifferenceMinusLow, 'kg');
        }
//        const weightP1 = weightOfPerson(imcP1, person1[1].value);
//        console.log("Weight P1:", weightP1);
//        const weightNormal = weightOfPerson(24.99, person1[1].value)
//        console.log("weight for normal IMC:", weightNormal);
//        const weightDifferencePlus = diferenta(weightP1, weightNormal);
//        console.log("Diferenta KG:", weightDifferencePlus);
        
    }
}