
// Iteration 1: Basic Input/Output & Conditionals

var driver = window.prompt("Write the driver's name")
console.log("The driver's name is " + driver)

var pilot = window.prompt("Write the pilot's name")
console.log("The pilot's name is " + pilot)

if (driver.length > pilot.length) {
    console.log("The Driver has the longest name, it has " + driver.length + " characters")
} else if (pilot.length > driver.length) {
    console.log("The Pilot has the longest name, it has " + pilot.length + " characters")
} else {
    console.log("Wow, you both got equally long names, " + pilot.length + " characters")
}


// Iteration 2: String Loops;
//Print all the characters of the driver's name, separated by a space.

let newName = "";

for (let i = 0; i < driver.length; i++) {
    newName += driver[i] + " "
}
console.log(newName)

//Print all the characters of the driver's name, separated by a dash and ending with an exclamation mark!

let newNameDriver = "";

for (let i = 0; i < driver.length; i++) {
    if (i === driver.length - 1) {
        newNameDriver += driver[i] + "!"
    } else {

        newNameDriver += driver[i] + "-"
    }

}
console.log(newNameDriver)

// Print all the characters of the pilot's name, in reverse order and UpperCase
let nameUpper = ""

for (let i = driver.length - 1; i >= 0; i--) {
    nameUpper += driver[i].toUpperCase() + " "
}
console.log(nameUpper)


//Iteration 3: Number Conditionals & Loops
//Write a loop that will print all the numbers from 1-20

for (let i = 1; i <= 20; i++) {
    console.log(i)
}


//Write a loop that will print all ODD the numbers smaller than 128 that are divisible by 3, but not divisible by 5.
for (let i = 0; i < 128; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 5 !== 0)
        console.log(i)
}
//Write a loop that will write all the powers of 2 from 2^1 (2) to 2^10 (1024)

for (let i = 1; i <= 10; i++) {
    let result = Math.pow(2, i);
    console.log("2^" + i + " = " + result);
}


// Go to lorem ipsum generator and:
//Generate 3 paragraphs. Store the text in a lorem variable
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris vitae ultricies leo integer. Eget dolor morbi non arcu risus quis varius quam quisque. Egestas sed tempus urna et pharetra pharetra massa. Semper viverra nam libero justo laoreet sit amet. Ultrices dui sapien eget mi proin sed libero. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Ullamcorper malesuada proin libero nunc consequat. Enim lobortis scelerisque fermentum dui. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Rhoncus dolor purus non enim praesent elementum.
Tempus imperdiet nulla malesuada pellentesque elit. Tortor at auctor urna nunc id cursus metus. Massa sed elementum tempus egestas sed sed risus. Et malesuada fames ac turpis egestas. At ultrices mi tempus imperdiet nulla. Donec massa sapien faucibus et. Ut diam quam nulla porttitor. In hac habitasse platea dictumst. Adipiscing enim eu turpis egestas pretium aenean. Malesuada fames ac turpis egestas sed tempus urna. Quis varius quam quisque id diam vel quam elementum pulvinar. Nunc non blandit massa enim nec dui nunc. Ac auctor augue mauris augue neque. Fermentum posuere urna nec tincidunt praesent semper. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Purus viverra accumsan in nisl. Sed adipiscing diam donec adipiscing. Accumsan sit amet nulla facilisi morbi tempus iaculis. Quis eleifend quam adipiscing vitae proin sagittis nisl.
Pellentesque adipiscing commodo elit at imperdiet. Duis ut diam quam nulla porttitor. Nibh ipsum consequat nisl vel. Enim sed faucibus turpis in eu mi. In egestas erat imperdiet sed euismod nisi porta lorem. Senectus et netus et malesuada fames ac. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. In fermentum posuere urna nec. A condimentum vitae sapien pellentesque. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sed augue lacus viverra vitae congue eu consequat. Ultrices mi tempus imperdiet nulla malesuada pellentesque.`

//Make your program count the number of words in the lorem
//Using the regular expression /\s+/ as the delimiter, which matches one or more whitespace characters (e.g., spaces, tabs, newlines)

let words = lorem.split(/\s+/)
let count = 0

for(let i = 0 ; i < words.length; i++){
    if (words[i].trim !== " " ){
        count ++
    }

}
console.log(count)



//Make your program count the number of times the Latin word et appears in lorem

let etCount = 0;
let etWords = lorem.split(/\s+/);

for (let i = 0; i < etWords.length; i++) {
  // Normalize the word to lowercase for case-insensitive matching
  let word = etWords[i].toLowerCase();
  // Check if the word is "et"
  if (word === "et") {
    etCount++;
  }
}

console.log(etCount);