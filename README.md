CompileLess
===========

Trivial VS 2015 RC DNX web app that uses Grunt to watch and compile LESS bootstrap.

To Evaluate
* Clone project to desktop
* Open in VS 2015 RC
* _Wait for restore to complete_
* Open Task Runner Explorer 
  * To open TRX, right-click on gruntfile.js and select "> Task Runner Explorer"
* F5.  wwwroot folder will be created, Bootstrap will be compiled, app will run.
* Close Visual Studio
* Reopen project.
  * This time, a Watch task opens (known issue: grunt was not available unless TRX is open)
* Modify and save site.less.  The file is compiled (with all of Bootstrap) and site.css is updated
