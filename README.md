P O S E R  F R A M E S
======================

Note: At the moment, the script only work on 2:3 images saved to a shortest side of 3600px and 4:3 images with a shortest side of 6000px.



Installing the script and creating an action for PoserFrames
------------------------------------------------------------

1. Copy the script **PoserFrames.jsx** to Photoshop’s scripts folder. On Mac its in **/Applications/Photoshop 2022/Presets/Scripts**. You may have to change the permissions of this folder to copy the script there.

2. Install the Photoshop actions by double-clicking on **PoserFrames.atn**, or by loading them in the Actions palette in Photoshop.

3. Make sure ’PoserFrames’ shows up in the menu **File/Scripts**

4. Run the action **Run PoserFrames** on your photo, or make a droplet with this action.


Script settings
---------------

If you open the script **PoserFrames.jsx** in a text editor, you may want to experiment with changing the following settings:

1. **borderThickness**: Border width in %, initially set to 4.

2. **offset_factor**: How much offset is allowed, where 1 is maximum. Initial value is 1.

3. **feather_factor**: How much feathering of the border you like. The lower value, the more feathering. Initial value is 1200.




Using ExtractPath.jsx
---------------------

Install this script the same way as PoserFrames. This script takes a path named **Frame** in your active document, extracts all the path points and saves them to the desktop in the text file **poserframes-path.txt** in a format used in PoserFrames frame library.