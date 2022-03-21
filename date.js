const dateNow = document.querySelector(' .divDate');
setInterval(function() {

    let date = new Date();



    let annee = date.getFullYear();

    let mois = date.getMonth() + 1;

    let jour = date.getDate();

    let heure = date.getHours();

    let minute = date.getMinutes();

    let seconde = date.getSeconds();
    let moisEnLettre;
    if (mois==1){moisEnLettre= "Janvier"}
    if (mois==2){moisEnLettre= "Février"}
    if (mois==3){moisEnLettre= "Mars"}
    if (mois==4){moisEnLettre= "Avril"}
    if (mois==5){moisEnLettre= "Mai"}
    if (mois==6){moisEnLettre= "Juin"}
    if (mois==7){moisEnLettre= "Juillet"}
    if (mois==8){moisEnLettre= "Aout"}
    if (mois==9){moisEnLettre= "Septembre"}
    if (mois==10){moisEnLettre= "Octobre"}
    if (mois==11){moisEnLettre= "Novembre"}
    if (mois==12){moisEnLettre= "Décembre"}
    //alert(dateNow);

    let now = "Aujourd'hui le " + jour + " " + moisEnLettre + " " + annee + " à " + heure + "h " + minute + "mn " + seconde + "s";

    dateNow.textContent = now;
    
}, 1000)