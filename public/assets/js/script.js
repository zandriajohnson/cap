//JavaScript will go here

      
      function popupFunction() {
        // Get the modal
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
          stopVideo();
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
            stopVideo();
          }
        }

      };


(function(){
  var config = {
    apiKey: "AIzaSyCAAZk5kcdhwsSYjDaZ15DcgjT_mfEVDnE",
    authDomain: "swingmagazinelesgetit.firebaseapp.com",
    databaseURL: "https://swingmagazinelesgetit.firebaseio.com",
    projectId: "swingmagazinelesgetit",
    storageBucket: "swingmagazinelesgetit.appspot.com",
    messagingSenderId: "406177441271"
  };
  firebase.initializeApp(config);
}());

function addSubscriber(){

  
    var subName = document.getElementById('name').value;
    var subEmail = document.getElementById('email').value;
    var subSocial = document.getElementById('social-handle').value;

    var db = firebase.database();
    var ref = db.ref();
    var subscribers = ref.child('user/subscribers');

    //push new info onto the stack
    subscribers.push({
      "name": subName,
      "email": subEmail,
      "social_handle": subSocial
    });

    if(subName != '' && subEmail != ''){
       var x = document.getElementById("snackbar");

        // Add the "show" class to DIV
        x.className = "show";

        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);


    var modal = document.getElementById('myModal');
    modal.style.display = "none";

    document.getElementById('name').value = ' ';
    document.getElementById('email').value= '';
    document.getElementById('social-handle').value= '';
    }
  

}

function sendEmail(){

    var email_body = document.getElementById('message').value;
    var email_to = "zandriaj14@gmail.com";
    var email_subject = "New Inquiry from SwingMagazine.net";

    window.open('mailto:test@example.com?subject=subject&body=body');
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-pills navbar-fixed-top") {
        x.className += " responsive";
    } else {
        x.className = "nav-pills navbar-fixed-top";
    }
}

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function stopVideo() {
  document.getElementById('videooo').pause();
 }

function closeModal() {
    document.getElementById('myModal').style.display = "none";
    var x = document.getElementById("myTopnav");
//    x.className = "nav-pills navbar-fixed-top";
            

}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
