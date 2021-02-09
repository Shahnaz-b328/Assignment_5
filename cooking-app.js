const searchMeal = () => {
    searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
} 
const displayMeals = meals => {
    const divContainer = document.getElementById('container');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.innerHTML = `<div class="col">
        <div class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="#" width="110px" height="110px">
          
          <div class="card-body">
          <h5 class="card-title text-center">${meal.strMeal}</h5>
          </div>
        </div>
      </div>
        `;
        divContainer.appendChild(mealDiv);
    })
}