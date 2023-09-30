'use strict'; /* Used traditional syntax and ES5, except "let". */

/** SecondClass *******************************************************
 * Constructing a class "SecondClass" with private and public functions
 * wherein we could use (call) the public functions 
 * from other classes like "FirstClass",
 * even if they are not instantiated at that time,
 * because our container "MyApplicationsName" is global (in the window-scope).
 * Means, we hoisted our container to window,
 * so the functions are going to be executed 
 * only after the window is loaded with the complete scripts.
 * Works similar like the compiled files e.g. in C or JAVA. 
 * In this way JavaScript is kind of precompiled for the browser.
 * Note: Every class is a file, is a module.
*/
window.MyApplicationsName.SecondClass = function (){

    // Private
    let SecondClassPrivate = function(){
        console.log("2 SecondClass Private");
        // Invoke a public function from ANOTHER class
        myFC.FirstClassPublic();
    };

    // Private
    let myCallbackOnJSONLoad1 = function(modelContent){
        // Display the model-content retrieved via JSON in the "view.htm" (DOM)
        let getDOMContainer = document.getElementById("someContent");
        getDOMContainer.innerHTML = modelContent.someModelProperty.title;
    }

    // Public
    this.init = function(){

        // Private functions can only be used or invoked inside the class.
        SecondClassPrivate();

        /**
         * Get the model-content (JSON-file) with "retrieveModel1"
         * and when load is finished, display it in the "view.htm" 
         * with the callback-function "myCallbackOnJSONLoad1" ("callMeWhenReady")
         **/
        window.MyApplicationsName.retrieveModel1(myCallbackOnJSONLoad1);
    };
};


/****************************************************************
 * INSTANTIATE (new) a variable (e.g. "mySC")                   *
 * with the class from this file ("SecondClass")                *
 * to make the class available to be invoked (in the "view.htm")*
****************************************************************/
let mySC = new window.MyApplicationsName.SecondClass();
