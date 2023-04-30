//lisätään napin kuuntelijafunctio
document.querySelector("button").addEventListener("click", addNote);
//haetaan dokumentti elementit
let user = document.getElementById("name");
let body =document.querySelector("body");
let note = document.getElementById("viesti");
let checkbox = document.getElementById("important");


function addNote(){
//luodaan otsikko johon tulee nimi-kentästä nimi ja lisäksi aikaleima
let h3 = document.createElement("h3");
h3.textContent = user.value + " " + new Date().toLocaleString();
//itse note lisätään tekstinä p elementtiin textareasta
let p = document.createElement("p");
p.textContent = viesti.value;

//onko checkboxissa täppi vai ei

if(checkbox.checked){
    h3.classList.add("important");
    p.classList.add("important");
}
//vielä kaikki elementit bodyn sisälle

body.append(h3,p,document.createElement("hr"));

}