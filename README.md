P O S E R  F R A M E S
======================

by [Joakim Hertze](https://www.hertze.se)

**Poser Frames** is JavaScript for Photoshop that adds fake negative borders, traced from real negatives. It works with images in 3:2, 4:3, 6:7, 4:5 and 1:1 format, with a minimum short side of 1500px.


Installing and running Poser Frames
------------------------------------------------------------

1. Copy the script **PoserFrames.jsx** to Photoshop’s scripts folder. On Mac it's in **/Applications/Photoshop 2022/Presets/Scripts** and on Windows 10 it's in **C:\Program Files\Adobe\Adobe Photoshop 2022\Presets\Scripts**. You may have to change the permissions of this folder to copy the script there.

3. Start Photoshop and make sure **PoserFrames** shows up in the menu **File/Scripts**. If you already had Photoshop running when you copied the script to the scripts folder, you may have to restart it.

3. Install the Photoshop action by double-clicking on **PoserFrames.atn**, or by loading it in the Actions palette in Photoshop.

4. Run the script in one of three ways: directly from the menu **File/Scripts/PoserFrames**, by running the action **Run PoserFrames** from the Actions Palette, or by making a droplet with the action **Run PoserFrames** and simply drag and drop your photo on it.


Script settings
---------------

If you open the script **PoserFrames.jsx** in a text editor, you may want to experiment with changing the following settings:

1. **artsy**: If set to true, the script will simulate a scan with visible scan mask edges. If you like your borders conservative, set this to false.

2. **eccentric**: If you want the image area to be centered in the frame,  set this to false. Initially set to true.

3. **feather_factor_35mm**: How much feathering of the border you like for 35mm. The lower value, the more feathering. Initial value is 1200.

4. **feather_factor_645**: How much feathering of the border you like for 645. The lower value, the more feathering. Initial value is 1800.

5. **feather_factor_67_square**: How much feathering of the border you like for square and 67. The lower value, the more feathering. Initial value is 2400.

6. **feather_factor_45**: How much feathering of the border you like for 4x5. The lower value, the more feathering. Initial value is 5400. 


Examples
--------

![35mm](/examples/35mm.jpg) <br>
*A 3:2 frame.*

![645](/examples/645.jpg) <br>
*A 4:3 frame.*

![4x5](/examples/45.jpg) <br>
*A 4:5 frame.*

![67](/examples/67.jpg) <br>
*A 6:7 frame.*

![Square](/examples/square.jpg) <br>
*A 1:1 frame.*


Troubleshooting and general tips
--------------------------------

- The error message "The document does not contain a selection" means the image dimensions are too small. For technical reasons your image needs to be at least 1500px on it's shortest side for the script to run.

- Consider keeping multiple copies of **PoserFrames.jsx** with different user settings in your scripts folder, for example two named **PoserFrames-artsy.jsx** and **PoserFrames-conservative.jsx**. They'll all show up in Photoshop's scripts menu for easy access. You will have to adjust the action **PoserFrames.atn** when you change the script name and you may want to record separate actions for each script and then  build droplets for them.

- I like to run [the Film Grain](https://thearchetypeprocess.com/collections/adobe-photoshop-actions/products/the-film-grain), from [the Archetype Process](https://thearchetypeprocess.com), on my images after I've run Poser Frames. That way, the borders blend in nicely with the image. If you have Poser Frames in artsy mode, you might have to remove the grain added to the white areas outside of the border. I use the magic wand in Photoshop, and fill the selection with white. I actually have a Photoshop droplet that does this automatically.


Using ExtractPath.jsx
---------------------

Install this companion Photoshop script the same way as PoserFrames. This script takes a path named **Frame** in your active Photoshop document, extracts all the path points and saves them to the desktop in the text file **poserframes-path.txt** in a format used in the PoserFrames frame library.



Credit
------

Thanks to Marc Holstein and Andreas Georgiou for providing me with scanned negatives.


License
-------

Poser Frames uses a [**Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) license**](https://creativecommons.org/licenses/by-sa/4.0/).