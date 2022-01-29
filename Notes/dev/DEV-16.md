# DEV-16, Execution Context

## Tags: [context]

### Link:[<https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13772854#overview>]


## What is it?

![](../images/DEV-16/DEV-16-A1.png)

    When the JavaScript engine sees those brackets, it's going to say, oh, I'm going to run a function
    and create an execution context.

![](../images/DEV-16/DEV-16-B1.png)   

    Adds this execution context onto the stack, and then it tries to run this
    function and sees that this function is calling another function. Create a new execution context.

![](../images/DEV-16/DEV-16-B2.png)   

    then its gonna find another function

![](../images/DEV-16/DEV-16-B3.png)  

    then once it prints the name and returns its value, each of the functions are removed from the stack in First in Last out (FILO)

    This was actually the global execution context

![](../images/DEV-16/DEV-16-B4.png) 

    When everything has been ran, the global context should be popped oof too.

## Global Execution Context

    Global execution context gives us these two things right off the bat when
    the JavaScript engine starts up.

![](../images/DEV-16/DEV-16-C1.png)

![](../images/DEV-16/DEV-16-C2.png)





