const btn = document.getElementById("toogler");
const btn_icon =  document.getElementById("toogler-icon");
const contain = document.getElementById("contain");
const wind = document.getElementById("wind")
let inputsearch = document.getElementById("inputsearch");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let text = document.getElementById("text");

// btn.onclick = function() {
// 	if(contain.getAttribute("data-theme")!="dark"){
// 		contain.setAttribute("data-theme","dark");
// 		btn_icon.setAttribute("class","fas fa-solid fa-sun");
// 		wind.setAttribute("style","color: orange;")
//       }
// 	else{
// 		contain.setAttribute("data-theme","");
// 		wind.setAttribute("style","color: #0f345fe3;")
// 		btn_icon.setAttribute("class","fas fa-solid fa-moon");
//       }
// }

async function getweather() {
  let data = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=dd106b2cf2504043aa5151102232502&q=${city}&days=3`)
  let res = await data.json()
//   let arr=res.forecast.forecastday;
//   displayCurrent(res);
//   displayForcast(arr);
  getweather();
inputsearch.addEventListener("blur", function(el){
//   getweather(el.target.value);
  console.log(el.target.value);
});
}
