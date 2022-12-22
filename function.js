// funsion experiencia
function openCity(evt, cityName) {
    var i, info, empresa;
    info = document.getElementsByClassName("info");
    for (i = 0; i < info.length; i++) {
        info[i].style.display = "none";
    }

    empresa = document.getElementsByClassName("empresa");
    for (i = 0; i < empresa.length; i++) {
        empresa[i].className = empresa[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "grid";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// funsion cursos
function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "grid";
    elmnt.style.backgroundColor = color;
}
document.getElementById("defaultabrir").click();


// funsion habilidades
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-red", "");
    }
    x[slideIndex - 1].style.display = "grid";
    dots[slideIndex - 1].className += " w3-red";
}

