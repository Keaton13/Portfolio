$(function() {

	$("#contactForm").validator().on("submit", function (event) {
  	if (event.isDefaultPrevented()) {
        // handle the invalid form...
    	formError();
      submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
	});

	function submitForm(){
  	// Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
    	type: "POST",
      url: "php/mail_handler.php",
      data: "name=" + name + "&email=" + email + "&message=" + message,
      success : function(text){
    	    debugger;
    	    console.log(text);
      	if (text !== undefined){
      	    formSuccess();
        } else {
          formError();
        }
      }
    });
	}

	function formSuccess(){
  	$("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!");
	}
	function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

	function submitMSG(valid, msg){
		var msgClasses;
  	if(valid){
    	msgClasses = "h3 text-center text-success";
    } else {
      msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
});
