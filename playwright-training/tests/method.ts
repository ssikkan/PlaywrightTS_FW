function greet() {
    console.log("Hello, welcome to Playwright training!");
}

greet();

//function with parameters
function greetuser(name: string) {
    console.log(`Hello ${name}, welcome to Playwright training!`);
}
greetuser("John");

//function with return type
function addnumbers(a: number, b: number): number {
    return a + b
}
let sum = addnumbers(5, 10);

//function with optional parameter
function multiplynumbers(a: number, b: number, c?: number): number {
    if (c) {
        return a * b * c;
    }
    return a * b;
}
