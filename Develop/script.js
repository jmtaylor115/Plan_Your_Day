//set up variables to grab and display the date and time
//set up variables for each hour activity slot
var nineAM = document.getElementById("nineAMActivities")
var tenAM = document.getElementById("tenAMActivities")
var elevenAM = document.getElementById("elevenAMActivities")
var twelveAM = document.getElementById("twelvePMActivities")
var onePM = document.getElementById("onePMActivities")
var twoPM = document.getElementById("twoPMActivities")
var threePM = document.getElementById("threePMActivities")
var fourPM = document.getElementById("fourPMActivities")
var fivePM = document.getElementById("fivePMActivities")
var sixPM = document.getElementById("sixPMActivities")

//set up functions for each indivdual hour's activity block
//buttons
$("#saveButton").on("click", function() {
    
    if(nineAM == "" || tenAM == "" || elevenAm == "" || twelvePm == "" || onePM == "" || twoPM == "" || threePM == "" || fourPM == "" || fivePM == "" || sixPM =="") {
    
    }
    else {
        localStorage.setItem(nineAM)
        localStorage.setItem(tenPM)
        localStorage.setItem(elevenAM)
        localStorage.setItem(twelvePM)
        localStorage.setItem(onePM)
        localStorage.setItem(twoPM)
        localStorage.setItem(threePM)
        localStorage.setItem(fourPM)
        localStorage.setItem(fivePM)
        localStorage.setItem(sixPM)
    }
})