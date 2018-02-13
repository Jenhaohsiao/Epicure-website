var mealRequestURL = 'https://dog.ceo/api/breeds/image/random';
var mealRequest = new XMLHttpRequest();
mealRequest.open('GET', mealRequestURL);
mealRequest.responseType = 'json';
mealRequest.send();

mealRequest.onload = function () {
    var mealJson = mealRequest.response;
    document.getElementById("status").innerText = mealJson['status'];
  

    var message = mealJson['message'];
    document.getElementById("message").src = message;

  

}