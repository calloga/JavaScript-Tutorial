const ampoule = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = ampoule.image;
const nomElement = document.createElement("h2");
nomElement.innerText = ampoule.nom;
const prixElement = document.createElement("p");
prixElement.innerText = ampoule.prix;
const categorieElement = document.createElement("p");
categorieElement.innerText = ampoule.categorie;

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
