function card() {
  document.getElementById("myCard").style = "background-color: rgb(168, 75, 168); border-radius: 32px; color: white;"
  document.getElementById("myProduct").style ="background-color: white; color: black";
  document.getElementById("myBook").style ="background-color: white; color: black";
  document.getElementById("myP1").style.display = "inline-block";
  document.getElementById("myP2").style.display = "inline-block";
  document.getElementById("myP3").style.display = "inline-block";
  document.getElementById("myP4").style.display = "inline-block";
  document.getElementById("myP5").style.display = "inline-block";
  document.getElementById("myP6").style.display = "inline-block";
  document.getElementById("myP7").style.display = "inline-block";
  document.getElementById("myP8").style.display = "inline-block";
  document.getElementById("myP9").style.display = "inline-block";
  document.getElementById("myP10").style.display = "none";
  document.getElementById("myP11").style.display = "none";
  document.getElementById("myP12").style.display = "none";
  document.getElementById("myP13").style.display = "none";
  document.getElementById("myP14").style.display = "none";
  document.getElementById("myP15").style.display = "none";
  document.getElementById("myP16").style.display = "none";
  document.getElementById("myP17").style.display = "none";
  document.getElementById("myP18").style.display = "none";
  
 /* document.getElementById("re1").style.display = "block";
  document.getElementById("myP1").style="margin-top: 0px;"
  document.getElementById("myP2").style="margin-top: 0px;"
  document.getElementById("myP3").style="margin-top: 0px;" */


}
function book() {
  document.getElementById("myBook").style = "background-color: rgb(168, 75, 168); border-radius: 32px; color: white;"
  document.getElementById("myProduct").style ="background-color: white; color: black";
  document.getElementById("myCard").style ="background-color: white; color: black";
  document.getElementById("myP1").style.display = "none";
  document.getElementById("myP2").style.display = "none";
  document.getElementById("myP3").style.display = "none";
  document.getElementById("myP4").style.display = "none";
  document.getElementById("myP5").style.display = "none";
  document.getElementById("myP6").style.display = "none";
  document.getElementById("myP7").style.display = "none";
  document.getElementById("myP8").style.display = "none";
  document.getElementById("myP9").style.display = "none";
  document.getElementById("myP10").style.display = "inline-block";
  document.getElementById("myP11").style.display = "inline-block";
  document.getElementById("myP12").style.display = "inline-block";
  document.getElementById("myP13").style.display = "inline-block";
  document.getElementById("myP14").style.display = "inline-block";
  document.getElementById("myP15").style.display = "inline-block";
  document.getElementById("myP16").style.display = "inline-block";
  document.getElementById("myP17").style.display = "inline-block";
  document.getElementById("myP18").style.display = "inline-block";
 
}
function product() {
  document.getElementById("myProduct").style = "background-color: rgb(168, 75, 168); border-radius: 32px; color: white;"
  document.getElementById("myCard").style ="background-color: white; color: black";
  document.getElementById("myBook").style ="background-color: white; color: black";
  document.getElementById("myP1").style.display = "inline-block";
  document.getElementById("myP2").style.display = "inline-block";
  document.getElementById("myP3").style.display = "inline-block";
  document.getElementById("myP4").style.display = "inline-block";
  document.getElementById("myP5").style.display = "inline-block";
  document.getElementById("myP6").style.display = "inline-block";
  document.getElementById("myP7").style.display = "inline-block";
  document.getElementById("myP8").style.display = "inline-block";
  document.getElementById("myP9").style.display = "inline-block";
  document.getElementById("myP10").style.display = "inline-block";
  document.getElementById("myP11").style.display = "inline-block";
  document.getElementById("myP12").style.display = "inline-block";
  document.getElementById("myP13").style.display = "inline-block";
  document.getElementById("myP14").style.display = "inline-block";
  document.getElementById("myP15").style.display = "inline-block";
  document.getElementById("myP16").style.display = "inline-block";
  document.getElementById("myP17").style.display = "inline-block";
  document.getElementById("myP18").style.display = "inline-block";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


function myFunction1() {
 document.getElementById("myP1").style="margin-top: 500px;"
  document.getElementById("myP2").style="margin-top: 500px;"
  document.getElementById("myP3").style="margin-top: 500px;"
 document.getElementById("re1").style.display = "block";
  document.getElementById("re1").style="margin-top: -3800px; margin-left: 150px;"
  document.getElementById("re2").style.display = "none";
  document.getElementById("re3").style.display = "none";
  document.getElementById("re4").style.display = "none";
  document.getElementById("re5").style.display = "none";
  document.getElementById("re6").style.display = "none";
  document.getElementById("re7").style.display = "none";
  document.getElementById("re8").style.display = "none";
  document.getElementById("re9").style.display = "none";
}


function myFunction2() {
 document.getElementById("re1").style.display = "none";
 document.getElementById("re3").style.display = "none";
  document.getElementById("myP1").style="margin-top: 500px;"
   document.getElementById("myP2").style="margin-top: 500px;"
   document.getElementById("myP3").style="margin-top: 500px;"
  document.getElementById("re2").style.display = "block";
   document.getElementById("re2").style="margin-top: -3800px; margin-left: 150px;"
   document.getElementById("re4").style.display = "none";
   document.getElementById("re5").style.display = "none";
   document.getElementById("re5").style.display = "none";
   document.getElementById("re7").style.display = "none";
   document.getElementById("re8").style.display = "none";
   document.getElementById("re9").style.display = "none";
 }

 function myFunction3() {
  document.getElementById("re1").style.display = "none";
  document.getElementById("re5").style.display = "none";
  document.getElementById("re2").style.display = "none";
  document.getElementById("re4").style.display = "none";
  document.getElementById("myP1").style="margin-top: 500px;"
   document.getElementById("myP2").style="margin-top: 500px;"
   document.getElementById("myP3").style="margin-top: 500px;"
  document.getElementById("re3").style.display = "block";
   document.getElementById("re3").style="margin-top: -3800px; margin-left: 150px;"
   document.getElementById("re6").style.display = "none";
   document.getElementById("re7").style.display = "none";
   document.getElementById("re8").style.display = "none";
   document.getElementById("re9").style.display = "none";
 }

 function myFunction4() {
  document.getElementById("re1").style.display = "none";
  document.getElementById("re2").style.display = "none";
  document.getElementById("re3").style.display = "none";
  document.getElementById("re5").style.display = "none";
  document.getElementById("myP1").style="margin-top: 500px;"
   document.getElementById("myP2").style="margin-top: 500px;"
   document.getElementById("myP3").style="margin-top: 500px;"
  document.getElementById("re4").style.display = "block";
   document.getElementById("re4").style="margin-top: -3800px; margin-left: 150px;"
   document.getElementById("re6").style.display = "none";
   document.getElementById("re7").style.display = "none";
   document.getElementById("re8").style.display = "none";
   document.getElementById("re9").style.display = "none";
 }

 function myFunction5() {
  document.getElementById("re1").style.display = "none";
  document.getElementById("re2").style.display = "none";
  document.getElementById("re3").style.display = "none";
  document.getElementById("re4").style.display = "none";
  document.getElementById("myP1").style="margin-top: 500px;"
   document.getElementById("myP2").style="margin-top: 500px;"
   document.getElementById("myP3").style="margin-top: 500px;"
  document.getElementById("re5").style.display = "block";
   document.getElementById("re5").style="margin-top: -3800px; margin-left: 150px;"
   document.getElementById("re6").style.display = "none";
   document.getElementById("re8").style.display = "none";
   document.getElementById("re9").style.display = "none";
 }

 function myFunction6() {
  document.getElementById("re1").style.display = "none";
  document.getElementById("re2").style.display = "none";
  document.getElementById("re3").style.display = "none";
  document.getElementById("re4").style.display = "none";
  document.getElementById("re5").style.display = "none";
  document.getElementById("myP1").style="margin-top: 500px;"
   document.getElementById("myP2").style="margin-top: 500px;"
   document.getElementById("myP3").style="margin-top: 500px;"
  document.getElementById("re6").style.display = "block";
   document.getElementById("re6").style="margin-top: -3800px; margin-left: 150px;"
   document.getElementById("re7").style.display = "none";
   document.getElementById("re8").style.display = "none";
   document.getElementById("re9").style.display = "none";
 }

 
 function myFunction7() {
  document.getElementById("re1").style.display = "none";
  document.getElementById("re2").style.display = "none";
  document.getElementById("re3").style.display = "none";
  document.getElementById("re4").style.display = "none";
  document.getElementById("re5").style.display = "none";
  document.getElementById("re6").style.display = "none";
  document.getElementById("myP1").style="margin-top: 500px;"
   document.getElementById("myP2").style="margin-top: 500px;"
   document.getElementById("myP3").style="margin-top: 500px;"
  document.getElementById("re7").style.display = "block";
   document.getElementById("re7").style="margin-top: -3800px; margin-left: 150px;"
   document.getElementById("re8").style.display = "none";
   document.getElementById("re9").style.display = "none";
 }


 function myFunction8() {
  document.getElementById("re1").style.display = "none";
  document.getElementById("re2").style.display = "none";
  document.getElementById("re3").style.display = "none";
  document.getElementById("re4").style.display = "none";
  document.getElementById("re5").style.display = "none";
  document.getElementById("re6").style.display = "none";
  document.getElementById("myP1").style="margin-top: 500px;"
   document.getElementById("myP2").style="margin-top: 500px;"
   document.getElementById("myP3").style="margin-top: 500px;"
  document.getElementById("re8").style.display = "block";
   document.getElementById("re8").style="margin-top: -3800px; margin-left: 150px;"
   document.getElementById("re7").style.display = "none";
   document.getElementById("re9").style.display = "none";
 }

 function myFunction9() {
  document.getElementById("re1").style.display = "none";
  document.getElementById("re2").style.display = "none";
  document.getElementById("re3").style.display = "none";
  document.getElementById("re4").style.display = "none";
  document.getElementById("re5").style.display = "none";
  document.getElementById("re6").style.display = "none";
  document.getElementById("myP1").style="margin-top: 500px;"
   document.getElementById("myP2").style="margin-top: 500px;"
   document.getElementById("myP3").style="margin-top: 500px;"
  document.getElementById("re9").style.display = "block";
   document.getElementById("re9").style="margin-top: -3800px; margin-left: 150px;"
   document.getElementById("re7").style.display = "none";
   document.getElementById("re8").style.display = "none";
 }