"use strict";

window.towerOfHanoi = {
	init: function () {


		var disc;

		//click on tower, selects top disc
		$(".tower").click(function (e) {

			
			// console.log("topDisc", topDisc)
			// //click on another tower to move topDisc to this tower
			// console.log("this on line 33",this)
			

			// check if tower contains other pieces
			if($(".selected").length) {
				
				console.log("this line 21", this)
				// compare to other pieces
				// if the data-position of first disc is greater than

				//get data-position value of disc inside 'this'
				var discInSecondClickedTower = $(this).find(".disc");
				console.log("discInSecondClickedTower",discInSecondClickedTower);

				

				if($(this).find(".disc").length === 0){
					$(this).prepend(disc);
					//remove .selected from disc
					$(disc).removeClass("selected");
				} 

				
			} else {

				disc = $(this).find(".disc").first(); 
				$(disc).addClass('selected');
			}
			
		}) 

	}
}

window.towerOfHanoi.init();

			// if(selectedItem.attr("data-position") === "top"){
			// 	//allow to move
			// 	console.log(selectedItem.attr("data-position"));
			// 	selectedItem.addClass("selected");
			// 	moveDisc(selectedItem)
				
			// } else {
			// 	//do not allow to move
			// 	console.log(false)
			// }


				// function (e) {

				// 	$(this).click(function (e) {

				// 		if($(this).attr("data-position") === "top"){
				// 			console.log($(this).attr("data-position"));
							
				// 		} else {
				// 			console.log(false)
				// 		}

				// 	})
				// }
// if($(".tower3 div").length === 3){
// 	//you won!
// }

//.eq


			// $(this).click(function (e) {
			//can only select a disc when hovering over
			//can't have more than 1 disc selected
			// if(selectedItem.hasClass("selected")) {
				
			// 	selectedItem.removeClass("selected");
				
			// } 
			// else {
			// 	selectedItem.addClass("selected")
			// 	console.log("else!")
			// }