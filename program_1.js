var args = process.argv,
    sum = 0;

for (var ix = 2; ix < args.length; ix += 1) {
    sum += Number(args[ix]);
}

console.log(sum);