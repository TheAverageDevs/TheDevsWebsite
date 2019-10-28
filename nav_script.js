function mobileFunction() {
	var x = document.getElementById("mobile_links");
	var p = document.getElementById("mobile_fold_out");
	if (x.style.display === "block") {
		x.style.display = "none";
		p.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

function mobileprojectFunction() {
	var x = document.getElementById("mobile_fold_out");
	var d = document.getElementById("left");
	var u = document.getElementById("right");
	if (x.style.display === "block") {
		x.style.display = "none";
		d.style.display = "inline";
		u.style.display = "none";
	} else {
		x.style.display = "block";
		d.style.display = "none";
		u.style.display = "inline";
	}
}

function dropdownlinksFunction() {
	var x = document.getElementById("drop_down_links");
	var d = document.getElementById("down");
	var u = document.getElementById("up");
	if (x.style.display === "block") {
		x.style.display = "none";
		d.style.display = "inline";
		u.style.display = "none";
	} else {
		x.style.display = "block";
		d.style.display = "none";
		u.style.display = "inline";
	}
}