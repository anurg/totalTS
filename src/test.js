var lotteryTicket = new Promise(function (resolve, reject) {
    var isWinner = Math.random() > 0.5; // Randomly determine if it's a win.
    if (isWinner) {
        resolve("You win!");
    }
    else {
        reject("You lose!");
    }
});
// ### Consume Promise
lotteryTicket
    .then(function (result) {
    console.log(result); // If fulfilled
})
    .catch(function (error) {
    console.error(error); // If rejected
});
