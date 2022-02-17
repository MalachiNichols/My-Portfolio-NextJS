---
title: 'Openshot Tutorial'
date: 'October 2021'
excerpt: 'This is a tutorial for a free video editor called OpenShot. I
            created the tutorial in Markdown. My goal with the tutorial was to
            explain the basic functionality and capabilities of the software. I
            focused on clear textual explanation with supplementary images that
            would help to clarify some of the visual clutter within the
            software.'
cover_image: '/images/posts/openshot.jpg'
---

# OpenShot 

## Contents

 - [Install](#install)
 - [Interface](#interface)
    - [Preview Files](#project-files)
    - [Timeline](#timeline)
    - [Video Preview](#video-preview)
 - [Tools](#tools)
    - [Transitions](#transitions)
    - [Effects](#effects)
    - [Emojis](#emojis)
    - [Razor Tool](#razor-tool)
    - [Markers](#markers)
 - [Miscellaneous](#miscellaneous)
    - [Hotkeys](#hotkeys)
    - [Exporting](#exporting)

## <a name="install"></a>Install 

To install OpenShot navigate to https://www.openshot.org/, and click the download button.

<img className='mdimage' src="https://i.imgur.com/VTIkA4H.jpg" class="openImages">

Next, you can continue with the default Windows 64-bit Installer. If you are not on a 64-bit compatible Windows system there are options for other operating systems below the default download.

## <a name='interface'></a>Interface 

### <a name='project-files'></a>Project Files 

The Project Files section acts as the main storage for all the files in your project. A red box outlines this section of the main interface below.

<!-- <img  src='https://i.imgur.com/lv6yS65.png'  width=750px> -->
<img  src='https://i.imgur.com/lv6yS65.png'  class="openImages">
<!-- <img  src='https://i.imgur.com/lv6yS65.png' class="openImage"> -->

You can use the Project Files section to upload all of the files to be used in the project. Do this by dragging and dropping files directly into the box or by pressing the large green plus at the top of the application. Alternatively, you can right click inside the box and select import files (``` Ctrl-f```) to browse and select files graphically. 

Use the tab at the top of this section to filter files in the project by video, audio, image, or all.

<!-- <img src='https://i.imgur.com/l07I2rh.png' width=750px> -->
<img class='mdimage' src='https://i.imgur.com/l07I2rh.png' class="openImages">

Other functionalities in the Project Files section are covered in the [Tools]() section below.

### <a name='timeline'></a>Timeline 

You can edit all of the files in your project in the Timeline. A red box outlines the section below.

<!-- <img src='https://i.imgur.com/o9Volem.png'  width=750px> -->
<img src='https://i.imgur.com/o9Volem.png'  class="openImages">

You can populate the Timeline by dragging files from the Project Files section and dropping them onto a track in the Timeline. By default, OpenShot will start every project with 5 tracks. You can add more by clicking the green plus under the word Timeline in the top left of the section. You can adjust your view on the tracks by operating the three sliders highlighted in the image below. Note that Tracks work as hierarchical layers. That means that a track with a higher numerical value will overlay tracks with lower numerical values if the content plays at the same time.

<!-- <img  src='https://i.imgur.com/P2FaoJM.png' width=750px> -->
<img  src='https://i.imgur.com/P2FaoJM.png' class="openImages">

The slider at the bottom moves the view horizontally, and the slider to the right moves the view vertically. The slider at the top has a bit more functionality. The transparent blue portion of this slider moves the view horizontally like the slider at the bottom. Moving the blue dots on this slider changes the zoom of the timeline. This allows you to make precise edits or analyze the entire project at once. 

Right clicking a track gives you a few options as well. 

<img  src='https://i.imgur.com/GUDaasT.png' class="openImages">

Add Track Above adds a track above the track that was right clicked on. Add Track Below adds a track below the track that was right clicked on. Rename Track allows you to name a track whatever you want. Lock Track prevents any further changes to the track that was right clicked on. Remove Track deletes the track from the Timeline.

Other functionalities of the Timeline section are covered in the [Tools]() section below.

### <a name='video-preview'></a>Video Preview 

This section allows you to preview the contents that are on your timeline. A red box outlines the section below.

<!-- <img  src='https://i.imgur.com/u9m7WDY.png'  width=750px> -->
<img  src='https://i.imgur.com/u9m7WDY.png'  class="openImages">

The Video Preview section shows the frame that the Timeline ruler is currently located on. You can see the Timeline ruler in the image below.

<img  src='https://i.imgur.com/1I1VBIU.png' class="openImages">

To play the contents of the Timeline continuously in the Video Player, move the ruler to where you would like to start and press spacebar or the green play button on the Video Preview. You can also move the Video Preview frame by frame by pressing the left and right arrow keys to move to the left and right frame respectively.

## <a name='tools'></a>Tools

 ### <a name='transitions'></a>Transitions 

You can add transitional effects to files on your Timeline by dragging and dropping them from the Project files section. Start by choosing two files you want to transition between and place them next to each other or overlapping on the same Timeline track. Then navigate to the Transitions tab at the bottom of the Project Files section.  

<img  src='https://i.imgur.com/7fGvcIx.png' class="openImages">

Here , you can browse the different transition effects offered by OpenShot. Once you choose a transition, drag and drop it onto the files on the Timeline you want to affect. You can adjust the length of the transition by grabbing its edges and moving them to fit your purposes. Note that when overlapping two files in the Timeline, a fade transition will automatically be applied. You can remove it by clicking on the fade transition and pressing the backspace key.

### <a name='effects'></a>Effects 

You can add and adjust visual effects to your project by dragging and dropping effects onto your files in the Timeline. To browse and select effects, navigate to the Effects tab on the Project Files section. 

<img  src='https://i.imgur.com/74Cy2Th.png' class="openImages">

To apply an effect to a file, drag and drop the effect from the Project Files section onto your file in the Timeline. This will add an indicator to your file that you can right click to adjust. 

<img  src='https://i.imgur.com/XgjGUoY.png' class="openImages">

Selecting Properties from the right click menu will open a new Properties section on the left of the OpenShot window. 

<!-- <img  src='https://i.imgur.com/mfmXwXr.png'  width=750px> -->
<img  src='https://i.imgur.com/mfmXwXr.png'  class="openImages">

From this window you can adjust all of the properties of the particular effect you are working with. If you have multiple effects on one file, you can access different effects' properties by using the Selection dropdown at the top of the Properties section outlined above.

### <a name='emojis'></a>Emojis

You can add emoji image files to your project by selecting the Emojis tab in the Project Files section and dragging and dropping them onto your Timeline. 

<img  src='https://i.imgur.com/LGHKA3Z.png' class="openImages">

Once an emoji is added to your Timeline it can be manipulated like any other file on the Timeline. 

### <a name='razor-tool'></a>Razor Tool

The Razor Tool is used to cut files into parts that can be edited or removed separately. It is found in the Timeline section. 

<img  src='https://i.imgur.com/JFSWyAV.png' class="openImages">

When the Razor Tool is selected you can hover over a file in your Timeline and left click to split the file at that location.

<!-- <img  src='https://i.imgur.com/7scEcHu.png' width=750px> -->
<img  src='https://i.imgur.com/7scEcHu.png' class="openImages">

In the image above you can see the Razor Tool cursor outlined in red on the left and the split of the file outlined in red on the right.

You can also split file by moving the Timeline ruler to the location on the file you would like to split and right clicking the file. This will bring up a menu that has a Slice option.

<!-- <img src='https://i.imgur.com/JZjfiJg.png' width=750px> -->
<img src='https://i.imgur.com/JZjfiJg.png' class="openImages">

Hovering over Slice will bring up a new menu. The options in this menu detail what will be done to the file after is split. Keep Both Sides will act the same as the Razor Tool. Keep Left Side will delete the right side of the file after splitting, and Keep Right Side will delete the left side of the file after splitting. 

### <a name='markers'></a>Markers

The Marker tool is used to specify specific points in a file that have defined properties. They are represented on a file by a small green vertical dash at the bottom of the file.

<img  src='https://i.imgur.com/UJRzsSR.png' class="openImages">

You can add a marker by setting the Timeline ruler to the location you want and clicking the green Add Marker button outlined in red above. You can also add markers by inserting keyframes in the Properties section of a file. You can switch between markers quickly by clicking the orange Previous Keypoint and Next Keypoint buttons outlined in red above. 

## <a name='miscellaneous'></a>Miscellaneous

### <a name='hotkeys'></a>Hotkeys


| Function | Hotkey | Function | Hotkey | Function | Hotkey |
| :---      | :---: | :---      | :---:      | :---      | :---:      |
|Add Marker| ```Ctrl+M```| Fast Forward | ```L``` | Paste | ```Ctrl+V``` |
|Add Track| ```Ctrl+Shift+T```| Fullscreen | ```F11``` | Play/Pause | ```Spacebar``` |
|Add To Timeline| ```Ctrl+W```| Import Files | ```Ctrl+F``` | Previous Frame | ```Left``` |
|Center on Playhead|```Ctrl+Up``` | Insert Keyframe | ```Ctrl+Shift+E``` | Previous Marker | ```Ctrl+Left``` |
|Choose Profile|```Ctrl+P```| Jump to End | ```Ctrl+End``` | Quit | ```Ctrl+Q``` |
|Copy|```Ctrl+C```| Jump to start | ```Ctrl+Home``` | Redo | ```Ctrl+Y``` |
|Delete Item|```Delete```| New Project | ```Ctrl+N``` | Rewind | ```J``` |
|Delete Item (Alternative)|```Backspace```| Next Frame | ```Right``` | Save Project | ```Ctrl+S``` |
|Details View|```Ctrl+D```| Next Marker | ```Ctrl+Right``` | Toggle Razor | ```R``` |
|Export Video|```Ctrl+E```| Open Project | ```Ctrl+O``` | Undo | ```Ctrl+Z``` |

### <a name='exporting'></a>Exporting

To export your completed project, click the red circle at the top of the application.

<!-- <img  src='https://i.imgur.com/mFilCE8.png'  width=750px> -->
<img  src='https://i.imgur.com/mFilCE8.png'  class="openImages">

This will open the Export Video window. From here you can select your file name and folder path. You can also choose the profile of the project. This will determine what the project is intended for (i.e. DVD, Blu-Ray, Web). Next you can select the target (filetype), the video profile (resolution/framerate), and the quality. When you are done click Export Video at the bottom of the window.
