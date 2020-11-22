// Predict 1

function greeting(){ // declaring the function with the name 'greeting
        return "Hello"; // telling the function to return the value that will be called later
        console.log("World"); // Print World
    }
    var word = greeting(); // creating a variable called world to house the returned value, 
    console.log(word); // Print World

// Output = "Hello" only. "world" was not printed because it was not called outside the function.


    // Predict 2

    function add(num1, num2){ // declaring function, passing it parameters to be input when called.
            console.log("Summing Numbers!"); // Print "Summing Numbers"
            console.log("num1 is: " + num1); // Print num 1 is + the first parameter
            console.log("num2 is: " + num2); // Print num 2 is + the second parameter
            var sum = num1 + num2; // creating a temporary variable called sum to add num1 and num 2 together
            return sum; // return that variable value
        }// end of function definition here
        var result1 = add(3,5); // create a variable called result 1 to preform an add operation
        var result2 = add(4,7);// same thing as line 22 but with another variable passed different values
        console.log(result1);
        console.log(result2); // Print the results (result 1 and result 2)

        // Output = "Summing Numbers!", "num1 is: "3, "num2 is" : 5, "Summing Numbers", "num1 is: 4", "num 2 is: " 7, 8, 11




// Predict 3

function highFive(num){
        for(var i=0; i<num; i++){
            if(i == 5){
                console.log("High Five!");
            }
            else{
                console.log(i);
            }
        }
    }

    //Output = No output because the function was not called outisde the curly brackets. Had the function been called with the parameter of 50 inside the parenthesis, the output would be console logging 0-4, replacing 5 with the string "High Five!" and continuuing to print all ints from 6-50. In other words, if any number >= 5 is entered, the 5th print will always be the string "High Five!" with all other ints printed normally. If it was <5, it would only print up to num -1