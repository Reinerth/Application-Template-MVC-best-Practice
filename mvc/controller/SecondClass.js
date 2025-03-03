
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

    // Common settings needed inside this class
    let internalSettings = {
        myURLSomewhere: "./mvc/controller/myFile.php?param1=myValueA&param2=myValueB",
        myURLToModel1: "./mvc/model/model1.json?since=202312161200&svnrevision=002",
        param1: "myValueA"
    };

    // Private
    let SecondClassPrivate = function(){
        console.log("2 SecondClass Private");
        // Invoke a public function from ANOTHER class
        myFC.FirstClassPublic();
    };

    // Private
    let myCallbackOnJSONLoad1 = function(responseContent){

        // Display the model-content retrieved via JSON in the "view.htm" (DOM)
        let getDOMContainer = document.getElementById("someContent");
        getDOMContainer.innerHTML = JSON.stringify(responseContent);

        // We put the JSON-content to the model-central to have access on it applicationwide
        window.MyApplicationsName.retrievedJSONContent = JSON.parse(responseContent);
    }


    // Public
    this.init = function(){

        // Private functions can only be used or invoked inside the class.
        SecondClassPrivate();

        /**
         * Get the models-content (a JSON-file) with the function "makeAJAXRequest"
         * and when load is finished, do something with the retrieved content "responseContent"
         * inside the callback-function from line 34 "myCallbackOnJSONLoad1" ("callMeWhenReady")
         * 
         * Not easy to read this 3 lines: 
         * The function "makeAJAXRequest" has 3 parameters: 
         * the first one, is an anonymous function, which invokes the callback-function "myCallbackOnJSONLoad1",
         * the second parameter, is the URL to the file requested "myURLToModel1",
         * and the third paramter, "param1" is not needed here, 
         * but added as an example, on how to append paramters e.g. at a requested php-file  
         **/
        window.MyApplicationsName.makeAJAXRequest(function(responseContent) {

            // On callback ready, we do something with the response.
            myCallbackOnJSONLoad1(responseContent);

        }, internalSettings.myURLToModel1, internalSettings.param1);
    };
};



/****************************************************************
 * INSTANTIATE (new) a variable (e.g. "mySC")                   *
 * with the class from this file ("SecondClass")                *
 * to make the class available to be invoked (in the "view.htm")*
****************************************************************/
let mySC = new window.MyApplicationsName.SecondClass();





