$(document).ready(function() {

var interval = setInterval(count, 1000);
	var x = 31;

	function count() {
    // document.getElementById("countdownDOM").innerHTML = --i;
    	x--;
    	// console.log(x);
    	$('#countdownDOM').html("Time Remaining: " + x + " seconds");
	    if (x === 0){
	        clearInterval(interval);
	        window.location='results.html';

	       // check for correct answers
	       // hide questions
	       // show results


	    }
		
	}
});

//Enter total number of questions:
var totalquestions=5

//Enter the solutions corresponding to each question:
var correctchoices=new Array()
correctchoices[1]='b' //question 1 solution
correctchoices[2]='d' //question 2 solution, and so on.
correctchoices[3]='c'
correctchoices[4]='c'
correctchoices[5]='c'




function gradeit(){
var incorrect=null
for (i=1;i<=totalquestions;i++){
	var thequestion=eval("document.myquiz.question"+q)
	for (c=0;c<thequestion.length;c++){
		if (thequestion[c].checked==true)
		actualchoices[q]=thequestion[c].value
		}
		
	if (actualchoices[q]!=correctchoices[q]){ //process an incorrect choice
		if (incorrect==null)
		incorrect=q
		else
		incorrect+="/"+q
		}
	}

if (incorrect==null)
incorrect="a/b"
document.cookie='q='+incorrect
if (document.cookie=='')
alert("Your browser does not accept cookies. Please adjust your browser settings.")
else
window.location="results.htm"
}


function showsolution(){
var win2=window.open("","win2","width=200,height=350, scrollbars")
win2.focus()
win2.document.open()
win2.document.write('<title>Solution</title>')
win2.document.write('<body bgcolor="#FFFFFF">')
win2.document.write('<center><h3>Solution to Quiz</h3></center>')
win2.document.write('<center><font face="Arial">')
for (i=1;i<=totalquestions;i++){
for (temp=0;temp<incorrect.length;temp++){
if (i==incorrect[temp])
wrong=1
}
if (wrong==1){
win2.document.write("Question "+i+"="+correctchoices[i].fontcolor("red")+"<br>")
wrong=0
}
else
win2.document.write("Question "+i+"="+correctchoices[i]+"<br>")
}
win2.document.write('</center></font>')
win2.document.write("<h5>Note: The solutions in red are the ones to the questions you had incorrectly answered.</h5><p align='center'><small><a href='http://www.javascriptkit.com' target='_new'>JavaScript Kit quiz script</a></small>")
win2.document.close()
}



// $(document).ready(function()) {

// var timeLeft = 30;
// var elem = $("output");

// var timerId = setInterval(countdown, 1000);

// function countdown() {
//   if (timeLeft == 0) {
//     clearTimeout(timerId);
//     doSomething();
//   } else {
//     elem.innerHTML = timeLeft + ' seconds remaining';
//     timeLeft--;
//   }
// }

// }

// var pageTimer = $("output");



// function timer () {
// 	pageTimer.innerHTML()

// }


// setInterval(timer, 1000);

// console.time("BigLoop");
// 	for (var i = 30; i >=0 ; i--) {
// 	}
// console.timeEnd("BigLoop");









