$(document).ready(function(){
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	//Esconder botón flecha:
	$('.js-back').remove();
	renderHighlightedRecipes(recipesArray);
	printNews();
});


//ETAPA 2:
function printNews() {
    $('.callout-news > p').text('NUEVAS RECETAS');
}


/*
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
    for(var i = 0; i < recipesArray.length; i++){
        if (recipesArray[i].highlighted == true){
            renderRecipe(recipesArray[i]);
        }
    }

	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}

/*arreglo recipesArray
/*highlighted​

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


