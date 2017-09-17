// Nav Bar and SideBar 
   $(document).ready(function(){
      $(".button-collapse").sideNav();
    });

//Paralax
 $(document).ready(function(){
      $('.parallax').parallax();
    });


/*Portfolio:*/

/*to activate the carousel*/
 $(document).ready(function(){
      $('.carousel').carousel({
      	duration: 500,
      	dist: -100,
      	shift:130,
      	padding: 30,

      });
    });

//Technologies Used
 $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });


// Collecting the data from the contact form

 // Initialize Firebase
   var config = {
    apiKey: "AIzaSyD1-IFEr_l6tWjq5t1mnjcQh54eSgsGsp8",
    authDomain: "portfolio-messages.firebaseapp.com",
    databaseURL: "https://portfolio-messages.firebaseio.com",
    projectId: "portfolio-messages",
    storageBucket: "portfolio-messages.appspot.com",
    messagingSenderId: "632160301217"
  };

    firebase.initializeApp(config);

    //creating a variable to reference the database
    var database = firebase.database();

     //set html to the values from the database
    database.ref().on('value', function(snap){
      console.log(snap.val());
    });

    //this is triggered for each item in the database on load
    database.ref().on('child_added', function(snap){
      (snap.val().firstName, snap.val().lastName, snap.val().email, snap.val().message)
    });


//function to reset the form after content is submitted to the Firebase
function contactReset() {
   document.getElementById("contactForm").reset();
}
//toast function to replace the alert
// Materialize.toast(message, displayLength, className, completeCallback);
 function toast1( ){
 Materialize.toast("Thanks for reaching out! I'll be in touch soon!", 3000); // 4000 is the duration of the toast
 }

 function toast2( ){
 Materialize.toast("Hey, don't quit now. One of the fields hasn't been filled out.", 3000); // 4000 is the duration of the toast
 }


$("#submitBtn").on("click", function(e){
	e.preventDefault();



 	var firstName= document.getElementById('first_name').value;
 	var lastName= document.getElementById('last_name').value;
 	var emailaddress=document.getElementById('email').value;
 	var message= document.getElementById('textarea1').value;


 	if (!firstName || !lastName || !emailaddress || !message){
 		// alert("Hey, don't quit now. One of the fields hasn't been filled out.");
    toast2();
 	} else {
 		// alert("Thanks for reaching out! I'll be in touch soon!");
    toast1();
    contactReset();

 //pushing the form data up to firebase
        database.ref().push({
          "First Name": firstName,
          "Last Name" : lastName,
          "Email": emailaddress,
          "Message": message
        });

        
 	}
 });





