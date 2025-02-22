const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("Please provide a number as an argument.");
    process.exit(1);
}
const number = parseInt(args[0], 10);
if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
    process.exit(1);
}
if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}
