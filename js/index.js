// add an event listener to the form to submit Dave's message

document.getElementById('chatForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var message = document.getElementById('chatInput').value;

  document.getElementById('dave').innerHTML += message + "<br/>";

  respondToMessage(message);
});

var userName = prompt("Please tell me your Name", "");


// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

var isItSafe = ["You're talking to me?", "Is what safe?", "I don't know what you mean. I can't tell you if something's safe or not, unless I know specifically what you're talking about", "tell me what it refers to.", "Yes, it's safe, it's very safe, it's so safe you wouldn't believe it.", "No. It's not safe, it's... very dangerous, be careful." , " Please stop. Please, stop." ]

var message = document.getElementById('chatInput').value;

var firstNames = ["Joanna" ,"Kaitlyn", "Myriam", "Josh", "Ejaz", "Bernardo"];
var lastNames = ["Smith", "Smythe", "Smithee", "Smorth", "Smyth", "Simith"];


function respondToMessage(message) {
	var classList = [];
	var i; 
	for(i =0; i <6; i ++) {
	classList.push(firstNames[i] + " " + lastNames[i]);
	}
		
	

let answer = ( {
	
	"Open the pod bay doors please, HAL": "I'm sorry " + userName + ", I can't do that. <br/>",
	"Who is that damn good?": ("Why that would be " + userName +" of course! <br/>"),
	//Psueodocode, I can't get thsi to work, 
	//"Is it Safe?": document...isItSafe[j], j++
	//ideally, it would return the jth elemento f isItSafe, then increment j by 1
	//However, it isn't doing that. I want there to be a number of answers it could provide,
	//but each one only once, except the last. Not sure, Maybe use an if statement inside of this,
	//but I'm not sure the syntax
	"Who is in the Dirty Dozen": "The Dirty Dozen includes " + classList[(Math.floor(Math.random() * 6))] + " amongst others <br/>",
	
	
} )[message] || ("I'm sorry " + userName + ", I didn't understand you. <br/>");
	
document.getElementById('hal').innerHTML += answer;


	
	
};






// create a function for HAL to open the chat with "Good morning, Dave"

// invoke the opening message