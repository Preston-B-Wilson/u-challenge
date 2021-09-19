# Order Summary Challenge

![alt text](https://i.gyazo.com/9d5e1ec90c578003384c8991cddec893.jpg)
![alt text](https://i.gyazo.com/f115d81e14da8f57299ae7855197d19b.jpg)

## Journey

![alt text](https://i.gyazo.com/1dc486ddf17aef8bbbb0b34e9fa7f29b.png)

As you can see from the graph above, repo and react prep are not an issue.  Neither is HTML structure layout or styling to meet the refrence (granted this is one of the more simple layouts you can have).  I could use some improvement on my efficiency in responsive design.  

In this project, I learned that simple CSS Transition modifiers everywhere make the design "look'a real nice".  I used Adobe XD to read my sketch file and it was a lot more convenient then measuring pixels from a photo.  On future projects I will start to break my main SASS into multiple files to avoid clutter and provide better readability, especially for all my keyframe animations.  I also learned when making the mobile compatibiliy, not making a design first leads to ugly results. I created it as I coded and its functional, though I am not at all pleased.  In the future I will always make a design in XD first if one is not provided so I can be sure I end up with something I am happy with.

Now some of the issues I had in retrospect.  I reckognized the font used in the title to be Bodoni Pro Bold, though it was 29$ so I opted to use regular Bodoni instead.  The mobile version does not look like it was made for mobile, it looks like a desktop version compressed down to fit in a mobile screen (because thats what it is). As I stated previously, I know I can fix that in future projects by simply having a design drawn out first.  The animation in the reference is really cool though I could not find a way to make it in a reasonable amount of time.  I reckognize that the button itself bounces then warps into a 8 point geometry that grows while forming into a 4 point rectangle in one fluid animation. After research, I learned that there is no way to warp a div which was my first thought. My second option was to make a custom svg in css and animate all the points to get the desired result.  This would be extremely time consuming and I know there has to be a better way. I attempted to make it in the Rive.app editor but quickly abandon that idea when the editor was not capable of adding keyframes to warp a polygon element.  In the end I chose to match the transistion in SASS with the button bouncing and a div growing from the same direction.  In the future I would try to use the Rive editor again as I believe it could reproduce the desired result if I used custom assets to animate instead of a deafualt polygon element.  I orginally tried to toggle the state of the popup window in pure SASS using a input toggle and labels.  However I ran into an issue I could not solve when trying to render the second label inside the popup box to close it.  I then took a "react" approach and used buttons to update the state. Whenever the popup is closed there is a flicker.  I believe this is caused by the state being updated but could not find a remedy and opted to keep it in, as it was the closest attempt and could probably be fixed with some more examination. 

## To View

GitPage demo https://yosoypan.github.io/U-Challenge/ <br />
Or <br />
Follow the installation and usage below.

## Installation

```bash
git clone https://github.com/yosoypan/order-summary-challenge.git
```

## Usage

Pass these commands in the u-challenge directory.

v Installs dependencies inside client directory (react).
```bash
npm run install
```

then 

Starts react localhost for demo.
```bash
npm run start
```
