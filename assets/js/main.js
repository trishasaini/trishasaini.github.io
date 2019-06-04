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
}
window.onload=function(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       
       parsedJson = JSON.parse(xhttp.responseText);
       document.getElementById("live-score1").innerHTML = `
       <h1 class="league_name">${parsedJson[0].league_name}</h1>
       <div class="block_container">
       <h3 class="left_align">Time: ${parsedJson[0].match_time}</h3>
       <h3 class="right_align">Date: ${parsedJson[0].match_date}</h3>
      </div>
      
       <div class="block_container">
        <h2 class="home_team_score left_align">${parsedJson[0].match_hometeam_name}: ${parsedJson[0].match_hometeam_score}</h2>
        <h2 class="away_team_score right_align">${parsedJson[0].match_awayteam_name}: ${parsedJson[0].match_awayteam_score}</h2>
       </div>
       <br>
       <div class="block_container" style="text-align:center;"
       style="float:center;">
       <h3>Minute: ${parsedJson[0].match_live}</h3>
       <h3>Status: ${parsedJson[0].match_status}</h3>
       </div>
       `;
       
       document.getElementById("live-score2").innerHTML = `
       <h1 class="league_name">${parsedJson[1].league_name}</h1>
       <div class="block_container">
       <h3 class="left_align">Time: ${parsedJson[1].match_time}</h3>
       <h3 class="right_align">Date: ${parsedJson[1].match_date}</h3>
      </div>
      
       <div class="block_container">
        <h2 class="home_team_score left_align">${parsedJson[1].match_hometeam_name}: ${parsedJson[1].match_hometeam_score}</h2>
        <h2 class="away_team_score right_align">${parsedJson[1].match_awayteam_name}: ${parsedJson[1].match_awayteam_score}</h2>
       </div>
       <br>
       <div class="block_container" style="text-align:center;"
       style="float:center;">
       <h3>Minute: ${parsedJson[1].match_live}</h3>
       <h3>Status: ${parsedJson[1].match_status}</h3>
       </div>
       `;
       document.getElementById("live-score3").innerHTML = `
       <h1 class="league_name">${parsedJson[2].league_name}</h1>
       <div class="block_container">
       <h3 class="left_align">Time: ${parsedJson[2].match_time}</h3>
       <h3 class="right_align">Date: ${parsedJson[2].match_date}</h3>
      </div>
      
       <div class="block_container">
        <h2 class="home_team_score left_align">${parsedJson[2].match_hometeam_name}: ${parsedJson[2].match_hometeam_score}</h2>
        <h2 class="away_team_score right_align">${parsedJson[2].match_awayteam_name}: ${parsedJson[2].match_awayteam_score}</h2>
       </div>
       <br>
       <div class="block_container" style="text-align:center;"
       style="float:center;">
       <h3>Minute: ${parsedJson[2].match_live}</h3>
       <h3>Status: ${parsedJson[2].match_status}</h3>
       </div>
       `;
       
    }
   
};
xhttp.open("GET", "https://apifootball.com/api/?action=get_events&from=2016-10-30&to=2016-11-01&league_id=62&APIkey=f9649601a5feaeed4d337a4dd8eb1f66340c50e22d1e7f1434fe073a7d80fb5d", true);
xhttp.send();
}