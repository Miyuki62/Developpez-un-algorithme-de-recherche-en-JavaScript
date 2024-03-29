// importer les recipes
import { recipes } from "./recipes.js";
//-----------------------------------------------------------------------------
//global var
//-----------------------------------------------------------------------------
var arrayIngredients = [];
var arrayAppareil = [];
var arrayUstensiles = [];
var sortRecette = [];
var recettefilterArray = [];

var searchFiltereIngredientsdArray = [];
var searchFiltereAppareildArray = [];
var searchFiltereUstensilesdArray = [];

var tagIngredients = [];
var tagAppareil = [];
var tagUstensiles = [];
//-----------------------------------------------------------------------------
//fonction mise en majuscule de la premiere lettre d'un string de texte
//-----------------------------------------------------------------------------
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
//filtre les array des doublon
function filterArray(data) {
	var datafilter = [];
	datafilter = data.filter((ele, pos) => data.indexOf(ele) == pos);
	return datafilter;
}
//-----------------------------------------------------------------------------
//gestion des Filtre
//-----------------------------------------------------------------------------
const ingredientsList = document.querySelector(".liste-ingredients");
const appareilList = document.querySelector(".liste-appareil");
const ustensilesList = document.querySelector(".liste-ustensiles");
//ingredients
const flecheingredients = document.querySelector(".fleche-ingredients");
const Listeingredients = document.querySelector(".liste-ingredients");
const rechercheIngredients = document.querySelector(".recherche-ingredients");
const ingredientsInput = document.querySelector(".ingredients-input");
//appareil
const flecheappareil = document.querySelector(".fleche-appareil");
const Listeappareil = document.querySelector(".liste-appareil");
const rechercheappareil = document.querySelector(".recherche-appareil");
const appareilsInput = document.querySelector(".appareil-input");
//ustensiles
const flecheustensiles = document.querySelector(".fleche-ustensiles");
const Listeustensiles = document.querySelector(".liste-ustensiles");
const rechercheustensiles = document.querySelector(".recherche-ustensiles");
const ustensilesInput = document.querySelector(".ustensiles-input");
//tag
const tagContainer = document.querySelector(".tag-container");

//-----------------------------------------------------------------------------
//gestion ouverture et fermeture de la liste Ingredients
//-----------------------------------------------------------------------------
flecheingredients.addEventListener("click", function () {
	if (flecheingredients.classList.contains("fa-angle-up")) {
		fermetureListeIngredients();
	} else {
		fermetureListeAppareil();
		fermetureListeUstensiles();
		ouvertureListeIngredients();
	}
});
const ouvertureListeIngredients = () => {
	flecheingredients.classList.remove("fa-angle-down");
	flecheingredients.classList.add("fa-angle-up");
	Listeingredients.style.display = "block";
	rechercheIngredients.style.width = "100%";
	if (screen.width >= 1000) {
		rechercheIngredients.style.width = "50%";
	}
};
const fermetureListeIngredients = () => {
	flecheingredients.classList.remove("fa-angle-up");
	flecheingredients.classList.add("fa-angle-down");
	Listeingredients.style.display = "none";
	rechercheIngredients.style.width = "100%";
	if (screen.width >= 1000) {
		rechercheIngredients.style.width = "200px";
	}
};
//-----------------------------------------------------------------------------
//gestion ouverture et fermeture de la liste Appareil
//-----------------------------------------------------------------------------
flecheappareil.addEventListener("click", function () {
	if (flecheappareil.classList.contains("fa-angle-up")) {
		fermetureListeAppareil();
	} else {
		fermetureListeIngredients();
		fermetureListeUstensiles();
		ouvertureListeAppareil();
	}
});
const ouvertureListeAppareil = () => {
	flecheappareil.classList.remove("fa-angle-down");
	flecheappareil.classList.add("fa-angle-up");
	Listeappareil.style.display = "block";
	rechercheappareil.style.width = "100%";
	if (screen.width >= 1000) {
		rechercheappareil.style.width = "50%";
	}
};
const fermetureListeAppareil = () => {
	flecheappareil.classList.remove("fa-angle-up");
	flecheappareil.classList.add("fa-angle-down");
	Listeappareil.style.display = "none";
	rechercheappareil.style.width = "100%";
	if (screen.width >= 1000) {
		rechercheappareil.style.width = "200px";
	}
};

//-----------------------------------------------------------------------------
//gestion ouverture et fermeture de la liste ustensiles
//-----------------------------------------------------------------------------
flecheustensiles.addEventListener("click", function () {
	if (flecheustensiles.classList.contains("fa-angle-up")) {
		fermetureListeUstensiles();
	} else {
		fermetureListeAppareil();
		fermetureListeIngredients();
		ouvertureListeUstensiles();
	}
});
const ouvertureListeUstensiles = () => {
	flecheustensiles.classList.remove("fa-angle-down");
	flecheustensiles.classList.add("fa-angle-up");
	Listeustensiles.style.display = "block";
	rechercheustensiles.style.width = "100%";
	if (screen.width >= 1000) {
		rechercheustensiles.style.width = "50%";
	}
};
const fermetureListeUstensiles = () => {
	flecheustensiles.classList.remove("fa-angle-up");
	flecheustensiles.classList.add("fa-angle-down");
	Listeustensiles.style.display = "none";
	rechercheustensiles.style.width = "100%";
	if (screen.width >= 1000) {
		rechercheustensiles.style.width = "200px";
	}
};

//-----------------------------------------------------------------------------
//gestion des tag
//-----------------------------------------------------------------------------
//permet la creation des tag ingredient
const creationTagIngredients = (event) => {
	let data = event.target.textContent;
	tagContainer.innerHTML += `
    <div class="tag-select tag-select-ingredients tag-select-choix" data-tag="ingredients">${data}<i class="fa fa-times-circle close-tag"" alt="close button"></i></div>
  `;
	const tagChoisis = document.querySelectorAll(".tag-select-choix");
	const tagClose = document.querySelectorAll(".close-tag");
	const parent = document.getElementsByName(data);
	const count = tagIngredients.push(data.toLocaleLowerCase());
	try {
		parent[1].style.display = "none";
	} catch (error) {
		parent[0].style.display = "none";
	}
	SuppressionTag(tagClose, tagChoisis);
};
//permet la creation des tag appareil
const creationTagAppareil = (event) => {
	let data = event.target.textContent;
	tagContainer.innerHTML += `
    <div class="tag-select tag-select-appareil tag-select-choix" data-tag="appareil">${data}<i class="fa fa-times-circle close-tag" alt="close button"></i></div>
  `;
	const tagChoisis = document.querySelectorAll(".tag-select-choix");
	const tagClose = document.querySelectorAll(".close-tag");
	const parent = document.getElementsByName(data);
	const count = tagAppareil.push(data.toLocaleLowerCase());
	if (data === "Casserole" || data === "Saladier") {
		try {
			parent[0].style.display = "none";
		} catch (error) {
			parent[1].style.display = "none";
		}
	} else {
		try {
			parent[0].style.display = "none";
		} catch (error) {
			parent[1].style.display = "none";
		}
	}
	SuppressionTag(tagClose, tagChoisis);
};
//permet la creation des tag ustensiles
const creationTagUstensiles = (event) => {
	let data = event.target.textContent;
	tagContainer.innerHTML += `
    <div class="tag-select tag-select-ustensiles tag-select-choix" data-tag="ustensiles">${data}<i class="fa fa-times-circle close-tag" alt="close button"></i></div>
  `;
	const tagChoisis = document.querySelectorAll(".tag-select-choix");
	const tagClose = document.querySelectorAll(".close-tag");
	const parent = document.getElementsByName(data);
	const count = tagUstensiles.push(data.toLocaleLowerCase());
	if (data === "Casserole" || data === "Saladier") {
		try {
			parent[1].style.display = "none";
		} catch (error) {
			parent[0].style.display = "none";
		}
	} else {
		try {
			parent[0].style.display = "none";
		} catch (error) {
			parent[1].style.display = "none";
		}
	}
	SuppressionTag(tagClose, tagChoisis);
};

//Suppression des Tag
const SuppressionTag = (close, tag) => {
	var arrayElementSelectString = [];
	close.forEach((elt, index) => {
		elt.addEventListener("click", () => {
			const indexElement = arrayElementSelectString.indexOf(
				tag[index].textContent
			);
			if (tag[index].dataset.tag.includes("ingredients")) {
				tag[index].remove();
				let tagcreator = document.getElementsByName(tag[index].textContent);
				try {
					tagcreator[0].style.display = "block";
				} catch (error) {}
				const positionTagInArray = tagIngredients.indexOf(
					tag[index].textContent.toLocaleLowerCase()
				);
				if (positionTagInArray > -1) {
					tagIngredients.splice(positionTagInArray, 1);
				}
				getResults();
			}
			if (tag[index].dataset.tag.includes("appareil")) {
				tag[index].remove();
				let tagcreator = document.getElementsByName(tag[index].textContent);
				if (
					tag[index].textContent === "Casserole" ||
					tag[index].textContent === "Saladier"
				) {
					try {
						tagcreator[0].style.display = "block";
					} catch (error) {}
				} else {
					try {
						tagcreator[0].style.display = "block";
					} catch (error) {}
				}
				const positionTagInArray = tagAppareil.indexOf(
					tag[index].textContent.toLocaleLowerCase()
				);
				if (positionTagInArray > -1) {
					tagAppareil.splice(positionTagInArray, 1);
				}
				getResults();
			}
			if (tag[index].dataset.tag.includes("ustensiles")) {
				tag[index].remove();
				let tagcreator = document.getElementsByName(tag[index].textContent);
				if (
					tag[index].textContent === "Casserole" ||
					tag[index].textContent === "Saladier"
				) {
					try {
						tagcreator[1].style.display = "block";
					} catch (error) {}
				} else {
					try {
						tagcreator[0].style.display = "block";
					} catch (error) {}
				}
				const positionTagInArray = tagUstensiles.indexOf(
					tag[index].textContent.toLocaleLowerCase()
				);
				if (positionTagInArray > -1) {
					tagUstensiles.splice(positionTagInArray, 1);
				}
				getResults();
			}
		});
	});
};
//-----------------------------------------------------------------------------
//filtrage de l'array pour les ingredient
//-----------------------------------------------------------------------------
recipes.forEach((recipes) => {
	var arrayIngredientsTemp = [];
	for (var i = 0; i < recipes.ingredients.length; i++) {
		const count = arrayIngredientsTemp.push(recipes.ingredients[i].ingredient);
	}
	arrayIngredientsTemp.forEach((element) => {
		arrayIngredients.push(element.toLowerCase());
	});
});
//trie par l'ordre alphabétique puis on enlève les doublon
const SortIngredients = arrayIngredients.sort();
const filtereIngredientsdArray = SortIngredients.filter(
	(ele, pos) => arrayIngredients.indexOf(ele) == pos
);

//generation de la liste d'ingredient avec une lettre majuscule au debut
function generateListeIngredients(data) {
	let filteringredientsListItem = document.createElement("li");
	//
	filteringredientsListItem.textContent = capitalizeFirstLetter(data);
	//
	filteringredientsListItem.setAttribute(
		"class",
		"liste-element text-truncate"
	);
	filteringredientsListItem.setAttribute("name", capitalizeFirstLetter(data));
	filteringredientsListItem.setAttribute("data-categorie", "ingredients");
	//
	filteringredientsListItem.addEventListener("click", creationTagIngredients);
	filteringredientsListItem.addEventListener("click", getResults);
	//
	return filteringredientsListItem;
}
//generation des ingredient en fonction de la recherche
function generateSearchListIngredients(recetteIngredientsdArray) {
	var searchArrayIngredientsTemp = [];
	var searchArrayIngredients = [];
	recetteIngredientsdArray.forEach((recetteIngredientsdArray) => {
		for (var i = 0; i < recetteIngredientsdArray.ingredients.length; i++) {
			const count = searchArrayIngredientsTemp.push(
				recetteIngredientsdArray.ingredients[i].ingredient
			);
		}
		searchArrayIngredientsTemp.forEach((element) => {
			searchArrayIngredients.push(element.toLowerCase());
		});
	});

	//trie par l'ordre alphabétique puis on enlève les doublon
	const SortIngredients = searchArrayIngredients.sort();
	searchFiltereIngredientsdArray = SortIngredients.filter(
		(ele, pos) => searchArrayIngredients.indexOf(ele) == pos
	);
	ingredientsList.innerHTML = "";
	for (let a = 0; a < tagIngredients.length; a++) {
		for (let i = 0; i < searchFiltereIngredientsdArray.length; i++) {
			if (tagIngredients[a] == searchFiltereIngredientsdArray[i]) {
				const positionTagInArray = searchFiltereIngredientsdArray.indexOf(
					tagIngredients[a]
				);
				if (positionTagInArray > -1) {
					searchFiltereIngredientsdArray.splice(positionTagInArray, 1);
				}
			}
		}
	}
	// si il n'y a pas de autre ingredient a part des doublon ne les affiche plus
	if (
		searchFiltereIngredientsdArray.length == 0 &&
		tagIngredients.length >= 1
	) {
		ingredientsList.innerHTML = "aucun résultat";
	}
	// si il y a autre chose que les doublon les affiche
	else {
		searchFiltereIngredientsdArray.forEach((searchFiltereIngredientsdArray) => {
			const search = generateListeIngredients(searchFiltereIngredientsdArray);
			//
			ingredientsList.appendChild(search);
		});
	}
}
//-----------------------------------------------------------------------------
//filtrage de l'array pour les Appareil
//-----------------------------------------------------------------------------
recipes.forEach((recipes) => {
	var arrayAppareilTemp = [];
	const count = arrayAppareilTemp.push(recipes.appliance);

	arrayAppareilTemp.forEach((element) => {
		arrayAppareil.push(element.toLowerCase());
	});
});
//trie par l'ordre alphabétique puis on enlève les doublon
const SortAppareil = arrayAppareil.sort();
const filtereAppareildArray = SortAppareil.filter(
	(ele, pos) => arrayAppareil.indexOf(ele) == pos
);
//generation de la liste d'Appareil avec une lettre majuscule au debut
function generateListAppareil(data) {
	let filterAppareilListItem = document.createElement("li");
	//
	filterAppareilListItem.textContent = capitalizeFirstLetter(data);
	//
	filterAppareilListItem.setAttribute("class", "liste-element text-truncate");
	filterAppareilListItem.setAttribute("name", capitalizeFirstLetter(data));
	filterAppareilListItem.setAttribute("data-categorie", "appareil");
	//
	filterAppareilListItem.addEventListener("click", creationTagAppareil);
	filterAppareilListItem.addEventListener("click", getResults);
	//
	return filterAppareilListItem;
}
//generation des appareil en fonction de la recherche
function generateSearchListAppareil(recetteAppareildArray) {
	const search = selectElement(".recherche-principal").value;
	var searchArrayAppareilTemp = [];
	var searchArrayAppareil = [];
	recetteAppareildArray.forEach((recetteAppareildArray) => {
		const count = searchArrayAppareilTemp.push(recetteAppareildArray.appliance);
		searchArrayAppareilTemp.forEach((element) => {
			searchArrayAppareil.push(element.toLowerCase());
		});
	});

	//trie par l'ordre alphabétique puis on enlève les doublon
	const SortAppareil = searchArrayAppareil.sort();
	searchFiltereAppareildArray = SortAppareil.filter(
		(ele, pos) => searchArrayAppareil.indexOf(ele) == pos
	);
	appareilList.innerHTML = "";
	for (let i = 0; i < searchFiltereAppareildArray.length; i++) {
		for (let a = 0; a < tagAppareil.length; a++) {
			if (tagAppareil[a] == searchFiltereAppareildArray[i]) {
				const positionTagInArray = searchFiltereAppareildArray.indexOf(
					tagAppareil[a]
				);
				if (positionTagInArray > -1) {
					searchFiltereAppareildArray.splice(positionTagInArray, 1);
				}
			}
		}
	}
	// si il n'y a pas de autre Appareil a part des doublon ne les affiche plus
	if (searchFiltereAppareildArray.length == 0 && tagAppareil.length >= 1) {
		appareilList.innerHTML = "aucun résultat";
	}
	// si il y a autre chose que les oublon les affiche
	else {
		searchFiltereAppareildArray.forEach((searchFiltereAppareildArray) => {
			const search = generateListAppareil(searchFiltereAppareildArray);
			//
			appareilList.appendChild(search);
		});
	}
}
//-----------------------------------------------------------------------------
//filtrage de l'array pour les ustensiles
//-----------------------------------------------------------------------------
recipes.forEach((recipes) => {
	var arrayUstensilesTemp = [];
	for (var i = 0; i < recipes.ustensils.length; i++) {
		const count = arrayUstensilesTemp.push(recipes.ustensils[i]);
	}
	arrayUstensilesTemp.forEach((element) => {
		arrayUstensiles.push(element.toLowerCase());
	});
});
//trie par l'ordre alphabétique puis on enlève les doublon
const SortUstensiles = arrayUstensiles.sort();
const filtereUstensilesArray = SortUstensiles.filter(
	(ele, pos) => arrayUstensiles.indexOf(ele) == pos
);
//generation de la liste d'ustensiles avec une lettre majuscule au debut
function generateListeUstensiles(data) {
	let filterUstensilesListItem = document.createElement("li");
	//
	filterUstensilesListItem.textContent = capitalizeFirstLetter(data);
	//
	filterUstensilesListItem.setAttribute("class", "liste-element text-truncate");
	filterUstensilesListItem.setAttribute("name", capitalizeFirstLetter(data));
	filterUstensilesListItem.setAttribute("data-categorie", "ustensiles");
	//
	filterUstensilesListItem.addEventListener("click", creationTagUstensiles);
	filterUstensilesListItem.addEventListener("click", getResults);
	//
	return filterUstensilesListItem;
}
//generation des ustensiles en fonction de la recherche
function generateSearchLisUstensiles(recetteUstensilesdArray) {
	var searchArrayUstensilesTemp = [];
	var searchArrayUstensiles = [];
	recetteUstensilesdArray.forEach((recetteUstensilesdArray) => {
		for (var i = 0; i < recetteUstensilesdArray.ustensils.length; i++) {
			const count = searchArrayUstensilesTemp.push(
				recetteUstensilesdArray.ustensils[i]
			);
		}
		searchArrayUstensilesTemp.forEach((element) => {
			searchArrayUstensiles.push(element.toLowerCase());
		});
	});
	//trie par l'ordre alphabétique puis on enlève les doublon
	const SortAppareil = searchArrayUstensiles.sort();
	searchFiltereUstensilesdArray = SortAppareil.filter(
		(ele, pos) => searchArrayUstensiles.indexOf(ele) == pos
	);
	ustensilesList.innerHTML = "";
	for (let a = 0; a < tagUstensiles.length; a++) {
		for (let i = 0; i < searchFiltereUstensilesdArray.length; i++) {
			if (tagUstensiles[a] == searchFiltereUstensilesdArray[i]) {
				const positionTagInArray = searchFiltereUstensilesdArray.indexOf(
					tagUstensiles[a]
				);
				if (positionTagInArray > -1) {
					searchFiltereUstensilesdArray.splice(positionTagInArray, 1);
				}
			}
		}
	}
	// si il n'y a pas de autre ustensiles a part des doublon ne les affiche plus
	if (searchFiltereUstensilesdArray.length == 0 && tagUstensiles.length >= 1) {
		ustensilesList.innerHTML = "aucun résultat";
	}
	// si il y a autre chose que les doublon les affiche
	else {
		searchFiltereUstensilesdArray.forEach((searchFiltereUstensilesdArray) => {
			const search = generateListeUstensiles(searchFiltereUstensilesdArray);
			//
			ustensilesList.appendChild(search);
		});
	}
}

//-----------------------------------------------------------------------------
// generation des recette
//-----------------------------------------------------------------------------
function generateRecipe(data) {
	let cardMaster = document.createElement("div");
	let imgCard = document.createElement("img");
	let cardBody = document.createElement("div");
	let cardHeaderContainer = document.createElement("div");
	let cardTitle = document.createElement("h5");
	let cardTimeContainer = document.createElement("div");
	let cardClockIcon = document.createElement("i");
	let cardTime = document.createElement("p");
	let cardTexteContainer = document.createElement("div");
	let cardList = document.createElement("div");
	let cardDescription = document.createElement("p");
	//
	cardMaster.setAttribute("class", "card");
	//
	imgCard.setAttribute("class", "card-img-top");
	imgCard.setAttribute("alt", "placeholder");
	imgCard.setAttribute("src", "assets/images/plat.svg");
	//
	cardBody.setAttribute("class", "card-body");
	//
	cardHeaderContainer.setAttribute("class", "card-header-container");
	//
	cardTitle.setAttribute("class", "card-title text-truncate");
	cardTitle.textContent = data.name;
	//
	cardTimeContainer.setAttribute("class", "card-time");
	//
	cardClockIcon.setAttribute("class", "fa fa-clock-o");
	//
	cardTime.textContent = data.time + " min";
	//
	cardTexteContainer.setAttribute("class", "card-texte-container");
	//
	cardList.setAttribute("class", "list");
	//
	//declaration des array pour générer les ingredient
	var cardListItemContainer = [];
	var cardListItemTittle = [];
	var cardListItemTexte = [];
	//boucle for pour passer en revue le sous array des ingredient de chaque recette
	for (var i = 0; i < data.ingredients.length; i++) {
		var a = 0;
		cardListItemContainer[a] = document.createElement("div");
		cardListItemContainer[a].setAttribute("class", "list-item-container");
		//
		cardListItemTittle[a] = document.createElement("p");
		cardListItemTittle[a].setAttribute(
			"class",
			"list-item list-item-tittle text-truncate"
		);
		cardListItemTittle[a].textContent = data.ingredients[i].ingredient;
		//
		cardListItemTexte[a] = document.createElement("p");
		cardListItemTexte[a].setAttribute(
			"class",
			"list-item list-item-texte text-truncate"
		);
		//generation du nom de l'ingredient puis si il y a une quantity on ajoute des : et la quantités
		if (typeof data.ingredients[i].quantity == "undefined") {
		} else {
			cardListItemTittle[a].textContent += ":";
			cardListItemTexte[a].textContent = data.ingredients[i].quantity;
		}
		//si il y a une unité on l'ajoute également
		if (typeof data.ingredients[i].unit == "undefined") {
		} else {
			cardListItemTexte[a].textContent += " " + data.ingredients[i].unit;
		}
		cardList.appendChild(cardListItemContainer[a]);
		cardListItemContainer[a].appendChild(cardListItemTittle[a]);
		cardListItemTittle[a].appendChild(cardListItemTexte[a]);
	}
	//
	cardDescription.setAttribute("class", "card-description ");
	cardDescription.textContent = data.description;
	//
	cardMaster.appendChild(imgCard);
	cardMaster.appendChild(cardBody);
	cardBody.appendChild(cardHeaderContainer);
	cardBody.appendChild(cardTexteContainer);
	//
	cardHeaderContainer.appendChild(cardTitle);
	cardHeaderContainer.appendChild(cardTimeContainer);
	//
	cardTimeContainer.appendChild(cardClockIcon);
	cardTimeContainer.appendChild(cardTime);
	//
	cardTexteContainer.appendChild(cardList);
	cardTexteContainer.appendChild(cardDescription);

	return cardMaster;
}
//-----------------------------------------------------------------------------
// Initialisation des fonction
//-----------------------------------------------------------------------------
var divcard = document.querySelector(".card-Container");
recipes.forEach((recipes) => {
	const recette = generateRecipe(recipes);
	divcard.appendChild(recette);
});
//ingredients
filtereIngredientsdArray.forEach((filtereIngredientsdArray) => {
	//
	const search = generateListeIngredients(filtereIngredientsdArray);
	//
	ingredientsList.appendChild(search);
});
//appareil
filtereAppareildArray.forEach((filtereAppareildArray) => {
	//
	const search = generateListAppareil(filtereAppareildArray);
	//
	appareilList.appendChild(search);
});
//ustensiles
filtereUstensilesArray.forEach((filtereUstensilesArray) => {
	//
	const search = generateListeUstensiles(filtereUstensilesArray);
	//
	ustensilesList.appendChild(search);
});
//activation des différente fonction qui gere la recherche pour les filtre
checkIngredients();
checkAppareil();
checkUstensiles();
//-----------------------------------------------------------------------------
// recherche principal
//-----------------------------------------------------------------------------

function selectElement(selector) {
	return document.querySelector(selector);
}
function clearResult() {
	selectElement(".card-Container").innerHTML = "";
}
function clearAll() {
	selectElement(".card-Container").innerHTML = "";
	ingredientsList.innerHTML = "";
	appareilList.innerHTML = "";
	ustensilesList.innerHTML = "";
	tagContainer.innerHTML = "";
}
function clearFilterList() {
	ingredientsList.innerHTML = "";
	appareilList.innerHTML = "";
	ustensilesList.innerHTML = "";
	tagContainer.innerHTML = "";
}

function getResults() {
	const search = selectElement(".recherche-principal").value;
	checkIngredients();
	checkAppareil();
	checkUstensiles();
	clearResult();
	sortRecette = [];
	if (
		search.length === 0 &&
		(tagIngredients.length >= 1 ||
			tagAppareil.length >= 1 ||
			tagUstensiles.length >= 1)
	) {
		recipes.forEach((recipes) => {
			const recette = generateRecipe(recipes);
			divcard.appendChild(recette);
		});
		for (let i = 0; i < recipes.length; i++) {
			sortRecette.push(recipes[i]);
		}
		rechercheAllTag(sortRecette);
	} else {
		for (let i = 0; i < recipes.length; i++) {
			if (search.length >= 3) {
				fermetureListeIngredients();
				fermetureListeAppareil();
				fermetureListeUstensiles();
				for (var a = 0; a < recipes[i].ingredients.length; a++) {
					if (
						recipes[i].ingredients[a].ingredient
							.toLocaleLowerCase()
							.includes(search.toLocaleLowerCase()) ||
						recipes[i].name
							.toLocaleLowerCase()
							.includes(search.toLocaleLowerCase()) ||
						recipes[i].description
							.toLocaleLowerCase()
							.includes(search.toLocaleLowerCase())
					) {
						if (tagIngredients.length >= 1) {
							//ingredient
							sortRecette.push(recipes[i]);
							const data = rechercheTagIngredients(sortRecette);
							generateSearchListfiltre(data);
							generateRecipeTag(data);
						} else if (tagAppareil.length >= 1) {
							//Appareil
							sortRecette.push(recipes[i]);
							const data = rechercheTagAppareil(sortRecette);
							generateSearchListfiltre(data);
							generateRecipeTag(data);
						} else if (tagUstensiles.length >= 1) {
							//ustensiles
							sortRecette.push(recipes[i]);
							const data = rechercheTagUstensiles(sortRecette);
							generateSearchListfiltre(data);
							generateRecipeTag(data);
						} else if (
							tagIngredients.length == 0 &&
							tagAppareil.length == 0 &&
							tagUstensiles.length == 0
						) {
							sortRecette.push(recipes[i]);
						}
					}
				}
			}
			recettefilterArray = filterArray(sortRecette);
		}

		if (sortRecette == "" && search.length < 2) {
			if (
				tagIngredients.length == 0 &&
				tagAppareil.length == 0 &&
				tagUstensiles.length == 0
			) {
				clearFilterList();
				filtereIngredientsdArray.forEach((filtereIngredientsdArray) => {
					//
					const search = generateListeIngredients(filtereIngredientsdArray);
					//
					ingredientsList.appendChild(search);
				});
				//appareil
				filtereAppareildArray.forEach((filtereAppareildArray) => {
					//
					const search = generateListAppareil(filtereAppareildArray);
					//
					appareilList.appendChild(search);
				});
				//ustensiles
				filtereUstensilesArray.forEach((filtereUstensilesArray) => {
					//
					const search = generateListeUstensiles(filtereUstensilesArray);
					//
					ustensilesList.appendChild(search);
				});
				if (sortRecette == "" && search.length == 0) {
					recipes.forEach((recipes) => {
						const recette = generateRecipe(recipes);
						divcard.appendChild(recette);
					});
				}
			}
		} else {
			if (sortRecette == "" && search.length >= 3) {
				divcard.innerHTML = `<h2>Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc</h2>`;
			} else {
				if (
					tagIngredients.length == 0 &&
					tagAppareil.length == 0 &&
					tagUstensiles.length == 0
				) {
					generateSearchListfiltre(recettefilterArray);
					recettefilterArray.forEach((recettefilterArray) => {
						const searchList = generateRecipe(recettefilterArray);
						divcard.appendChild(searchList);
					});
				}
			}
		}
	}
}
selectElement(".recherche-principal").addEventListener("keyup", getResults);
//-----------------------------------------------------------------------------
// recherche avec les filtre
//-----------------------------------------------------------------------------
function generateSearchListfiltre(data) {
	const datafilter = filterArray(data);
	generateSearchListIngredients(datafilter);
	generateSearchLisUstensiles(datafilter);
	generateSearchListAppareil(datafilter);
}

function generateRecipeTag(data) {
	selectElement(".card-Container").innerHTML = "";
	const datafilter = filterArray(data);
	datafilter.forEach((datafilter) => {
		const searchList = generateRecipe(datafilter);
		divcard.appendChild(searchList);
	});
}
function rechercheTagIngredients(sortRecette) {
	recettefilterArray = filterArray(sortRecette);
	var data = [];
	recettefilterArray.forEach((recettefilterArray) => {
		var ingredientrecette = [];
		for (var a = 0; a < recettefilterArray.ingredients.length; a++) {
			const count = ingredientrecette.push(
				recettefilterArray.ingredients[a].ingredient.toLocaleLowerCase()
			);
		}
		let checker = (arr, target) => target.every((v) => arr.includes(v));

		if (checker(ingredientrecette, tagIngredients) === true) {
			const count = data.push(recettefilterArray);
		} else {
		}
	});
	return data;
}

function rechercheTagAppareil(sortRecette) {
	recettefilterArray = filterArray(sortRecette);
	var data = [];
	recettefilterArray.forEach((recettefilterArray) => {
		let checker = (arr, target) => target.every((v) => arr.includes(v));
		if (
			checker(recettefilterArray.appliance.toLocaleLowerCase(), tagAppareil) ===
			true
		) {
			const count = data.push(recettefilterArray);
		} else {
		}
	});
	return data;
}

function rechercheTagUstensiles(sortRecette) {
	recettefilterArray = filterArray(sortRecette);
	var data = [];
	recettefilterArray.forEach((recettefilterArray) => {
		let checker = (arr, target) => target.every((v) => arr.includes(v));
		if (checker(recettefilterArray.ustensils, tagUstensiles) === true) {
			const count = data.push(recettefilterArray);
		} else {
		}
	});
	return data;
}
function rechercheAllTag(sortRecette) {
	recettefilterArray = filterArray(sortRecette);
	var dataIngredients = [];
	var dataAppareil = [];
	var dataUstensiles = [];
	var allTagData = [];
	recettefilterArray.forEach((recettefilterArray) => {
		//recherche via tag via ingredient puis appareil puis ustensiles
		if (tagIngredients.length >= 1) {
			dataIngredients = rechercheTagIngredients(sortRecette);
			generateSearchListfiltre(dataIngredients);
			generateRecipeTag(dataIngredients);
			if (tagAppareil.length >= 1) {
				dataAppareil = rechercheTagAppareil(dataIngredients);
				generateSearchListfiltre(dataAppareil);
				generateRecipeTag(dataAppareil);
				if (tagUstensiles.length >= 1) {
					dataUstensiles = rechercheTagUstensiles(dataAppareil);
					generateSearchListfiltre(dataUstensiles);
					generateRecipeTag(dataUstensiles);
				}
			}
			//recherche via tag via ingredient puis ustensiles et appareil
		} else if (tagIngredients.length >= 1) {
			dataIngredients = rechercheTagIngredients(sortRecette);
			generateSearchListfiltre(dataIngredients);
			generateRecipeTag(dataIngredients);
			if (tagUstensiles.length >= 1) {
				dataUstensiles = rechercheTagUstensiles(dataIngredients);
				generateSearchListfiltre(dataUstensiles);
				generateRecipeTag(dataUstensiles);
				if (tagAppareil.length >= 1) {
					dataAppareil = rechercheTagAppareil(dataUstensiles);
					generateSearchListfiltre(dataAppareil);
					generateRecipeTag(dataAppareil);
				}
			}
			//recherche via tag via appareil puis ustensiles et ingredient
		} else if (tagAppareil.length >= 1) {
			dataAppareil = rechercheTagAppareil(sortRecette);
			generateSearchListfiltre(dataAppareil);
			generateRecipeTag(dataAppareil);
			if (tagUstensiles.length >= 1) {
				dataUstensiles = rechercheTagUstensiles(dataAppareil);
				generateSearchListfiltre(dataUstensiles);
				generateRecipeTag(dataUstensiles);
				if (tagIngredients.length >= 1) {
					dataIngredients = rechercheTagIngredients(dataUstensiles);
					generateSearchListfiltre(dataIngredients);
					generateRecipeTag(dataIngredients);
				}
			}
			//recherche via tag via appareil puis ingredient et ustensiles
		} else if (tagAppareil.length >= 1) {
			dataAppareil = rechercheTagAppareil(sortRecette);
			generateSearchListfiltre(dataAppareil);
			generateRecipeTag(dataAppareil);
			if (tagIngredients.length >= 1) {
				dataIngredients = rechercheTagIngredients(dataAppareil);
				generateSearchListfiltre(dataIngredients);
				generateRecipeTag(dataIngredients);
				if (tagUstensiles.length >= 1) {
					dataUstensiles = rechercheTagUstensiles(dataIngredients);
					generateSearchListfiltre(dataUstensiles);
					generateRecipeTag(dataUstensiles);
				}
			}
			//recherche via tag via ustensiles puis appareil et ingredient
		} else if (tagUstensiles.length >= 1) {
			dataUstensiles = rechercheTagUstensiles(sortRecette);
			generateSearchListfiltre(dataUstensiles);
			generateRecipeTag(dataUstensiles);
			if (tagAppareil.length >= 1) {
				dataAppareil = rechercheTagAppareil(dataUstensiles);
				generateSearchListfiltre(dataAppareil);
				generateRecipeTag(dataAppareil);
				if (tagIngredients.length >= 1) {
					dataIngredients = rechercheTagIngredients(dataAppareil);
					generateSearchListfiltre(dataIngredients);
					generateRecipeTag(dataIngredients);
				}
			}
			//recherche via tag via ustensiles puis ingredient et appareil
		} else if (tagUstensiles.length >= 1) {
			dataUstensiles = rechercheTagUstensiles(sortRecette);
			generateSearchListfiltre(dataUstensiles);
			generateRecipeTag(dataUstensiles);
			if (tagIngredients.length >= 1) {
				dataIngredients = rechercheTagIngredients(dataUstensiles);
				generateSearchListfiltre(dataIngredients);
				generateRecipeTag(dataIngredients);
				if (tagAppareil.length >= 1) {
					dataAppareil = rechercheTagAppareil(dataIngredients);
					generateSearchListfiltre(dataAppareil);
					generateRecipeTag(dataAppareil);
				}
			}
		}
	});
}
//-----------------------------------------------------------------------------
// recherche secondaire ingredients
//-----------------------------------------------------------------------------
function checkIngredients() {
	//si on est pas en recherche c'est elle qui sera appeler
	function getIngredientsResults() {
		const search = selectElement(".ingredients-input").value;
		ingredientsList.innerHTML = "";
		filtereIngredientsdArray.forEach((filtereIngredientsdArray) => {
			if (
				filtereIngredientsdArray
					.toLocaleLowerCase()
					.includes(search.toLocaleLowerCase())
			) {
				ouvertureListeIngredients();
				fermetureListeAppareil();
				fermetureListeUstensiles();
				const searchList = generateListeIngredients(filtereIngredientsdArray);
				ingredientsList.appendChild(searchList);
			}
		});
	}
	//si on est en recherche c'est elle qui sera appeler
	function getIngredientsInSearchResults() {
		const search = selectElement(".ingredients-input").value;
		ingredientsList.innerHTML = "";
		searchFiltereIngredientsdArray.forEach((searchFiltereIngredientsdArray) => {
			if (
				searchFiltereIngredientsdArray
					.toLocaleLowerCase()
					.includes(search.toLocaleLowerCase())
			) {
				ouvertureListeIngredients();
				fermetureListeAppareil();
				fermetureListeUstensiles();
				const searchList = generateListeIngredients(
					searchFiltereIngredientsdArray
				);
				ingredientsList.appendChild(searchList);
			}
		});
	}
	ingredientsInput.addEventListener("keyup", getIngredientsResults);
	if (recettefilterArray.length == 0) {
		ingredientsInput.removeEventListener(
			"keyup",
			getIngredientsInSearchResults
		);
		ingredientsInput.addEventListener("keyup", getIngredientsResults);
	} else {
		ingredientsInput.removeEventListener("keyup", getIngredientsResults);
		ingredientsInput.addEventListener("keyup", getIngredientsInSearchResults);
	}
}
//-----------------------------------------------------------------------------
// recherche secondaire Appareil
//-----------------------------------------------------------------------------
function checkAppareil() {
	function getAppareilResults() {
		const search = selectElement(".appareil-input").value;
		appareilList.innerHTML = "";
		filtereAppareildArray.forEach((filtereAppareildArray) => {
			if (
				filtereAppareildArray
					.toLocaleLowerCase()
					.includes(search.toLocaleLowerCase())
			) {
				ouvertureListeAppareil();
				fermetureListeIngredients();
				fermetureListeUstensiles();
				if (tagAppareil.length >= 1) {
					appareilList.innerHTML = "aucun résultat";
				} else {
					const searchList = generateListAppareil(filtereAppareildArray);
					appareilList.appendChild(searchList);
				}
			}
		});
	}
	function getAppareilInSearchResults() {
		const search = selectElement(".appareil-input").value;
		const listcontent = selectElement(".liste-appareil").value;
		appareilList.innerHTML = "";
		searchFiltereAppareildArray.forEach((searchFiltereAppareildArray) => {
			if (
				searchFiltereAppareildArray
					.toLocaleLowerCase()
					.includes(search.toLocaleLowerCase())
			) {
				ouvertureListeAppareil();
				fermetureListeIngredients();
				fermetureListeUstensiles();
				if (tagAppareil.length >= 1) {
					appareilList.innerHTML = "aucun résultat";
				} else {
					const searchList = generateListAppareil(searchFiltereAppareildArray);
					appareilList.appendChild(searchList);
				}
			}
		});
	}
	appareilsInput.addEventListener("keyup", getAppareilResults);
	if (recettefilterArray.length == 0) {
		appareilsInput.removeEventListener("keyup", getAppareilInSearchResults);
		appareilsInput.addEventListener("keyup", getAppareilResults);
	} else {
		appareilsInput.removeEventListener("keyup", getAppareilResults);
		appareilsInput.addEventListener("keyup", getAppareilInSearchResults);
	}
}
//-----------------------------------------------------------------------------
// recherche secondaire ustensiles
//-----------------------------------------------------------------------------
function checkUstensiles() {
	function getUstensilesResults() {
		const search = selectElement(".ustensiles-input").value;
		ustensilesList.innerHTML = "";
		filtereUstensilesArray.forEach((filtereUstensilesArray) => {
			if (
				filtereUstensilesArray
					.toLocaleLowerCase()
					.includes(search.toLocaleLowerCase())
			) {
				ouvertureListeUstensiles();
				fermetureListeIngredients();
				fermetureListeAppareil();
				const searchList = generateListeUstensiles(filtereUstensilesArray);
				ustensilesList.appendChild(searchList);
			}
		});
	}

	function getUstensilesInSearchResults() {
		const search = selectElement(".ustensiles-input").value;
		ustensilesList.innerHTML = "";
		searchFiltereUstensilesdArray.forEach((searchFiltereUstensilesdArray) => {
			if (
				searchFiltereUstensilesdArray
					.toLocaleLowerCase()
					.includes(search.toLocaleLowerCase())
			) {
				ouvertureListeUstensiles();
				fermetureListeIngredients();
				fermetureListeAppareil();
				const searchList = generateListeUstensiles(
					searchFiltereUstensilesdArray
				);
				ustensilesList.appendChild(searchList);
			}
		});
	}
	ustensilesInput.addEventListener("keyup", getUstensilesResults);
	if (recettefilterArray.length == 0) {
		ustensilesInput.removeEventListener("keyup", getUstensilesInSearchResults);
		ustensilesInput.addEventListener("keyup", getUstensilesResults);
	} else {
		ustensilesInput.removeEventListener("keyup", getUstensilesResults);
		ustensilesInput.addEventListener("keyup", getUstensilesInSearchResults);
	}
}
