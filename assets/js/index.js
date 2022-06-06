// JS for my personal portfolio

//create a pop up number display
function openForm() {
  const call = document.getElementById('call')
  call.innerHTML = "0701 850 860";
}

//sending an email when clicked
function sendEmail() {
  var link = "mailto:bwanjalah@gmail.com"
           + "?cc=ravvytek@gmail.com"
           + "&subject=" + encodeURIComponent("Greetings")
           + "&body=" + encodeURIComponent ("Hello, I'm interested with your portfolio") // (document.getElementById('myText').value)
  ;
  
  window.location.href = link;
}

function funMail() {
  var link = "mailto:bwanjalah@gmail.com"
           + "?cc=ravvytek@gmail.com"
           + "&subject=" + encodeURIComponent("Greetings")
           + "&body=" + encodeURIComponent ("Hello, may I join your fun games?") // (document.getElementById('myText').value)
  ;
  
  window.location.href = link;
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




// function openForm () {
//   const calling = document.getElementById("call");
//   function clickAlert() {
//     window.alert("Call 0701850860")

//   }
//   calling.addEventListener("click", clickAlert);
// }
// openForm();
