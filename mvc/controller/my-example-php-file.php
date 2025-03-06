<?php


    function exampleFunction() {

        // The response, initially an empty array 
        // will be returned/converted into a JSON-object.
        $response = array();

        // If in MyApplicationsName.js the request-method is set to POST retrieve the values like this
        // Collect the POST-parameters values
        // $someVariable1 = $_POST["param1"]; 
        // $someVariable2 = $_POST["param2"]; 
        
        // If in MyApplicationsName.js the request-method is set to GET retrieve the values like this
        // Collect the GET-parameters values
        $someVariable1 = $_GET["param1"]; 
        $someVariable2 = $_GET["param2"]; 

        // ... here we could request some database-content
        // ... and send the response back to the client
        $response["myDatabaseContent"] = "This is : ".$someVariable1." and that is : ".$someVariable2;

        $response = json_encode($response);
        echo $response;
    }


    exampleFunction();
?>