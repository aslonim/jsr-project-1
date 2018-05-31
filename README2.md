Basic readme: 

The chatbot answers teh following questions 

Who is in the Dirty Dozen? 
Open the pod bay doors please, HAL"
Who is that damn good?

Anything else will return a default answer. 

There is also very simple architecture in place for adding additional responses. 

The method through which it answers questions is by using a 'let' statement, that takes a message, specifically
whatever was written in the chatbox, checks that against a few possible answers and posts the defined answer back. 

This method allows for easy addition of future questions and answers by adding in a line comprable to 

"some question": "some answer",
where some question and some answer are strings in quotation. 

I wanted to have an additional series of asks/answers mimicking the iconic 'is it safe' conversation from Marathon Man. 

This was going to be implemented by using an if statement outside of the let statement. If the question "is it safe" 
was presented, the first item in an array would be retrieved, and a variable would be incremented from 0. Each additional time
the variable # item in the array would be returned, however if it reached the maximum, it would stay at the final element
of the array. 

creating an if/else statement where the else conditional was the 'let' statement proved very difficult, and time consuming.

It was fun working with the new methodology of if/else statments. I was completely unfamiliar with the let statement, but 
It was a fantastic method, very streamlined and simple to use, if a little hard to understand at first. 