# Exercise 12 - Find the Oldest

Given an array of objects representing people with a birth and death year, return the oldest person.

Now that you've reached the final exercise, you should be fairly comfortable getting the information you need from test case(s). Take a look at how the array of objects is constructed in this exercise's test cases to help you write your function.

## Hints
- You should return the whole person object, but the tests mostly just check to make sure the name is correct.
- There are many ways of doing this using built-in array methods like `reduce`, or even chaining multiple! 
- One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.

PLAN 
the program work like this 
inputs : 
- array of objects 
outputs : 
- the oldest person object 

so how we gonna get a to b 
first we need to find the oldest person 
age= death year - birth year 
age2= date function ( current time )  - birth year 
so we need to check the object if it contains a death year , use age ; if its not found use age 2 ; 

we need to check all the objects on the array for the age , then show the biggest number 
after we know what object has the biggest value we need to show it on the screen 
with the text printed  on top " the oldest person here is " nameOfPerson" 


