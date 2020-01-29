$(document).ready(function () {
	$("body").hide();
	$("body").fadeIn(1500);

	var i = 0;
//2.1Special Link
	let $sp = $("<li><a>Special</a></li>");
	$sp.addClass("nav-item");
	$sp.find("a").addClass("nav-link");
	$sp.find("a").attr({"href":"#"});
	$("#nav").append($sp);

//6 Bonus
	$("#task4").click(function () {
	    alert("Do you like my homepage? If you like my homepage, I belive that you would like to have your own personal homepage like me! Therefore, you are now given a chance to change 1) the headers(name and department) of the homepage and 2) source of the profile picture.");
	    var a = prompt("What is your name?");
	    var b = prompt("What is your affiliation (department)?");
	    var c = prompt("Enter the source of your picture(e.g. XXX.jpg)", "");
	    $("h1").html(a);
	    $("h3").html(b);
	        $("#me").attr("src", c);
	});




//4 Task 2 New hobby
	$("#task2").click(function () {
	    var t = prompt("Can you guess my favourite hobby?", "");
	    alert(t);
	    let $new = $("<div></div>");
	    $new.addClass("m-4 p-3 bg-light");
	    $new.html(t);
	    $("#hobby").append($new);
	});

//5 Task 3 scroll
	$("#task3").click(function () {
	    $("#scroll").toggle();
	});
	$(window).scroll(function () {
	    var w = (($(window).scrollTop()) / ($(document).height() - $(window).height()) * 100);
	    $("#progress").css("width", w + "%");
	});



//3 Task 1 
	$("#task1").click(function () {
	    if (i == 3)
	        i = 0;

	    if (i == 0) {
	        $("h2").css("text-align", "right");
	        i++;
	        return;
	    }

	    if(i==1)
	    {
	        $("h2").css("text-align", "center");
	        i++;
	        return;
	    }

	    if (i == 2)
	    {
	        $("h2").css("text-align", "left")
	        i++;
	        return;
	    }
	});

//2.2 Show/hide Additioal bar
	$sp.click(function () {
	    $("#bar").toggle();
	});
});


