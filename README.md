# JavaScript Concepts

A project consisting of unit tests illustrating some useful JavaScript concepts.

## Arithmetic Operations
I found that JavaScript doesn't always give perfectly rounded figures.

## Loops
### Variable scope
You can declare a function level variable in the initialization block of a for loop using the  var keyword. Using const or let would mean the variable is scoped to the loop.

### For-in loops vs all the others
For in loops generally should not be used unless the number of properties on an object is unknown.

### Work done per iteration
One way to improve the performance of loops is to limit property look ups done for values that do not change each iteration. Instead, prefer declaring a variable to hold these unchanging values.