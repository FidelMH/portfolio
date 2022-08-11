// Modification de la section contact de l'index.html pour le concorder au thème
let mainBlue = "#08437C"
const section = document.getElementById("contact");
section.style.backgroundColor = mainBlue;
let labels = section.getElementsByTagName("label");
for(let i=0; i< labels.length;i++){
    labels[i].style.color = "#ffffff";
    // console.log(labels[i]);
}
section.getElementsByTagName("h1")[0].style.color = "#ffffff";
section.getElementsByTagName("p")[0].style.color = "#ffffff";
section.getElementsByTagName("button")[0].style.backgroundColor = "#ffffff";