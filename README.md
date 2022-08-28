P O S E R  F R A M E S
======================

by [Joakim Hertze](https://www.hertze.se)

**Poser Frames** is JavaScript for Photoshop that adds fake negative borders, traced from real negatives. It works with images in 3:2, 4:3, 6:7, 4:5 and 1:1 format, with a shortest side of 3600 px, 4800 px or 6000 px. Please note: at this time you need to resize your photos to one of these dimensions *prior* to running this script on them.


Installing the script and creating an action for PoserFrames
------------------------------------------------------------

1. Copy the script **PoserFrames.jsx** to Photoshop’s scripts folder. On Mac it's in **/Applications/Photoshop 2022/Presets/Scripts**. You may have to change the permissions of this folder to copy the script there.

2. Install the Photoshop action by double-clicking on **PoserFrames.atn**, or by loading it in the Actions palette in Photoshop.

3. Make sure **PoserFrames** shows up in the menu **File/Scripts**.

4. Run the action **Run PoserFrames** on your photo, or make a droplet with this action.


Script settings
---------------

If you open the script **PoserFrames.jsx** in a text editor, you may want to experiment with changing the following settings:

1. **borderThickness_35mm**: Border width in % for 35mm, initially set to 1.

2. **border_thickness_645**: Border width in % for 645, initially set to 2.

3. **border_thickness_square**: Border width in % for Square; initially set to 1.

4. **borderThickness_67**: Border width in % for 67, initially set to 2.

5. **border_thickness_45**: Border width in % for 4x5; initially set to 1.5.

6. **offset_factor**: How much offset is allowed for 35mm and 67, where 0 is none, 0.5 is medium and 1 is maximum.

7. **edge_odds**: The odds of getting a 35mm or 67 frame scanned right to the edge. 1 is certain, 10 is 10% probable.

8. **feather_factor_35mm**: How much feathering of the border you like for 35mm. The lower value, the more feathering. Initial value is 1200.

9. **feather_factor_645**: How much feathering of the border you like for 645. The lower value, the more feathering. Initial value is 2400.

10. **feather_factor_67_square**: How much feathering of the border you like for square and 67. The lower value, the more feathering. Initial value is 3600.

11. **feather_factor_45**: How much feathering of the border you like for 4x5. The lower value, the more feathering. Initial value is 5400. 


Examples
--------

![35mm](/examples/35mm.jpg)

*A 3:2 frame.*

![645](/examples/645.jpg)

*A 4:3 frame.*

![4x5](/examples/4x5.jpg)

*A 4:5 frame.*

![67](/examples/67.jpg)

*A 6:7 frame.*

![Square](/examples/square.jpg)

*A 1:1 frame.*


Using ExtractPath.jsx
---------------------

Install this companion Photoshop script the same way as PoserFrames. This script takes a path named **Frame** in your active Photoshop document, extracts all the path points and saves them to the desktop in the text file **poserframes-path.txt** in a format used in PoserFrames frame library.



Credit
------

Thanks to Marc Holstein and Andreas Georgiou for providing me with scanned negatives.


License
-------

Poser Frames uses a [**Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) license**](https://creativecommons.org/licenses/by-sa/4.0/).