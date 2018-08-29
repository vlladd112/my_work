/*var a=2;
var b=1;
var c=2;
var d=1;
if (a==b && a==c && a==d && b==c && b==d && c==d) {
console.error("EGALITATE SUPREMA")
} else {
    if (a>b && c>d) {
        console.log("Grupa 1")
    } if (a<b && c<d) {
        console.log("Grupa 2")
    } if ( (a>b && c<d) || (a<b && c>d) ) {
        console.log("Mixt")
    } if ( (a==b && c==d) || (a==c && b==d) || (a==d && b==c) ) {
        console.log("Egalitate in drepturi")
    }
};*/ //exercitiul 1 - cu console log si abcd <>=

// =================================================================================================================================

/*var bula = 111;
var strula = 11;

var boss;

if (bula>strula) {
    boss = "bula";
}  else { if (bula<strula) {
    boss="strula";
    } if (bula == strula) {
        boss="piele"
    }
};

// var boss = ( bula > strula ) ? "bula" : "strula"; // shorthand notation*/
// exercitiu 2 - asemanator cu 1
//=================================================================================================================================
    
/*var ion=1;
while (ion<=6) {
    alert("Mer'e" + " " + ion);
    console.log(ion);
    ion++;
    if (ion==4) {
        break;
    };  
};
console.log("gata lupu");
*/ // exercitiul cu loop-ul + break
//=============================================================================================================================


/*function primitiva (ion) { while (ion<=206) {
    alert("Mer'e" + " " + ion);
    ion = ion + 5;
    //ion++;
    if (ion > 20) {
        break;
    };  
};
                         };
primitiva (5);
alert("gata lupu");*/
// functie simpla
//==================================================================================================================================

/*function rezonabila (x,y) {
    var adunare = ((x * y) -  x + y);
    alert(adunare);
}

rezonabila (5, 2);*/
// functie rezonabila - de calcul simplu
//================================================================================================================================
/*var panda = document.getElemetById("panda");
function ppanda () {
    alert(panda);
}
ppanda();*/
/*var date = new Date(1990,4,5);
var vlad = "Vlad s-a nascut la";
console.log(vlad, date.getDate());
console.log("Vlad s-a nascut in anul", date.getFullYear(), "luna a", date.getMonth() + "a", "ziua a", date.getDate() + "a.");
var Vlad = {name: "Vlad", height: 180, weight: 76};
var Alexandra = {name: "Alexandra", height: 169, weight: 54};
if (Vlad.height > Alexandra.height) {
console.log(Vlad.name, "e mai inalt:", Vlad.height + "cm");
}
if (Vlad.name > Alexandra.name) {
    console.log("aaa");
}
function diferenta(x, y) {
    var dif = x - y;
    return dif;
}
console.log(Vlad.name, "este cu", diferenta(Vlad.height, Alexandra.height) + "cm", "mai mare decat", Alexandra.name);
/*console.log(Vlad.name, "este cu", diferenta(Vlad.weight,Alexandra.weight) + "kg", "mai greu decat", Alexandra.name);*/
/*if (Vlad.weight === Alexandra.weight) {
    console.log(Vlad.name, "si", Alexandra.name, "au aceeasi greutate");
} if (Vlad.weight > Alexandra.weight) {
    console.log(Vlad.name, "este cu", diferenta(Vlad.weight, Alexandra.weight) + "kg mai greu decat", Alexandra.name);
} if (Vlad.weight < Alexandra.weight){
    console.log(Alexandra.name, "este cu", diferenta(Alexandra.weight, Vlad.weight) + "kg mai grea decat", Vlad.name);
}*/
var you = document.getElementsByClassName("you");
var contender = document.getElementsByClassName("contender");
var claculate = document.getElementById("calc");

function diferenta(x, y) {
    var dif = x - y;
    return dif;
}

function checkTypeL(you, contender) {
        var letters = /^[A-Za-z ]+$/;
        if (you.value.match(letters)) {
            you.style.border = ""
        } else {
            you.style.border = "1px solid red";
        } if (contender.value.match(letters)) {
            contender.style.border = ""
        } else {
            contender.style.border = "1px solid red";
        }
    }
function checkValues (Yna, Yhe, Ywe, Cna, Che, Cwe) {
    var letters = /^[A-Za-z ]+$/;
    if (you[0].value == "") {
        you[0].style.border = "1px solid red";
    }
    if (you[1].value == "") {
        you[1].style.border = "1px solid red";
    } else if (you[1].value != "") {
        you[1].style.border = "";
    } if (you[2].value == "") {
        you[2].style.border = "1px solid red";
    } else if (you[2].value != "") {
        you[2].style.border = "";
    }
    if (contender[0].value == "") {
        contender[0].style.border = "1px solid red";
    } if (contender[1].value == "") {
        contender[1].style.border = "1px solid red";
    } else if (contender[1].value != "") {
        contender[1].style.border = "";
    }
    if (contender[2].value == "") {
        contender[2].style.border = "1px solid red";
    } else if (contender[2].value != "") {
        contender[2].style.border = "";
    }
    if (((you[0].value && you[1].value && you[2].value && contender[0].value && contender[1].value && contender[2].value) !== "") && ((you[0].value.match(letters)) && (contender[0].value.match(letters))) ) {
        console.log("CHECK NUMERE OKKK!!!!: ", you[0].value, you[1].value, you[2].value, contender[0].value, contender[1].value, contender[2].value);
        you[0].style.border = "";
        you[1].style.border = "";
        you[2].style.border = "";
        contender[0].style.border = "";
        contender[1].style.border = "";
        contender[2].style.border = "";
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        function fimc(x, y) {
        var imece = Math.ceil((y / (x * x)) * 1000000);
        var imece = imece / 100;
        return imece;
    }
        function diferenta(x,y) {
        var dif = x - y;
        return dif;
    }
        /*function fimc(x, y) {
        var imece = x / (y * y);
        console.log(Math.ceil(imece)); // <<== calculeaza IMC direct cu zecimala
        return Math.ceil(imece); // <<== baga zecimala doar la rezultat, calculul fiind facut normal
    }*/
        results[0].innerHTML = "Names: " + you[0].value + " and " + contender[0].value;
        results[1].innerHTML = "Height: " + you[1].value + "cm";
        results[2].innerHTML = "Weight: " + you[2].value + "kg";
        if (you[1].value > contender[1].value) {
        results[1].innerHTML = "Height: " + you[0].value + " is " + diferenta(you[1].value, contender[1].value) + "cm taller than " + contender[0].value;
    } if (you[1].value < contender[1].value) {
        results[1].innerHTML = "Height: " + contender[0].value + " is " + diferenta(contender[1].value, you[1].value) + "cm taller than " + you[0].value;
    } if (you[1].value === contender[1].value) {
        results[1].innerHTML = "Height: " + you[0].value + " and " + contender[0].value + " are the same height";
    }  if (you[2].value > contender[2].value) {
        results[2].innerHTML = "Weight: " + you[0].value + " is " + diferenta(you[2].value, contender[2].value) + "kg heavier  than " + contender[0].value;
    } if (you[2].value < contender[2].value) {
        results[2].innerHTML = "Weight: " + contender[0].value + " is " + diferenta(contender[2].value, you[2].value) + "kg heavier than " + you[0].value;
    } if (you[2].value === contender[2].value) {
        results[2].innerHTML = "Weight: " + you[0].value + " and " + contender[0].value + " are the same weight";
    }
        const imcResultP1 = fimc(you[1].value, you[2].value);
        const imcResultP2 = fimc(contender[1].value, contender[2].value);
        console.log(imcResultP1, imcResultP2);
    imcName[0].innerHTML = you[0].value + ":&nbsp;";
    imc[0].innerHTML = imcResultP1;
    imcName[1].innerHTML = contender[0].value + ":&nbsp;";
    imc[1].innerHTML = imcResultP2;
        
        
        if(imcResultP1 < 18.5) {
            imc[0].style.color = "blue";
        } else if(imcResultP1 < 25) {
            imc[0].style.color = "green";
        } else if(imcResultP1 < 30) {
            imc[0].style.color = "yellow";
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

window.onload = function onload() {
    you = document.getElementsByClassName("you");
    contender = document.getElementsByClassName("contender");
    results = document.getElementsByClassName("rezultat");
    imc = document.getElementsByClassName("imc");
    imcName = document.getElementsByClassName('imcName');
    
    
    
}
calc.onclick = function () {
    checkTypeL (you[0], contender[0]);
    checkValues (you[0], you[1], you[2], contender[0], contender[1], contender[2])
    
    /*console.log(you[0].placeholder + ":", you[0].value);
    console.log("Height:", you[1].value + "cm");
    console.log("Weight:", you[2].value + "kg");
    console.log(contender[0].placeholder + ":", contender[0].value);
    console.log("Height:", contender[1].value + "cm");
    console.log("Weight:", contender[2].value + "kg");*/
    
    
    /*if (you[0].value === "" || you[1].value === "" || you[2].value === "") {
    alert("Please fill in all \"You\" fields!");
}*/ //if (contender[0].value != "a") {
    //alert("XXXX");
}


//function allLetter(inputtxt) { 
//    var letters = /^[A-Za-z]+$/;
//    if (inputtxt.value.match(letters)) {
//            alert('Your name have accepted : you can try another');
//            return true;
//        } else {
//            alert('Please input alphabet characters only');
//            return false;
//        }
//}