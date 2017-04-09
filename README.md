# The 24Points Game
24Points Game using Javascript and websocket. This works as the first demo for my [webpack-config](https://github.com/wheelo/webpack-config) project.

## Description
Tips:

You are randomly given four digits, each from one to nine, with repetitions allowed.
The goal is to enter an expression that evaluates to 24.

For example, for the numbers 4, 7, 8, 8, a possible solution is: (7-(8/8))*4=24.

Most sets of 4 digits can be used in multiple equations that result in 24. For example the input 2,2,4,7 can be used in multiple ways to obtain 24:

2+2*(4+7) = 24

2+2*(7+4) = 24

(2+2)*7-4 = 24

(2*2)*7-4 = 24

2*(2*7)-4 = 24

There are also combinations of 4 numbers that cannot result into any equation equal with 24. For example 1, 1, 1, 1. In this case, your program should return that there is no possible equation equal with 24.

Note: Although we will enter 4 integers between 1 and 9, we will use doubles to compute all the operations. For example, the numbers 3, 3, 8, 8 can be combined into the formula: 8/(3-8/3) = 24.


## Usage
The technology stack is consisted of ES2015 + less + websocket. Use it with the following command:
```
>> npm start
```

Enjoy~

## Todo
- [ ] modify the main algorithm
- [ ] TDD supportive
- [ ] websocket supportive


