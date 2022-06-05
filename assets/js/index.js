// JS for my personal portfolio

//create a pop up number display
function openForm() {
  const call = document.getElementById('call')
  call.innerHTML = "0701 850 860";
}


// function sendEmail() {
//   Email.send({
//       SecureToken: "security token of your smtp",
//       To: "ravvytek@gmail.com",
//       From: "bwanjalah@gmail.com",
//       Subject: "Greetings",
//       Body: document.getElementById('text').value
//   }).then( 
//       message => alert("mail sent successfully")
//   );
// }


function sendEmail() {
  var link = "mailto:bwanjala@gmail.com"
           + "?cc=ravvytek@gmail.com"
           + "&subject=" + encodeURIComponent("Greetings")
           + "&body=" + encodeURIComponent ("Hello, I'm interested with your portfolio") // (document.getElementById('myText').value)
  ;
  
  window.location.href = link;
}

function funMail() {
  var link = "mailto:bwanjala@gmail.com"
           + "?cc=ravvytek@gmail.com"
           + "&subject=" + encodeURIComponent("Greetings")
           + "&body=" + encodeURIComponent ("Hello, may I join your fun games?") // (document.getElementById('myText').value)
  ;
  
  window.location.href = link;
}





// function openForm () {
//   const calling = document.getElementById("call");
//   function clickAlert() {
//     window.alert("Call 0701850860")

//   }
//   calling.addEventListener("click", clickAlert);
// }
// openForm();
