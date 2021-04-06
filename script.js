function ChoseRandomPlayer()
{
let randomPlayer = Math.floor(Math.random() * (3450 - 1) + 1);
const url = "https://www.balldontlie.io/api/v1/players/" + randomPlayer;
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let results = "";
   results += '<h2>Player name: ' + json.first_name + " " + json.last_name + "</h2>";
   results += '<h2>Player height: ' + json.height_feet + " ft " + json.height_inches + " in" + "</h2>";
   results += '<h2>Player weight: ' + json.weight_pounds + " lbs" + "</h2>";
   let playerTeam = json.team.id
   document.getElementById("player_info").innerHTML = results;
   console.log(json);
 const url2 = "https://www.balldontlie.io/api/v1/teams/" + playerTeam;
 fetch(url2)
 .then(function(response) {
   return response.json();
 }).then(function(json) {
   let results = "";
   results += '<h2>Plays for ' + json.abbreviation + "</h2>";
   results += '<h2>Full team name: ' + json.full_name + "</h2>";
   results += '<h2>' + json.conference + " Conference " + json.division + " Division" + "</h2>"

   document.getElementById("team_info").innerHTML = results;
   console.log(json);
 });
});

   const url3 = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${randomPlayer}`;
   fetch(url3)
   .then(function(response) {
     return response.json();
   }).then(function(json) {
     let results = "";
     results += '<h2>' + json.data[0].season + "Player Season Averages" + "</h2>"
     results += '<h2>' +  "Total Games played: " + json.data[0].games_played + "</h2>"
     results += '<h2>' +  "Minutes: " + json.data[0].min + "</h2>"
     results += '<h2>' +  "Points: " + json.data[0].pts + "</h2>"
     results += '<h2>' +  "Assists: " + json.data[0].ast + "</h2>"
     results += '<h2>' +  "Blocks: " + json.data[0].blk + "</h2>"
     results += '<h2>' +  "Rebounds: " + json.data[0].reb + "</h2>"
     results += '<h2>' +  "Pesonal Fouls: " + json.data[0].pf + "</h2>"
     results += '<h2>' +  "Turnovers: " + json.data[0].turnover + "</h2>"

     document.getElementById("season_averages").innerHTML = results;
     console.log(json);
  });
}
