
'use strict'; /* Used traditional syntax and ES5, except "let". */

/** Here is the BEGINNING (the entry-point to the Application):
 * 
 * We reserve a namespace ("MyApplicationsName") for the Application, 
 * wherein we add our classes and the configurations of the Application
 * and we load herein also the model-content, means e.g. JSON-files and database-content.
 * 
 * The place to deposit content which has to be reachable from the complete application.
 * 
 * For example the "retrievedJSONContent". See in console.
*/
window.MyApplicationsName = {
    "name"                  :"MyApplicationsName",
    "version"               :"1.0",
    "language"              :"en",
    "someConfig"            :"something",
    "retrievedJSONContent1" :"", 
    "retrievedJSONContent2" :"", 
    "mainURL"               :"https://someExample.com",

    /** This function "makeAJAXRequest" 
     * can be used for AJAX-requests without or with parammeters
     * e.g. for json- or php-files. See how to use in "SecondClass.js"
     * @param {string} callMeWhenReady - The substitute-name of the callbackfunction from the class
     * @param {string} url - The request-url
     * @param {string} param1 - Optional parameter
     * @param {string} param2 - Optional parameter
     * @param {string} param2 - Optional parameter
     **/
    "makeAJAXRequest"  :function(callMeWhenReady, url, param1, param2, param3){

        let AJAXRequest = new XMLHttpRequest();

        // GET is simpler and faster than POST, and can be used in most cases.
        let method = "GET"; // POST or GET

        // However, always use POST requests when:

        // a) Sending user input with sensitive data 
        //    or which can contain unknown characters (read about XSS), 
        //    POST is more robust and secure than GET.
        // b) Sending a large amount of data to the server (POST has no size limitations).

        // Additional note: 
        // Be aware: if making a Server-request via POST, 
        // the application does not run in IIS.
        // IIS-server does not accept POST-Requests. 

        let parameters = "";

        // In case that the request has parameters, we add them
        if (typeof param1 != 'undefined' && param1 != null && param1 != ""){
            parameters = parameters + "param1=" + param1;
        }
        if (typeof param2 != 'undefined' && param2 != null && param2 != ""){
            parameters = parameters + "&param2=" + param2;
        }
        if (typeof param3 != 'undefined' && param3 != null && param3 != ""){
            parameters = parameters + "&param3=" + param3;
        }

        if (method == "GET"){
            parameters = "?" + parameters; // attaching first parameter in URL needs the questionmark
            url = url+parameters;
            AJAXRequest.open(method, url, true);
            AJAXRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            AJAXRequest.send();
        } else { // POST
            AJAXRequest.open(method, url, true);
            AJAXRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            AJAXRequest.send(parameters);
        }

        AJAXRequest.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) { // on SUCCESS
                callMeWhenReady(AJAXRequest.responseText);
            }

            if (this.readyState == 4 && this.status != 200) { // on ERROR
                let fileError = "ERROR requesting the file-url:" + url;
                callMeWhenReady(fileError);
            }
        };
    }
};
