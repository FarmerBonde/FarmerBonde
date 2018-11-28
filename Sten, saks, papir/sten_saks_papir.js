var userScore = 0;
var computerScore = 0;
var userScore = document.getElementById('user-score');
var computerScore = document.getElementById('computer-score');


var scoreBoard = document.querySelector(".score-board");
var result = document.querySelector(".result");
var rock = parseFloat (document.getElementById('r').value);
var paper = document.getElementById('p').value;
var scisors = document.getElementById('s').value;


  var sten = document.getElementById('r').getAttribute('value');
  console.log(sten);
  var saks = document.getElementById('s').getAttribute('value');
  console.log(saks);
  var papir = document.getElementById('p').getAttribute('value');
  r.onclick = function () {
    var random = Math.random()*3;
    console.log(random);
    if (random <= 0.99  ) {

      result.textContent = "Uafgjort!";
    }
    else if (random >= 1.9 ) {
    result.textContent = "Tabt!";
    computeren.textContent  ++;
  }
    else {
      result.textContent = "Vinder!";
      brugeren.textContent ++;
    }
    return;
    }

    p.onclick = function () {
      var random = Math.random()*3;
      console.log(random);
      if (random <= 0.99  ) {

        result.textContent = "Vinder!";
        brugeren.textContent ++;
      }
      else if (random >= 1.9 ) {
      result.textContent = "Uafgjort!";


    }
      else {
        result.textContent = "Tabt!";
        computeren.textContent ++;
      }
      return;
      }


      s.onclick = function () {
        var random = Math.random()*3;
        console.log(random);
        if (random <= 0.99  ) {

          result.textContent = "Tabt!";
          computeren.textContent ++;
        }
        else if (random >= 1.9 ) {
        result.textContent = "Vinder!";
        brugeren.textContent ++;
      }
        else {
          result.textContent = "Uafgjort!";

        }
        return;
        }
