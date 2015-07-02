// Sidebar opening and closing

var leftarrow = document.getElementById("leftarrow");
var rightarrow = document.getElementById("rightarrow");
var sidebar = document.getElementById("sidebar");
var sidebarlist = document.getElementById("sidebarlist");


// On click of left arrow
leftarrow.addEventListener("click", function(){
// Show list by removing notvisible class
	sidebarlist.removeAttribute("class");
// Change position of white sidebar tab
	sidebar.removeAttribute("class");
	sidebar.setAttribute("class", "open");
// While sidebar is open, on click of right arrow
	rightarrow.addEventListener("click", function(){
// Set notvisible class to remove from view
		sidebarlist.setAttribute("class", "notvisible");
// Move sidebar tab to original position
		sidebar.removeAttribute("class");
		sidebar.setAttribute("class", "closed");
	});
});

// JSON loading

$(function(){

	$.ajax({
		type: 'GET',
		url: 'js/content.json',
		success: function(data) {
			console.log('success', data);
		}
	});





})
























