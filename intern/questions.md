General Programming
-------------------
Q) What is the difference between HTTP methods GET and POST?

Q) What is the difference between statically typed and dynamically typed languages?

Q) How would you debug a bug?

Q) What's the difference between Ruby and Ruby on Rails?

JAVA
-----
Q) What’s the difference between equals() and ==?
What is the output of the program below:
```
String obj1 = new String("xyz");

String obj2 = new String("xyz");

if(obj1 == obj2)
   System.out.println("obj1==obj2 is TRUE");
else
  System.out.println("obj1==obj2 is FALSE");
```

Q) In Java, what does the finally block do?
```
public void someMethod{
   Try {
   // some code
   }

   Catch(Exception x) {
   // some code
   }

   Catch(ExceptionClass y) {
   // some code
   }

   Finally{
   //this code will be executed whether or not an exception
   //is thrown or caught
   }
}
```

Q) Does Java have multiple inheritance?

No, Java does not have multiple inheritance, but it has interfaces which can be
used instead of multiple inheritance.

C++
---
Q) In C++, what’s the difference between an inline function and a macro?

Q) Does C++ support multiple inheritance?

Yes, C++ does support the use of multiple inheritance – where a class is derived
from more than one direct base class.


Javascript
----------

Q) What is a potential pitfall with using typeof bar === "object" to determine
if bar is an object? How can this pitfall be avoided?

```
var bar = null;
console.log(typeof bar === "object");
```

Q) What will the code below output to the console and why?
```
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
```
Answer:
```
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar
```
