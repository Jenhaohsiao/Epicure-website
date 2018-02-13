var mealRequestURL = 'http://www.themealdb.com/api/json/v1/1/random.php';
var mealRequest = new XMLHttpRequest();
mealRequest.open('GET', mealRequestURL);
mealRequest.responseType = 'json';
mealRequest.send();

mealRequest.onload = function () {
    var mealJson = mealRequest.response;
    document.getElementById("idMeal").innerText = mealJson['meals'][0]['idMeal'];
    document.getElementById("strMeal").innerText = mealJson['meals'][0]['strMeal'];
    document.getElementById("strCategory").innerText = mealJson['meals'][0]['strCategory'];
    document.getElementById("strArea").innerText = mealJson['meals'][0]['strArea'];
    document.getElementById("strInstructions").innerText = mealJson['meals'][0]['strInstructions'];
  

    var foodimage = "http://"+ mealJson['meals'][0]['strMealThumb'];
    // document.getElementById("strMealThumb_text").innerText = mealJson['meals'][0]['strMealThumb'];
    document.getElementById("strMealThumb_text").innerText = foodimage;
    document.getElementById("strMealThumb").src = foodimage;

    document.getElementById("strTags").innerText = mealJson['meals'][0]['strTags'];
    document.getElementById("strYoutube").innerText = mealJson['meals'][0]['strYoutube'];
  

}