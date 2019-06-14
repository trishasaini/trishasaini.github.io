var loader = true;


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
function html(str) {
  return str.raw[0]
}
function liveScore(parsedJson, x) { 
  return `<div class="card default">
      <div class="card-body">
       <div class="block_container">
       <h5 class="left_align default">Time: ${parsedJson[x].match_time}</h5>
       <h5 class="right_align default">Date: ${parsedJson[x].match_date}</h5>
      </div>
      <div>
        <div class="t">
          <div class="tr">
            <div class= "tc center half pr">
            <img class="club-logo" src="assets/img/${parsedJson[x].match_hometeam_name}.png" alt="${parsedJson[x].match_hometeam_name}">
            <h2>${parsedJson[x].match_hometeam_name}: ${parsedJson[x].match_hometeam_score}</h2>
            </div>
            <div class= "tc center half pl">
            <img class="club-logo" src="assets/img/${parsedJson[x].match_awayteam_name}.png" alt="${parsedJson[x].match_awayteam_name}">
            <h2> ${parsedJson[x].match_awayteam_score} : ${parsedJson[x].match_awayteam_name}</h2>
            </div>
          </div>
        </div>
        </div>
    
      

       <div class="block_container" style="text-align:center;">
       <h5 style="margin-bottom:0" class="default">Minute: ${parsedJson[x].match_live}</h5>
       <h5 class="default">Status: ${parsedJson[x].match_status}</h5>
       </div>
       </div>
       </div>
       `
    
}

window.onload = function () {
  
 
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:

      parsedJson = JSON.parse(xhttp.responseText);
      document.getElementById("live-score1").innerHTML = liveScore(parsedJson, 0);
      document.getElementById("live-score2").innerHTML = liveScore(parsedJson, 1);
      document.getElementById("live-score3").innerHTML = liveScore(parsedJson, 2);
      loader = false;
      document.getElementById("loader").setAttribute("hidden", true);
    }

  };
  xhttp.open("GET", "https://apifootball.com/api/?action=get_events&from=2016-10-30&to=2016-11-01&league_id=62&APIkey=f9649601a5feaeed4d337a4dd8eb1f66340c50e22d1e7f1434fe073a7d80fb5d", true);
  xhttp.send();

  $(document).ready(function () {
    $('input[type="checkbox"]').click(function () {
      if ($(this).prop("checked") == true) {

        $(".navbar").removeClass("default");
        $(".navbar").addClass("dark");
        $("body").removeClass("default");
        $("body").addClass("dark");
        $(".card").removeClass("default");
        $(".card").addClass("dark");
        $(".news").removeClass("default");
        $(".news").addClass("dark");
        $("h5").removeClass("default");
        $("h5").addClass("dark");

      }
      else if ($(this).prop("checked") == false) {

        $(".navbar").removeClass("dark");
        $(".navbar").addClass("default");
        $("body").removeClass("dark");
        $("body").addClass("default");
        $(".card").removeClass("dark");
        $(".card").addClass("default");
        $(".news").removeClass("dark");
        $(".news").addClass("default");
        $("h5").removeClass("dark");
        $("h5").addClass("default");

      }
    });
  }); 


}



// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
