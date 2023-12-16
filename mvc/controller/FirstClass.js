
'use strict'; /* Used traditional syntax and ES5, except "let". */


/** FirstClass ********************************************************
 * Constructing a class "FirstClass" with private and public functions
 * wherein we could use (call) the public functions 
 * from other classes like "SecondClass",
 * even if they are not instantiated at that time,
 * because our container "MyApplicationsName" is global.
 * Note: Every class is a file, is a module.
*/
window.MyApplicationsName.FirstClass = function (){

    // Private
    let FirstClassPrivate = function(){
        console.log("1 FirstClass Private");
    };

    // Public
    this.FirstClassPublic = function(){
        console.log("1 FirstClass Public");
        FirstClassPrivate();
    };
};




/****************************************************************
 * INSTANTIATE (new) a Variable (e.g. "myFC")                   *
 * with the class from this file ("FirstClass")                 *
 * to make the class available to be invoked (in the "view.htm")*
****************************************************************/
let myFC = new window.MyApplicationsName.FirstClass();

