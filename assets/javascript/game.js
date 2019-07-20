$(document).ready(function () {

    // generate random number between 19 and 120
    // var random = generateRandomNumber(19, 120);


    // declaring some variables
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;


    //assign a hidden random value to each crystal between 1 and 12

    // var blue = generateRandomNumber(1, 12)
    // var green = generateRandomNumber(1, 12)
    // var red = generateRandomNumber(1, 12)
    // var yellow = generateRandomNumber(1, 12)
    var random
    var blue
    var green
    var red
    var yellow
    $('#randomNumber').text(random);
    resetGame()

    $("#blue").attr("data-value", blue);
    $("#green").attr("data-value", green);
    $("#red").attr("data-value", red);
    $("#yellow").attr("data-value", yellow);

    $("img").on("click", function () {
        var value = $(this).data("value");
        console.log(value);
        playerTotal += value;
        $("#finalTotal").text(playerTotal);

        if (random === playerTotal) {
            // wins++
            // $("#wins").text(wins);
            resetGame("win")
        } else if (playerTotal > random) {
            // losses++
            // $("#losses").text(losses);
            resetGame("loss")
        }
    })

    function resetGame(result) {
        if (result === "win") {
            wins++
            $("#wins").text(wins);
        } else if (result === "loss") {
            losses++
            $("#losses").text(losses);
        }
        random = generateRandomNumber(19, 120)
        blue = generateRandomNumber(1, 12)
        green = generateRandomNumber(1, 12)
        red = generateRandomNumber(1, 12)
        yellow = generateRandomNumber(1, 12)
        playerTotal = 0
        $('#randomNumber').text(random);
        $("#finalTotal").text(playerTotal);
    }

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
}); 
