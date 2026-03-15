/*button.addEventListener("click", function() {
    document.getElementById("myText").textContent = "Welcome to TechAscend Cohort 2.";
});*/

// document.getElementById("myButton").addEventListener("click", function() {
//     document.getElementById("myText").style.display = "block";
// });


function showText() {
  document.getElementById("myText").style.display = "block";
}

document.getElementById("myButton").addEventListener("click", showText);
