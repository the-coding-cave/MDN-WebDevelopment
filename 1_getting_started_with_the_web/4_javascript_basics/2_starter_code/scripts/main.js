
// var myHeading = document.querySelector('h1');
// myHeading.textContent = "Hello world!";

/* First we grabbed a reference to the heading (the h1) using a built in function called querySelector().
   Secondly, we stored this reference in a variable called myHeading.
   
   Lastly, we set the value of the myHeading variable's textContent property (which represents the content 
   of the heading) to "Hello world!"*/



   var myImage = document.querySelector('img');

   myImage.onclick = function() {
     var mySrc = myImage.getAttribute('src');
     if(mySrc === 'images/firefox-icon.png') {
       myImage.setAttribute ('src','images/firefox2.png');
     } else {
       myImage.setAttribute ('src','images/firefox-icon.png');
     }
   }
   
 
   
   var myButton = document.querySelector('button');
   var myHeading = document.querySelector('h1');
   
   function setUserName() {
     var myName = prompt('Please enter your name.');
     localStorage.setItem('name', myName);
     myHeading.innerHTML = 'Mozilla is cool, ' + myName;
   
   
   if(!localStorage.getItem('name')) {
     setUserName();
   } else {
     var storedName = localStorage.getItem('name');
     myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
   }

}
   
   myButton.onclick = function() {
     setUserName();
   }

   //    https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
//    https://alligator.io/js/introduction-localstorage-sessionstorage/