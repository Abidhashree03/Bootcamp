const args = process.argv.slice(2);
if (args.length === 0 || isNaN(args[0])) {
    console.error("Please provide a valid number.");
    process.exit(1);
}
const number = parseInt(args[0], 10);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}
