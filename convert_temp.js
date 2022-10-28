"use strict";
const $ = selector => document.querySelector(selector);

//we create links for each html element that we want to modify
const label1 = document.getElementById("degree_label_1")
const label2 = document.getElementById("degree_label_2")
const result = document.getElementById("degrees_computed")

const CelsiusB = document.getElementById("to_celsius")
const FahrenheitB = document.getElementById("to_fahrenheit")
const entry = document.getElementById("degrees_entered")
const message = document.getElementById("message")

 
/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
	//we put the label1Text to label1 in the html
	label1.textContent= label1Text
	//we put the label2Text to label2 in the html
	label2.textContent = label2Text
	//we clean the previous results and any error messages
	result.value = ""
	message.textContent = ""

}


/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => {
	//clear the message errors
	message.textContent = ""
	//we check if the entry value is not a number and we show an error message 
	if(isNaN(entry.value))
	{
		message.textContent = (" You must enter a valid number for degrees " )
	}
	//if it is a number, we calculate the degree result
	else
	{
	let degree_result;
	//we check which radio button is selected and we call its respective method to compute the calculation
	if(CelsiusB.checked)
	{
	degree_result = calculateCelsius(parseInt(entry.value))
	}
	if(FahrenheitB.checked)
	{
	degree_result = calculateFahrenheit(parseInt(entry.value))
	}
	//we display the results on the respective text box
	result.value = degree_result.toFixed(0).toString()
	}
	
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	$("#degrees_entered").focus();
});  