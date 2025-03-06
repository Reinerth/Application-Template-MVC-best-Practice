# Application-Template-MVC-best-Practice :mountain_snow:  :compass:  :anchor:  :gear:
This set of 6 files, represent a template with best practices for setting up a big JS-application from the scratch. 
<br>
The given structure follow the MVC-pattern (Model-View-Controller) and the module-pattern.
<br><br>
Web-server needed. (Works in IIS too if method in MyApplicationsName.js line 37 is not set to POST)
<br><br>
PHP is NOT mandatory (is optional), and not part of the structure. (Only added an example for how could be used)
<br>
Could be easily removed if in SecondClass.js in line 82 
<br>
the first parameter "myURLSomewhere" gets changed to "myURLToModel1" (from line 23).
<br><br>

![mvc](https://github.com/Reinerth/Application-Template-MVC-best-Practice/assets/85163640/3a297aa7-3585-4874-9b1f-9781fbdc0fac)


## This is what it looks like: 

![tree](https://github.com/user-attachments/assets/5c09a4fc-43c1-47b9-a48e-224b5c9d09cb)


### The VIEW (Starting page of the application):
![MyApplicationsName-htm](https://github.com/user-attachments/assets/e594a683-33a5-40b1-b0fc-c4305c1dd196)


<br><br><br><br>
### The MODEL<br>
The CENTRAL of the Model and the application - The entire content of the application will be routed through this file<br>
![MyApplicationsName-js](https://github.com/user-attachments/assets/de3bbc4f-901a-427c-9f3e-0d505fad0f07)


...and a simple JSON-file<br>
![model1-json](https://github.com/user-attachments/assets/14707d80-523d-44cb-9a5c-5a97fe7edc4e)


<br><br><br><br>
### The CONTROLLER<br>
A basic example of a simple class.<br>
![FirstClass-js](https://github.com/user-attachments/assets/02221480-fd31-4c25-9aa3-5365ed13e4ef)

A complete example with a request to a Model/PHP-file (or JSON-file) <br>
![SecondClass-js](https://github.com/user-attachments/assets/9d7b52e0-81a4-48b7-af58-1b12bd5b47ce)

The basic example of the php-file from where database-content could be retrieved.<br>
![my-example-php-file-php](https://github.com/user-attachments/assets/aa00860e-a5ab-440a-80fd-1cd95d8de8bf)


<br><br><br><br><br><br><br><br><br><br>


