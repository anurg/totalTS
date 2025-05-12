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

export const Logger = {
	log: (message: string) => {
		console.log(message);
	},
	info: (message: string) => {
		console.info(`INFO: ${message}`);
	},
	warn: (message: string) => {
		console.warn(`WARNING: ${message}`);
	},
	error: (message: string) => {
		console.error(`ERROR: ${message}`);
	},
};

export type Logger = typeof Logger;