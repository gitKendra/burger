// JS file to handle button onclicks from webpage
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function(){
	$(".devour-burger").on("click", function(event){
		// Set id
		var id = $(this).data("id");
		console.log(id);
		// Send the PUT request
		$.ajax("/api/burgers/"+id, {
			type: "PUT",
			data: id
		}).then(function(){
			console.log("Move burger to devoured");
	//		location.reload();
		})
	});

});