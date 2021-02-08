fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => displayMeal(data.meals));

const displayMeal = meals => {
    const mealDiv = document.getElementById('mealNameSearch');
    for (let i = 0; i < meals.length; i++) {
        const meal = meals[i];
        const h2 = document.createElement('h2');
        h2.innerText = meal.strMeal;
        mealDiv.appendChild(h2);
        const img = document.createElement('img');
        img.innerText = meal.strMealThumb;
        mealDiv.appendChild(img);
        
        
    }
} 