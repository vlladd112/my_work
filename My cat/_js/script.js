/* // POZE RULANTE ===============================================================================================================
var pozeRulante = document.getElementById("pozaPini");       // aici selectezi tinta pe care vrei s-o modifici/pe care sa lucrezi,  creand o variabila

var pozeArray = ["../fotos/balconcat.jpg", "../fotos/boxcat.jpg", "../fotos/familia.jpg", "../fotos/pungacat.jpg", "../fotos/sleepycat.jpg"];        // Aici am selectat materialele pe care vrem sa le folosim (avem 5 poze)

var pozaIndex = 0;       // Aici selectezi de la ce numar din array vrei sa inceapa (0 inseamna ca va incepe cu prima, 1 inseamna ca va incepe cu a doua etc... 

            // Acum creem functia cu care schimbam pozele 
function schimbaPoza() {
    "use strict";        // asta il cerea obligatoriu ca imi dadea eroare
    pozeRulante.setAttribute("src", pozeArray[pozaIndex]);      // aici ii atribui un "atribut" variabilei pozeRulante, nu stiu de ce "src", dar spui ca din pozeArray[vrei sa alegi indexul respectiv(pozaIndex)]
    
    pozaIndex++;        // pe urma, adaugi ++ ca sa aduni cu +1 (indexul 0 devine 1)la index, adica indexul va creste cu unu, deci treci la indexul urmator...
    
    if (pozaIndex >= pozeArray.length) {
        pozaIndex = 0;      // asta inseamna ca atunci cand ajunge la capat (la ultimul index), sa o ia de la capat cu pozaIndex (adica 0 in cazul de fata. Daca schimbam pe 0 cu 1 o va lua de la capat incepand cu a doua poza si o va omite pe prima)
    }
}
            //aici setam intervalul de timp la care sa se schimbe pozele, adica se executa functia schimbaPoza o data la fiecare 3000 de miimi de secunda (3 secunde), in cazul nostru.
setInterval(schimbaPoza, 3000);

//  END__POZE RULANTE============================================================================================================= */

/* //  MODAL ================================================================================================================
// Prima data creem variabila prin care selectam locul in care dorim sa aplicam modalul
var modal = document.getElementById("myModal");

// Acum selectam imaginea care dorim sa apara in modal, creand o variabila cu imaginea
var img = document.getElementById("pozaPini");

// Acum cream variabila pentru imaginea ce urmeaza sa apara in modal
var modalImg = document.getElementById("img01");

// Acum cream variabila pentru CAPTION text(adica textul ce apare scris sub poza) - sub poza va aparea scris ce e trecut in "alt"-ul de la imaginea din HTML
var captionText = document.getElemetById("caption");

// Cream functia prin care spunem ca MODAL-ul se va deschide la "on click" si ce se intampla cand se face click
img.onclick = function () {
    "use strict";
    modal.style.display = "block";
    modalImg.src = this.src;  // cred ca se refera ca aici trebuie sa apara imaginea sura sau se refera  la "img01"
    captionText.innerHTML = this.alt; // aici spune ca in acest CAPTION trebuie sa apara ce e trecut in "alt"
};

// Acum trebuie sa creez/aloc elementul <span> care inchide MODALUL, crand o variabila pentru el
var span = document.getElementsByClassName("close")[0]; // ii spunem sa ia primul element din clasa close, ca si cum close ar fi un array si trebie sa il ia pe primu(in cazul nostru)

// Acum trebuie creata functia care ne spune ce sa facem cu elementul span, iar noi o sa ii spunem, mai exact, ce sa faca atunci cand facem click
span.onclick = function () {
    "use strict";
    modal.style.display = "none"; // aici i-am spus ca daca face click, el o sa afiseze(dislay) "none"(adica nimic, deci il va inchide, adica va disparea).
};
*/

var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('pozaPini');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// =============== animation test ====================
//$("document").ready(function(){
//    $("h2").click(function(){
//    $("img").animate({height: 300}, 100)
////    .animate({left: "-850"}, 700)
//    })  
//});
    