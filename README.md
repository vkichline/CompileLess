CompileLess
===========

Trivial VS 2015 Preview K web app that uses Grunt to watch and compile LESS bootstrap.

To Evaluate
* Clone project to desktop
* Open in VS 2015 Preview
* _Wait for restore to complete_
* Open Task Runner Explorer and refresh it 
  * To open TRX, right-click on gruntfile.js and select "> Task Runner Explorer"
  * Refresh needed because grunt was not loaded when project opened; known issue
* F5.  wwwroot folder will be created, Bootstrap will be compiled, app will run.
* Close Visual Studio
* Reopen project.
  * This time, a Watch task opens (same issue: grunt was not available on first load)
* Modify and save site.less.  The file is compiled (with all of Bootstrap) and site.css is updated
