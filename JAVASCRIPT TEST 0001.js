
const n = 5;


for (let i = 1; i <= n; i++) {

   
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ");
    }

   
    process.stdout.write("*");

    
    if (i > 1) {
        for (let j = 1; j <= (2 * i - 3); j++) {
            process.stdout.write(" ");
        }
        process.stdout.write("*");
    }

    console.log();
}


for (let i = n - 1; i >= 1; i--) {

    
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ");
    }

    
    process.stdout.write("*");

   
    if (i > 1) {
        for (let j = 1; j <= (2 * i - 3); j++) {
            process.stdout.write(" ");
        }
        process.stdout.write("*");
    }

    console.log();
}