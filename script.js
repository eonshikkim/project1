/* For this project, I will build a message generator program. 
Every time a user runs a program, they should get a new, randomized output.
Nickname generator
Every time when you enter your name, the program will genarate the unique nickname for you!
It will follow the rule
random adjective + user's first name + randomly generated 3 digits number
supereonshik243 
referred https://stackoverflow.com/questions/43912703/ensuring-random-3-digit-number-in-javascript
https://www.codegrepper.com/code-examples/javascript/javascript+pick+random+string+from+array%5D
 */


function randomAdjective() {
    const adjective = ["super","handsome","beautiful","gorgeous","marvelous","clever","genious","mean","jealous","crazy"];
    const random = adjective[Math.floor(Math.random() * adjective.length)];
    return random;
    
    }
    
    function firstName(){
        const prompt = require('prompt-sync')();
        console.log(" Welcome to Erik's ID generator  \n ----------------------- \n what is your first name? ");
        const name = prompt();

        /*
        while(name.length < 3 || name.length > 10){
           console.log("Name can't be shorten than 3 or longer than 10 \n Please type again");
           const name2 = prompt();
           return name2;
        }
        */
    
     return name;
        
    }

  
    function randomDigits(){
    
    const digits = Math.floor(Math.random()*(999-100+1)+100);
    return digits;
    }

function join(){
    const join = randomAdjective() + firstName() + randomDigits();
return join;
}

    console.log("Your id is: " + join());
    