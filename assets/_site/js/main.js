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

window.onload = function () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:

      parsedJson = JSON.parse(xhttp.responseText);
      document.getElementById("live-score1").innerHTML = `
      <div class="card default">
      <div class="card-body">
       <div class="block_container">
       <h5 class="left_align default">Time: ${parsedJson[0].match_time}</h5>
       <h5 class="right_align default">Date: ${parsedJson[0].match_date}</h5>
      </div>
      <div>
        <div class="t">
          <div class="tr">
            <div class= "tc center half pr">
            <img class="club-logo" src="assets/img/${parsedJson[0].match_hometeam_name}.png" alt="${parsedJson[0].match_hometeam_name}">
            <h2>${parsedJson[0].match_hometeam_name}: ${parsedJson[0].match_hometeam_score}</h2>
            </div>
            <div class= "tc center half pl">
            <img class="club-logo" src="assets/img/${parsedJson[0].match_awayteam_name}.png" alt="${parsedJson[0].match_awayteam_name}">
            <h2> ${parsedJson[0].match_awayteam_score} : ${parsedJson[0].match_awayteam_name}</h2>
            </div>
          </div>
        </div>
        </div>
    
      

       <div class="block_container" style="text-align:center;">
       <h5 style="margin-bottom:0" class="default">Minute: ${parsedJson[0].match_live}</h5>
       <h5 class="default">Status: ${parsedJson[0].match_status}</h5>
       </div>
       </div>
       </div>
       `;

      document.getElementById("live-score2").innerHTML = `
       <div class="card default">
       <div class="card-body">
       <div class="block_container">
       <h5 class="left_align default">Time: ${parsedJson[1].match_time}</h5>
       <h5 class="right_align default">Date: ${parsedJson[1].match_date}</h5>
      </div>
      <div>
        <div class="t">
          <div class="tr">
            <div class= "tc center half pr">
            <img class="club-logo" src="assets/img/${parsedJson[1].match_hometeam_name}.png" alt="${parsedJson[1].match_hometeam_name}">
            <h2>${parsedJson[1].match_hometeam_name}: ${parsedJson[1].match_hometeam_score}</h2>
            </div>
            <div class= "tc center half pl">
            <img class="club-logo" src="assets/img/${parsedJson[1].match_awayteam_name}.png" alt="${parsedJson[1].match_awayteam_name}">
            <h2> ${parsedJson[1].match_awayteam_score} : ${parsedJson[1].match_awayteam_name}</h2>
            </div>
          </div>
        </div>
        </div>
     
      
       <div class="block_container" style="text-align:center;">
       <h5  class="default" style="margin-bottom:0"">Minute: ${parsedJson[1].match_live}</h5>
       <h5 class="default">Status: ${parsedJson[1].match_status}</h5>
       </div>
       </div>
       </div>
       `;
      document.getElementById("live-score3").innerHTML = `
      <div class="card default">
      <div class="card-body">
       <div class="block_container">
       <h5 class="left_align default">Time: ${parsedJson[2].match_time}</h5>
       <h5 class="right_align default">Date: ${parsedJson[2].match_date}</h5>
      </div>
      <div>
        <div class="t">
          <div class="tr">
            <div class= "tc center half pr">
            <img class="club-logo" src="assets/img/${parsedJson[2].match_hometeam_name}.png" alt="${parsedJson[2].match_hometeam_name}">
            <h2>${parsedJson[2].match_hometeam_name}: ${parsedJson[2].match_hometeam_score}</h2>
            </div>
            <div class= "tc center half pl">
            <img class="club-logo" src="assets/img/${parsedJson[2].match_awayteam_name}.png" alt="${parsedJson[2].match_awayteam_name}">
            <h2> ${parsedJson[2].match_awayteam_score} : ${parsedJson[2].match_awayteam_name}</h2>
            </div>
          </div>
        </div>
        </div>
    
      
       <div class="block_container" style="text-align:center;"
       style="float:center;">
            
       <h5  class="default" style="margin-bottom:0">Minute: ${parsedJson[2].match_live}</h5>
       <h5 class="default">Status: ${parsedJson[2].match_status}</h5>
       </div> 
       </div>
       </div>
       `;

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