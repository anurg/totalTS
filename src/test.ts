const lotteryTicket = new Promise((resolve, reject) => {
    const isWinner = Math.random() > 0.5; // Randomly determine if it's a win.

    if (isWinner) {
        resolve("You win!");
    } else {
        reject("You lose!");
    }
});
// ### Consume Promise
lotteryTicket
    .then(result => {
        console.log(result); // If fulfilled
    })
    .catch(error => {
        console.error(error); // If rejected
    });

const request = fetch("https://restcountries.eu/rest/v2/name/portugal")