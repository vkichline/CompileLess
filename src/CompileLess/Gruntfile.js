/// <binding BeforeBuild='build' ProjectOpened='watch' />

module.exports = function (grunt) {
    grunt.initConfig({
        // Delete everything in the wwwroot folder; it will all be restored by build steps
        clean: {
            wwwroot: {
                files: {
                    src: "wwwroot/**/*"
                }
            }
        },
        // Copy static assets to wwwroot.  Not CSS; it is compiled from LESS and placed in wwwroot
        copy: {
            bootstrap_fonts: {
                expand: true,
                flatten: true,
                src: ["bower_components/bootstrap-less/fonts/*.*"],
                dest: "wwwroot/fonts/"
            },
            bootstrap_js: {
                expand: true,
                flatten: true,
                src: ["bower_components/bootstrap-less/js/*.js"],
                dest: "wwwroot/js/"
            },
            html: {
                flatten: true,
                src: "index.html",
                dest: "wwwroot/index.html"
            }
        },
        // Build site.less, which includes the full bootstrap source
        less: {
            site: {
                files: {
                    'wwwroot/site.css': 'site.less'
                }
            }
        },
        // When site.less changes, recompile and replace wwwroot/site.css
        watch: {
            less: {
                files: ["site.less"],
                tasks: ["less:site"]
            }
        }
    });

    // The main build task.  Cleans, compiles LESS and copies static assets
    grunt.registerTask("build", ['clean:wwwroot', 'copy', 'less:site'])

    // Load required grunt tasks
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
};