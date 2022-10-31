#target photoshop

app.preferences.rulerUnits = Units.PIXELS;
app.displayDialogs.NO;

function writeToFile(output) {
    ExportFile.write(output);  
}

// Open file for append to file "poserframes-path.txt" on desktop
var ExportFile = new File(Folder.desktop + "/poserframes-path.txt");

ExportFile.open("w", "TEXT"); // Hack to delete existing file
ExportFile.close();

ExportFile.open("a", "TEXT");

// Get paths in document
var pathObj = app.activeDocument.pathItems.getByName('Frame');

for (var s = 0; s < pathObj.subPathItems.length; s++) { // Loop through all SubPathItems
    for (var i = 0; i < pathObj.subPathItems[s].pathPoints.length; i++) { // Loop through all pathPoints in SubPathitem
        var thisPathPoint = pathObj.subPathItems[s].pathPoints[i].kind + " " + pathObj.subPathItems[s].pathPoints[i].anchor +  " " + pathObj.subPathItems[s].pathPoints[i].leftDirection + " " + pathObj.subPathItems[s].pathPoints[i].rightDirection + " " + pathObj.subPathItems[s].pathPoints[i].typename;
        if (i < pathObj.subPathItems[s].pathPoints.length -1 ) {
            thisPathPoint = thisPathPoint + ";"    
        }
        writeToFile(thisPathPoint);
    }
}

// Close file
ExportFile.close();