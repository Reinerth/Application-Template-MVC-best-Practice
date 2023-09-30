'use strict'; /* Used traditional syntax and ES5, except "let". */

/** Here is the BEGINNING (the entry-point to the Application):
 * We reserve a namespace ("MyApplicationsName") for the Application, 
 * wherein we add our classes and the configurations of the Application
 * and we load herein also the model-content, means e.g. JSON-files, database-tables ...
*/
window.MyApplicationsName = {
    "name":             "MyApplicationsName",
    "version":          "1.0",
    "language":         "en",
    "someConfig":       "something",
    "mainURL":          "https://userm.userm.htm",
    "retrieveModel1":   function(callMeWhenReady){

        /**
         * We request a JSON-file (represents the MODEL / raw content)
         * and invoke a callback, given as parameter ("callMeWhenReady")
         * when the content is loaded (used in FirstClass.js -> myCallbackJSONLoad()).
         */
        let AJAXRequest = new XMLHttpRequest();
        let JSONcontent;

        AJAXRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) { // on success
                JSONcontent = JSON.parse(AJAXRequest.responseText);
                callMeWhenReady(JSONcontent);
            }
        };
        AJAXRequest.open("POST", "mvc/model/model1.json", true);
        AJAXRequest.send();
    },
    "retrieveModel2":"",
    "retrieveModel3":""
};