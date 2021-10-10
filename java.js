// JavaScript Document

var selectedcar = "";
var cardailyprice = "";
var date = "empty";

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
	dd = '0' + dd
}
if (mm < 10) {
	mm = '0' + mm
}
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("dateInput").setAttribute("min", today);

function carchange(a, b) {
	cardailyprice = b;
	selectedcar = a;
	document.getElementById("panel0").style.display = "none";
	document.getElementById("panel1").style.display = "block";
	document.getElementById("check0").innerHTML = "Vehicle Select ✔️";
	document.getElementById("file").value = 25;
}



function calculateprice(){
	var price = 0;
	var carprice = cardailyprice;
	var days = document.getElementById("daysInput").value;
	
	if (bikerack.checked) {
		price = price + 120;
	}
	if (booster.checked) {
		price = price + 50;
	}
	if (snowchains.checked) {
		price = price + 60
	}
	if (roofrack.checked) {
		price = price + 90;
	}
	if (gps.checked) {
		price = price + 35;
	}
	
	price = price + 50
	price = price + (20 * days)
	price = price + (carprice * days)
	
	return price;
	
	
	
	
}

function getExtras() {
	var extras = [

];
	if (bikerack.checked) {
		extras.push(" Bike Rack")
	}
	if (booster.checked) {
		extras.push(" Booster Seat")
	}
	if (snowchains.checked) {
		extras.push(" Snow Chains")
	}
	if (roofrack.checked) {
		extras.push(" Roofrack")
	}
	if (gps.checked) {
		extras.push(" GPS")
	}
	return extras;
}

function close3() {	
	if (document.getElementById("firstNameInput").validity.patternMismatch || document.getElementById("firstNameInput").validity.valueMissing) {
		document.getElementById("errorMessage3").innerHTML = "Please enter a valid name";
		return;
	}
	if (document.getElementById("lastNameInput").validity.patternMismatch || document.getElementById("lastNameInput").validity.valueMissing) {
		document.getElementById("errorMessage4").innerHTML = "Please enter a valid last name";
		return;
	}
	var regex = /^[-+]?[0-9]+\.[0-9]+$/;
    
 if (document.getElementById("ageInput").value > 80 || document.getElementById("ageInput").value <=24 || document.getElementById("ageInput").value == null ||document.getElementById("ageInput").value.match(regex)){
		document.getElementById("errorMessage5").innerHTML = "Please enter in a valid age";
		return;
	}
	if (document.getElementById("emailInput").validity.valueMissing || document.getElementById("emailInput").validity.patternMismatch) {
		document.getElementById("errorMessage6").innerHTML = "Please enter a valid email";
		return;
	}
	if (document.getElementById("phone").validity.valueMissing || document.getElementById("phone").validity.patternMismatch) {

		document.getElementById("errorMessage7").innerHTML = "Please enter a valid phone number";
		return;
	}
	if (document.getElementById("licence").validity.valueMissing || document.getElementById("licence").validity.patternMismatch) {
		document.getElementById("errorMessage8").innerHTML = "Please enter a valid licence number";
		return;
	

	}else{
			document.getElementById("panel3").style.display = "none";
			document.getElementById("panel4").style.display = "block";
			document.getElementById("check3").innerHTML = "Customer Details ✔️";
			document.getElementById("file").value = 100;
			updateoutput()
	}
	
}


function checkfname() {
	if (document.getElementById("firstNameInput").validity.patternMismatch || document.getElementById("firstNameInput").validity.valueMissing) {
		
		document.getElementById("errorMessage3").innerHTML = "Please enter a valid name";
		return;
	}
	else{
		document.getElementById("errorMessage3").innerHTML = " ";
	}
}
function checklname() {
	if (document.getElementById("lastNameInput").validity.patternMismatch || document.getElementById("lastNameInput").validity.valueMissing) {
		
		document.getElementById("errorMessage4").innerHTML = "Please enter a valid last name";
		return;
	}
	else{
		document.getElementById("errorMessage4").innerHTML = " ";
	}
}
function checkage() {
	var regex = /^[-+]?[0-9]+\.[0-9]+$/;
    
 if (document.getElementById("ageInput").value > 80 || document.getElementById("ageInput").value <=24 || document.getElementById("ageInput").value == null ||document.getElementById("ageInput").value.match(regex)){
		document.getElementById("errorMessage5").innerHTML = "Please enter in a valid age";
		return;
	}
	else{
		document.getElementById("errorMessage5").innerHTML = " ";
	}
}
function checkemail() {
	if (document.getElementById("emailInput").validity.valueMissing || document.getElementById("emailInput").validity.patternMismatch) {
		
		document.getElementById("errorMessage6").innerHTML = "Please enter a valid email";
		return;
	}
	else{
		document.getElementById("errorMessage6").innerHTML = " ";
	}
}
function checkphone() {
	if (document.getElementById("phone").validity.valueMissing || document.getElementById("phone").validity.patternMismatch) {

		document.getElementById("errorMessage7").innerHTML = "Please enter a valid phone number";
		return;
	}
	else{
		document.getElementById("errorMessage7").innerHTML = " ";
	}
}
function checklicence() {
	if (document.getElementById("licence").validity.valueMissing || document.getElementById("licence").validity.patternMismatch) {

		document.getElementById("errorMessage8").innerHTML = "Please enter a valid licence number";
		return;	
	}
	else{
		document.getElementById("errorMessage8").innerHTML = " ";
	}
}

function updatedate() {
	date = document.getElementById("dateInput").value
	if (date != "empty" || date != ""){
		document.getElementById("errorMessage2").innerHTML = " ";
		return;
	}
}

function close2() {
	var regex = /^[-+]?[0-9]+\.[0-9]+$/;
    
 if (document.getElementById("daysInput").value > 21 || document.getElementById("daysInput").value <=0 || document.getElementById("daysInput").value == null ||document.getElementById("daysInput").value.match(regex)){
		document.getElementById("errorMessage1").innerHTML = "Please enter a valid number of days";
		return;

	}
	if (date == "empty" || date == "") {
			document.getElementById("errorMessage2").innerHTML = "Please enter a valid date";
			return;

	}else{
		document.getElementById("panel2").style.display = "none";
		document.getElementById("panel3").style.display = "block";
		document.getElementById("check2").innerHTML = "Vehicle Details ✔️";
		document.getElementById("file").value = 75;
	}
	
}

function checkdays() {
		var regex = /^[-+]?[0-9]+\.[0-9]+$/;
    
 if (document.getElementById("daysInput").value > 21 || document.getElementById("daysInput").value <=0 || document.getElementById("daysInput").value == null ||document.getElementById("daysInput").value.match(regex)){
		document.getElementById("errorMessage1").innerHTML = "Please enter a valid number of days";
		return;

	}
	else{
		document.getElementById("errorMessage1").innerHTML = " ";
	}
}

function close1() {
	document.getElementById("panel1").style.display = "none";
	document.getElementById("panel2").style.display = "block";
	document.getElementById("check1").innerHTML = "Extras Select ✔️";
	document.getElementById("file").value = 50;
}


function updateoutput() {
	
	document.getElementById("fnameo").innerHTML = document.getElementById("firstNameInput").value
	document.getElementById("lnameo").innerHTML = document.getElementById("lastNameInput").value
	document.getElementById("ageo").innerHTML = document.getElementById("ageInput").value
	document.getElementById("emailo").innerHTML = document.getElementById("emailInput").value
	document.getElementById("cello").innerHTML = document.getElementById("phone").value
	document.getElementById("licenceo").innerHTML = document.getElementById("licence").value
	
	document.getElementById("caro").innerHTML = selectedcar
	document.getElementById("dateo").innerHTML= date
	document.getElementById("dayo").innerHTML= document.getElementById("daysInput").value
	document.getElementById("pickupo").innerHTML = document.getElementById("pickuplocation").value
	document.getElementById("returno").innerHTML = document.getElementById("returnlocation").value
	document.getElementById("totalo").innerHTML = "$" + calculateprice()
	document.getElementById("insuranceo").innerHTML = "$" + document.getElementById("daysInput").value * 20
	document.getElementById("pricepdo").innerHTML = "$" + cardailyprice * document.getElementById("daysInput").value
	document.getElementById("extrao").innerHTML = getExtras()
	document.getElementById("commento").innerHTML = document.getElementById("commentInput").value
}
function back0() {
	document.getElementById("panel1").style.display = "none";
	document.getElementById("panel0").style.display = "block";
	document.getElementById("check0").innerHTML = "Vehicle Select ❌";
	document.getElementById("file").value = 0;
}
function back1() {
	document.getElementById("panel2").style.display = "none";
	document.getElementById("panel1").style.display = "block";
	document.getElementById("check1").innerHTML = "Extras Select ❌";
	document.getElementById("file").value = 25;
}
function back2() {
	document.getElementById("panel3").style.display = "none";
	document.getElementById("panel2").style.display = "block";
	document.getElementById("check2").innerHTML = "Vehicle Details ❌";
	document.getElementById("file").value = 550;
}
function back3() {
	document.getElementById("panel4").style.display = "none";
	document.getElementById("panel3").style.display = "block";
	document.getElementById("check3").innerHTML = "Customer Details ❌";
	document.getElementById("file").value = 75;
}


function confirmBooking() {
	if (terms.checked) {
		
			var database = firebase.database()
			var bookingRef = database.ref('bookings')	
		
			var fname = document.getElementById("firstNameInput").value
			var lname = document.getElementById("lastNameInput").value
			var age = document.getElementById("ageInput").value
			var email = document.getElementById("emailInput").value
			var phone = document.getElementById("phone").value
			var licence = document.getElementById("licence").value

			var car = selectedcar
			var dates = date
			var days= document.getElementById("daysInput").value
			var pickup = document.getElementById("pickuplocation").value
			var returnl = document.getElementById("returnlocation").value
			var totalprice = "$" + calculateprice()
			var insurance = "$" + document.getElementById("daysInput").value * 20
			var dailycar = "$" + cardailyprice * document.getElementById("daysInput").value
			var extras = getExtras()
			var comment = document.getElementById("commentInput").value

		var bookingsEntry= {
			firstname : fname,
			lastname : lname,
			age : age,
			email : email,
			phone : phone,
			licencenumber : licence,
			selectedcar : car,
			pickupdate : dates,
			totaldays : days,
			pickuplocation : pickup,
			returnlocation : returnl,
			insurance : insurance,
			bookingfee : 50,
			dailycarcost : dailycar,
			totalcost : totalprice,
			extras : extras,
			comment : comment,
			
		}
		bookingRef.push(bookingsEntry);
		document.getElementById("panel4").style.display = "none";
		document.getElementById("panel5").style.display = "block";
		setTimeout(function() {
			location.reload();
			}, 10000);

	}
	else {
		document.getElementById("errorMessage9").innerHTML = "Please accept terms and conditions";
		return;
	}
}


