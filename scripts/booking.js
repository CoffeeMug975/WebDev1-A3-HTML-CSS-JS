/********* create variables here *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 0;
let numOfDays = 0;
const daysOfTheWeek = document.querySelectorAll(".day-selector li");
const calculatedCost = document.getElementById("calculated-cost");
const clearAll = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function applyClicked(){

    for (let i = 0; i < daysOfTheWeek.length; i++){
       daysOfTheWeek[i].addEventListener("mouseenter", function(){
        daysOfTheWeek[i].classList.add("clicked");
       });
       daysOfTheWeek[i].addEventListener("click", function(){
        daysOfTheWeek[i].classList.add("clicked");
        numOfDays++;
       });
       calculate();
    }
}
applyClicked();

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays(){
    clearAll.addEventListener("click", function(){
        for (let i = 0; i < daysOfTheWeek.length; i++){
            daysOfTheWeek[i].classList.remove("clicked");
        }
        numOfDays = 0;
        calculate();
    });
}
clearDays();
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $25, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// when the full-day button is clicked, the daily rate is set back to $40, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function changeRate(){
    const halfDay = document.getElementById("half");
    const fullDay = document.getElementById("full");


    halfDay.addEventListener('click',function(){
        console.log("half");
        costPerDay = 25;
        calculate();
    });
    fullDay.addEventListener('click',function(){
        console.log("full");
        costPerDay = 40;
        calculate();
    });

}
changeRate();

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
    calculatedCost.innerHTML = numOfDays * costPerDay;
}