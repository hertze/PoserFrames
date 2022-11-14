# P O S E R  F R A M E S

by [Joakim Hertze](https://www.hertze.se)

**Poser Frames** is JavaScript for Photoshop that draws black borders, traced from real negatives scanned with film rebates.

## Installing and running Poser Frames

1. Copy the script **PoserFrames.jsx** to Photoshop’s scripts folder. On Mac it's in **/Applications/Photoshop 2022/Presets/Scripts** and on Windows 10 it's in **C:\Program Files\Adobe\Adobe Photoshop 2022\Presets\Scripts**. You may have to change the permissions of this folder to copy the script there.

3. Start Photoshop and make sure **PoserFrames** shows up in the menu **File/Scripts**. If you already had Photoshop running when you copied the script to the scripts folder, you may have to restart it.

3. Install the Photoshop action by double-clicking on **PoserFrames.atn**, or by loading it in the Actions palette in Photoshop.

4. Run the script in one of three ways: directly from the menu **File/Scripts/PoserFrames**, by running the action **Run PoserFrames** from the Actions Palette, or by making a droplet with the action **Run PoserFrames** and simply drag and drop your photo on it.


## How to use Poser Frames

If you install the script as instructed above, it should work out of the box on images with a minimum short side of 1500 px. The script will automatically apply a border, the style of which depends on whether it’s a 2:3 image, a 4:3 image, a 6:7 image, a 4:5 image or a 1:1 image. However, it is capable if producing quite a few different looks for each aspect ratio, so you may want to open **PoserFrames.jsx** in a text editor (not a word processor) and experiment with the settings.

The settings are written as Javascript variable declarations at the top of the script, like this:

	var fancy = true;

It’s important to keep this format when you make changes. Make sure the `=` or the `;` doesn’t accidentally get deleted when you change value. All variables must be declared, so make sure you don’t accidentally delete any lines containing them when you make changes.

Look through the **settings gallery** below, as well as the **complete directory of script settings**. Use the following decision algorithm as a guide:

1. Decide if you prefer a cropped look, or a fancy look where the outer scanner mask edges are included in the scan. This is set by the variable **fancy**.
2. Decide if you prefer the image area to be centered in the frame (with more or less equal thickness of the border), or a scan towards one of the inner mask edges. This is set with the variable **eccentric**.
3.
	* If you chose a cropped look, the variables **border_width_35mm**, **border_width_645**, **border_width_67**, **border_width_45** and **border_width_square** determines the thickness of the visible border.
	* If you chose a fancy look, with visible scanner mask edges, you now have a choice between scanner mask styles for each aspect ratio. The style for each aspect ratio is set with the variables **mask_variant_35mm**, **mask_variant_645**, **mask_variant_67**, **mask_variant_45** and **mask_variant_square**. For square images, the variable **negative_variant_square** switches between a Rolleiflex look and a Hasselblad look for the negative.
4. Use the variables **feather_factor_35mm**, **feather_factor_645**, **feather_factor_67_square** and **feather_factor_45** to control how fuzzy the mask edges and rebate edges appear for each aspect ratio.

## Complete directory of script settings

1. **fancy**: If set to `true`, the script will simulate a scan with visible scan mask edges. If you like a cropped look, set this to false. Initially set to `true`.
2. **eccentric**: If you want the image area to be centered in the frame, set this to `false`. Initially set to `true`.
3. **mask_variant_35mm**: The style of scanner mask to use with 2:3 images. The script comes with five styles, numbered from 1 to 5. Initially set to `1`.
4. **mask_variant_645**: The style of scanner mask to use with 4:3 images. The script comes with two styles, numbered from 1 to 2. Initially set to `1`.
5. **mask_variant_45**: The style of scanner mask to use with 4:5 images. The script comes with two styles, numbered from 1 to 2. Initially set to `1`.
6. **mask_variant_67**: The style of scanner mask to use with 6:7 images. The script comes with two styles, numbered from 1 to 2. Initially set to `1`.
7. **mask_variant_square**: The style of scanner mask to use with square images. The script comes with two styles, numbered from 1 to 2. Initially set to `1`.
8. **negative_variant_square**: The look of the negative, where 1 has a look drawn from Rolleiflex square formats and 2 from Hasselblad square formats.
9. **border_width_35mm**: Border width for 35mm format with `fancy = false`. Initially set to `2`.
10. **border_width_645**: Border width for 645 format with `fancy = false`. Initially set to `2`.
11. **border_width_67**: Border width for 6x7 format with `fancy = false`. Initially set to `2`.
12. **border_width_45**: Border width for 4x5 format with `fancy = false`. Initially set to `1`.
13. **border_width_square**: Border width for square format with `fancy = false`. Initially set to `1`.
14. **feather_factor_35mm**: How much feathering of the border you like for 35mm. The lower value, the more feathering. Initial value is `1200`.
15. **feather_factor_645**: How much feathering of the border you like for 645. The lower value, the more feathering. Initial value is `1800`.
16. **feather_factor_67_square**: How much feathering of the border you like for square and 67. The lower value, the more feathering. Initial value is `2400`.
17. **feather_factor_45**: How much feathering of the border you like for 4x5. The lower value, the more feathering. Initial value is `5400`. 


## Settings gallery

![35mm](./examples/35mm.jpg)
*A 2:3 frame with `fancy = false`.*

<br>

![35mm](./examples/35mm-fancy-v1.jpg)
*A 2:3 frame with `fancy = true` and `mask_variant_35mm = 1`.*

<br>

![35mm](./examples/35mm-fancy-v2.jpg)
*A 2:3 frame with `fancy = true` and `mask_variant_35mm = 2`.*

<br>

![35mm](./examples/35mm-fancy-v3.jpg)
*A 2:3 frame with `fancy = true` and `mask_variant_35mm = 3`.*

<br>

![35mm](./examples/35mm-fancy-v4.jpg)
*A 2:3 frame with `fancy = true` and `mask_variant_35mm = 4`.*

<br>

![35mm](./examples/35mm-fancy-v5.jpg)
*A 2:3 frame with `fancy = true` and `mask_variant_35mm = 5`.*

<br>

![645](./examples/645.jpg)
*A 4:3 frame with `fancy = false`.*

<br>

![645](./examples/645-fancy-v1.jpg)
*A 4:3 frame with `fancy = true` and `mask_variant_645 = 1`.*

<br>

![645](./examples/645-fancy-v2.jpg)
*A 4:3 frame with `fancy = true` and `mask_variant_645 = 2`.*

<br>

![4x5](./examples/4x5.jpg)
*A 4:5 frame with `fancy = false`.*

<br>

![4x5](./examples/4x5-fancy-v1.jpg)
*A 4:5 frame with `fancy = true` and `mask_variant_45 = 1`.*

<br>

![4x5](./examples/4x5-fancy-v2.jpg)
*A 4:5 frame with `fancy = true` and `mask_variant_45 = 2`.*

<br>

![67](./examples/67.jpg)with fancy = false
*A 6:7 frame with `fancy = false`.*

<br>

![67](./examples/67-fancy-v1.jpg)
*A 6:7 frame with `fancy = true` and `mask_variant_67 = 1`.*

<br>

![67](./examples/67-fancy-v2.jpg)
*A 6:7 frame with `fancy = true` and `mask_variant_645 = 2`.*

<br>

![Square](./examples/square.jpg)
*A 1:1 frame with `fancy = false`.*

<br>

![Square](./examples/square-fancy-v1-neg-v1.jpg)
*A 1:1 frame with `fancy = true`, `mask_variant_square = 1` and `negative_variant_square = 1`.*

<br>

![Square](./examples/square-fancy-v1-neg-v2.jpg)
*A 1:1 frame with `fancy = true`, `mask_variant_square = 1` and `negative_variant_square = 2`.*

<br>

![Square](./examples/square-fancy-v2-neg-v1.jpg)
*A 1:1 frame with `fancy = true`, `mask_variant_square = 2` and `negative_variant_square = 1`.*

<br>

![Square](./examples/square-fancy-v2-neg-v2.jpg)
*A 1:1 frame with `fancy = true`, `mask_variant_square = 2` and `negative_variant_square = 2`.*

## Troubleshooting and general tips

- The error message "The document does not contain a selection" means the image dimensions are too small. For technical reasons your image needs to be at least 1500px on it's shortest side for the script to run.

- Consider keeping multiple copies of **PoserFrames.jsx** with different user settings in your scripts folder, for example two named **PoserFrames-fancy.jsx** and **PoserFrames-cropped.jsx**. They'll all show up in Photoshop's scripts menu for easy access. You will have to adjust the action **PoserFrames.atn** when you change the script name and you may want to record separate actions for each script and then  build droplets for them.

- Comment out (change) these lines:

	`app.activeDocument.save();`<br>
	`app.activeDocument.close();`
		
	to
		
	`\\app.activeDocument.save();`<br>
	`\\app.activeDocument.close();`
	
	to prevent the script from saving and closing the image. This is great for testing different settings.
		
- I like to run [the Film Grain](https://thearchetypeprocess.com/collections/adobe-photoshop-actions/products/the-film-grain), from [the Archetype Process](https://thearchetypeprocess.com), on my images after I've run Poser Frames. That way, the borders blend in nicely with the image. If you have Poser Frames in fancy mode, you might have to remove the grain added to the white areas outside of the border. I use the magic wand in Photoshop, and fill the selection with white. I actually have a Photoshop droplet that does this automatically.


## Using ExtractPath.jsx

Install this companion Photoshop script the same way as PoserFrames. This script takes a path named **Frame** in your active Photoshop document, extracts all the path points and saves them to the desktop in the text file **poserframes-path.txt** in a format used in the PoserFrames frame library. If you feel adventurous, you can use this to add your own borders to Poser Frames.


## Credit

Thanks to Marc Holstein and Andreas Georgiou for providing me with scanned negatives.


## License

Poser Frames uses a [**Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) license**](https://creativecommons.org/licenses/by-sa/4.0/).