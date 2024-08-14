
for (let i = 11; i < 26; i++) {
    console.log(i);
    
}
//  or
console.log("OR other methode");

function writeNumbers(num1, num2) {
    if (num1 >= num2) {
        console.log("Error: num1 should be less than num2");
        return;
    }
    
    for (let i = num1 + 1; i < num2; i++) {
        console.log(i);
    }
}

const num1 = 10;
const num2 = 26;
writeNumbers(num1, num2);


