JS INTRODUCTION
Introduction

Exercise
You have 3 iterations to do today. Each iteration is within a folder iterations that contains two files: index.html and script.js.

The HTML file simply loads the JavaScript file where you will code your solution code.

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>
Your script.js Javascript file contains a sample code that you will have to modify. It showcases the use of the prompt method, that allows you to read a value from a window.

// Your Solution code goes here

var test = window.prompt("type something here")
console.log(test)
To test that it works, click on the Live Server button that is located on the bottom-right corner of VSCode:

And then open your Google Chrome Developer Tools to see the console.log output.

Try it out and when you have checked that it works, you can delete the provided code in script.js

Iteration 1: Basic Input/Output & Conditionals
Read the name of driver
Read the name of pilot
Print The driver's name is XXXX
Print The pilot's name is YYYY
Depending on which name is longer, print:
The Driver has the longest name, it has XX characters or
Yo, Pilot got the longest name, it has XX characters or
Wow, you both got equally long names, XX characters!
Iteration 2: String Loops
Print all the characters of the driver's name, separated by a space.
"m i c h a e l"
Print all the characters of the driver's name, separated by a dash and ending with an exclamation mark!
"m-i-c-h-a-e-l!"
Print all the characters of the pilot's name, in reverse order and UpperCase
"L E A H C I M"
Iteration 3: Number Conditionals & Loops
Write a loop that will print all the numbers from 1-20
Write a loop that will print all ODD the numbers smaller than 128 that are divisible by 3, but not divisible by 5.
Write a loop that will write all the powers of 2 from 2^1 (2) to 2^10 (1024)
2 ^ 1 = 1
2 ^ 2 = 4
...
2 ^ 10 = 1024
Iteration 4: Bonus Time!
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a lorem variable
Make your program count the number of words in the lorem
Make your program count the number of times the Latin word et appears in lorem
How to Submit
In iTerm under ~/code/labs/LAB-103-js-introduction enter the following commands

git add .
git commit -m "done"
git push origin master
Send the link of your github repository through Slack