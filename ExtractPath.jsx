#target photoshop

function writeToFile(output) {
    ExportFile.write(output);  
}

// Open file for append to file "poserframes-path.txt" on desktop
var ExportFile = new File(Folder.desktop + "/poserframes-path.txt");
ExportFile.open("a", "TEXT");

// Get paths in document
var pathObj = app.activeDocument.pathItems.getByName('Frame');

for (var s = 0; s < pathObj.subPathItems.length; s++) { // Loopa genom alla SubPathItems
    
    alert(pathObj.subPathItems[s].typename)
    
    for (var i = 0; i < pathObj.subPathItems[s].pathPoints.length; i++) { // Loopa genom alla pathPoints i SubPathitem
        
        
        var thisPathPoint = pathObj.subPathItems[s].pathPoints[i].kind + " " + pathObj.subPathItems[s].pathPoints[i].anchor +  " " + pathObj.subPathItems[s].pathPoints[i].leftDirection + " " + pathObj.subPathItems[s].pathPoints[i].rightDirection + " " + pathObj.subPathItems[s].pathPoints[i].typename;
        
        if (i < pathObj.subPathItems[s].pathPoints.length -1 ) {
            thisPathPoint = thisPathPoint + ";"    
        }
        
        writeToFile(thisPathPoint);
    }
}

// Close file
ExportFile.close();