
'use strict'; /* Used traditional syntax and ES5, except "let". */


/** FirstClass ********************************************************
 * Constructing a class "FirstClass" with private and public functions
 * wherein we could use (call) the public functions 
 * from other classes like "SecondClass",
 * even if they are not instantiated at that time,
 * because our container "MyApplicationsName" is global.
 * Means, we hoisted our container to window,
 * so the functions are going to be executed 
 * only after the window is loaded with the complete scripts.
 * Works similar like the compiled files e.g. in C or JAVA. 
 * In this way JavaScript is kind of precompiled for the browser.
 * Note: Every class is a file, is a module.
*/
window.MyApplicationsName.FirstClass = function (){

    // Private (can only be accessed from this class)
    let FirstClassPrivate = function(){
        console.log("Executed in FirstClass Private");
    };

    // Public (can be accessed from other classes)
    this.init = function(){

        console.log("Executed in FirstClass Public / init");

        FirstClassPrivate();

        mySecC.SecondClassPublic(); // Invoke a public function from ANOTHER class
    };
};



/****************************************************************
 * INSTANTIATE (new) a Variable (e.g. "myFirC")                 *
 * with the class from this file ("FirstClass")                 *
 * to make the class available to be invoked (in the "view.htm")*
****************************************************************/
let myFirC = new window.MyApplicationsName.FirstClass();
