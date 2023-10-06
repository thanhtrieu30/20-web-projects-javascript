// https://www.themealdb.com/api/json/v1/1/search.php?s=${term}
// https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}
// https://www.themealdb.com/api/json/v1/1/random.php

const submit = document.getElementById("submit");
const search = document.getElementById("search");
const random = document.getElementById("random");
const resultHeading = document.getElementById("result-heading");
const mealss = document.getElementById("meals");
const singleMeal = document.getElementById("single-meal");

function searchMeal(e) {
  e.preventDefault();
  const term = search.value;

  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        resultHeading.innerHTML = `<h2>Result search for '${term}' is :</h2>`;
        if (data.meals === null) {
          resultHeading.innerHTML = "<h2>No search result : try again !!!</h2>";
        } else {
          mealss.innerHTML = data.meals
            .map(
              (meal) => `
            <div class='meal'>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                <div class="meal-info" data-mealID="${meal.idMeal}">
                    <h3>${meal.strMeal}
                    </h3>
                </div>
            </div>
            `
            )
            .join();
        }
      });
  } else {
    alert("plz enter keyword !!!");
  }
}

// search.addEventListener("change", searchItem);
submit.addEventListener("submit", searchMeal);
