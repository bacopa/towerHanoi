$(".tower").click(clickTower)

function clickTower (e) {
	var $clickedTower = $(e.target);

	var $topDisk = $clickedTower.find(".disk").first();

	//something is selected somewhere
	//querying the dom
	//need to create class selected
	if($(".selected").length){ 

	} else {
		//lets select this thing
		//clicking again de-selects it if that div has a selected item
		//if illegal move, do nothing, or help msg, shake the box
	}

}