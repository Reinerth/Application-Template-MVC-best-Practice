
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


    // Common settings needed inside this class (can only be accessed from this class)
    let internalSettings = {
        myURLSomewhere: "./mvc/controller/my-example-php-file.php",
        myURLToModel1: "./mvc/model/model1.json",
        aDOMContainer: document.getElementById("someContent"),
        param1: "one",
        param2: "two"
    };


    // Private (can only be accessed from this class)
    let SecondClassPrivate = function(){
        console.log("Executed in SecondClass Private");
    };


    // Private (can only be accessed from this class)
    let myCallbackOnJSONLoaded = function(responseContent){

        // If we retrieve database-content, 
        // we should put it directly to the MODEL-CENTER 
        // to have access on it from everywhere (applicationwide), 
        // and from there we take the values to continue with them
        window.MyApplicationsName.retrievedJSONContent1 = JSON.parse(responseContent);

        // Do something with the values (model-content) ...
        // ... display them in the "view.htm" (DOM)
        internalSettings.aDOMContainer.innerHTML = JSON.stringify(window.MyApplicationsName.retrievedJSONContent1);
    };


    // Public (can be accessed from other classes)
    this.SecondClassPublic = function(){

        // Private functions can only be used or invoked inside the class.
        SecondClassPrivate();

        /**
         * Get the models-content (a JSON-file) with the function "makeAJAXRequest"
         * and when load is finished, do something with the retrieved content "responseContent"
         * inside the callback-function from line 37 "myCallbackOnJSONLoaded" ("callMeWhenReady")
         * 
         * Not easy to read this 3 lines: 
         * The function "makeAJAXRequest" has 4 parameters: 
         * the first one, is an anonymous function, to pass the "responseContent" to the callback, 
         * and invoke the callback-function "myCallbackOnJSONLoaded",
         * the second parameter, is the URL to the file requested, "myURLSomewhere",
         * and finally the third and fourth paramter, "param1" and "param2"
         * added optional as an example, on how to append paramters at a requested php-file  
         * 
         * The simple one-liner-notation with a callback-function 
         * where you dont need to pass the retrieved content, would look like this:
         * window.MyApplicationsName.makeAJAXRequest(myCallbackFunctionsName, myURL, URLparameter1, URLparameter2);
         * 
         * or without parameters for a simple JSON-file like this:
         * window.MyApplicationsName.makeAJAXRequest(myCallbackFunctionsName, myURL);
         **/
        window.MyApplicationsName.makeAJAXRequest(function(responseContent) {

            // On callback ready, we do something with the response.
            myCallbackOnJSONLoaded(responseContent);

        }, internalSettings.myURLSomewhere, internalSettings.param1, internalSettings.param2);
    };
};




/****************************************************************
 * INSTANTIATE (new) a variable (e.g. "mySecC")                 *
 * with the class from this file ("SecondClass")                *
 * to make the class available to be invoked (in the "view.htm")*
****************************************************************/
let mySecC = new window.MyApplicationsName.SecondClass();
