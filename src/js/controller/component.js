//course panel collapse
$(document).on('click', '.panel-heading', function(e){
    console.log("is clicked");
    var $this = $(this);
    var span = $this.find('span');
    var id = $this.attr("id");
	if(!span.hasClass('panel-collapsed')) {
		span.parents('.panel').find('.panel-body[id=\''+id+'\']').slideUp();
		span.addClass('panel-collapsed');
		span.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	} else {
		span.parents('.panel').find('.panel-body[id=\''+id+'\']').slideDown();
		span.removeClass('panel-collapsed');
		span.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	}
});

/* Change color after enrollment*/
$(document).on('click', '.enroll-button', function(e){
	//change color to success
	var panel = $("#"+$(this).attr("id")+".course.panel");
	var oldClass = panel.attr("class");
	var newClass = oldClass.split(" ");
	newClass[2] = "panel-success";
	newClass = newClass.join(" ");
	panel.attr("class", newClass);
});
$(document).on('click', '.drop-button', function(e){
	//change color to default
	var panel = $("#"+$(this).attr("id")+".course.panel");
	var oldClass = panel.attr("class");
	var newClass = oldClass.split(" ");
	newClass[2] = "panel-default";
	newClass = newClass.join(" ");
	panel.attr("class", newClass);
});

$(document).on('click', '.logout-button', function(e){
	console.log("is clicked");
	$('body').fadeOut('slow', function() {
		console.log("fade out");
		location.reload();
	});
});



/*Update time*/
// function updateTime() {
// 	var dt = new Date();
// 	var now = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
// 	jQuery('.time').html(now.toString());  
// }
// setInterval(updateTime, 1000);