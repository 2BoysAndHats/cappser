var fs = require("fs");
var path = require("path")

function loadApps () {
    var appsdir = "apps"
    var appDirs = getDirectories(appsdir);
    var apps = [];

    appDirs.forEach(function (appDir) {
        var fullPath = path.join(appsdir,appDir)
        var jsonPath = path.join(fullPath,"app.json")
        try{
            fs.statSync(jsonPath)
        }catch (e){
            //Oops. Not an app folder
            return;
        }

        var json = require("./" + jsonPath)
        apps.push(json)

    });

    return apps;
}

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

exports.loadApps = loadApps