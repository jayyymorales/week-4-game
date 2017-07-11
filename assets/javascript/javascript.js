 var userTotal = 0;
 var wins = 0;
 var losses = 0;
 var time = 16;

 $(document).ready(function() {
    // Selects a random number to be shown at the start of the game
     var Random = Math.floor(Math.random() * 81 + 19)
    // Appending random number to the randomNumber id in the html doc
     $('#computerNumber').text(Random);
    // Setting up random numbers for each jewel
     var num1 = Math.floor(Math.random() * 9 + 1)
     var num2 = Math.floor(Math.random() * 9 + 1)
     var num3 = Math.floor(Math.random() * 9 + 1)
     var num4 = Math.floor(Math.random() * 9 + 1)
    // Number chosen between 1 - 10

     //  Score variables
     $('#myWins').text(wins);
     $('#myLosses').text(losses);

     function winner() {
         wins++;
         alert("High five, you win!");
         $('#myWins').text(wins);
         reset();
     }

     function loser() {
         losses++;
         alert("You Stink!");
         $('#myLosses').text(losses);
         reset()
     }

     function reset() {
         Random = Math.floor(Math.random() * 81 + 19);
         $('#computerNumber').text(Random);
         num1 = Math.floor(Math.random() * 9 + 1);
         num2 = Math.floor(Math.random() * 9 + 1);
         num3 = Math.floor(Math.random() * 9 + 1);
         num4 = Math.floor(Math.random() * 9 + 1);
         userTotal = 0;
         time = 16;
         $('#myTotal').text(userTotal);
     }
     //crystal clicks
     $('#c1').on('click', function() {
         userTotal = userTotal + num1;
         $('#myTotal').text(userTotal);
         if (userTotal == Random) {
             winner();
         } else if (userTotal > Random) {
             loser();
         }
     })
     $('#c2').on('click', function() {
         userTotal = userTotal + num2;
         $('#myTotal').text(userTotal);
         if (userTotal == Random) {
             winner();
         } else if (userTotal > Random) {
             loser();
         }
     })
     $('#c3').on('click', function() {
         userTotal = userTotal + num3;
         $('#myTotal').text(userTotal);
         if (userTotal == Random) {
             winner();
         } else if (userTotal > Random) {
             loser();
         }
     })
     $('#c4').on('click', function() {
         userTotal = userTotal + num4;
         $('#myTotal').text(userTotal);
         if (userTotal == Random) {
             winner();
         } else if (userTotal > Random) {
             loser();
         }
     });

     function run() {
         intervalId = setInterval(decrement, 1000);
     }

     function decrement() {
         time--;
         $('#myTimer').html(time);
         if (time === 0) {
             loser();
         }
     }

     run();
 });
