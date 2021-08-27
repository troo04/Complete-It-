# Complete It
#### Video Demo: https://youtu.be/eFNhZjuQwTI
### Description:
"Complete It" is a website to-do list. On Complete It the user can create sticky notes that contain tasks they want to completed throughout the day. The sticky notes are created in the "Pending" section and when the user is finished with the task they can "X" out the task sending the note to "Completed". The user can keep all the tasks they've completed to use as motivation for newer tasks or they can clear out their completed tasks by clicking "X" in the "Completed" section. Users can also move completed tasks back to pending by clicking the upload button at the top left of the sticky note.

### Files:
Our index.html file highlights the structure of our webpage. The structure includes the input box, the add sticky note button, tab bar, and more. Our styles.css file is used to style the website. In our styles.css we've changed the appearance of each element defined in our index.html file. Our script.js file handles all of our background operations, such as retrieving today's date, creating sticky notes, remembering the sticky notes that the user created, so that the website can load those stick notes if a user reloads the page. This way the user does not lose their sticky notes. The image files in our project are used for our sticky notes, close button, upload button, and background.

### Design Choice Debate:
A design choice we debated was whether to use sticky note images or just plain text when we add a note. In the end we decided to go with the sticky note images because it was more visually appealing to the user, and unique.

### Why we choose Complete-It
The reason behind why we decided to create a to-do list, was because while we were brainstorming ideas, we realized that this to-do list would be an appropriate challenge for us.

### Challenges we faced while making this project:
Some of the challenges we faced were problems with storing the sticky note data, so that in the future users don't lose access to their sticky notes, creating the sticky notes dynamically, and more. We initially debated on the topic of how to go about storing our sticky note data, whether it be using a SQL database, or creating a simple text file. We came to a conclusion on storing our data on the user's session storage. We needed to decide whether we were going to create the sticky notes before hand and somehow use display block and none to add sticky notes or create new sticky note elements using javascript, the javascript idea was better and way more efficient so that's what we went with. Another problem we faced was the color palette. Although our project may be quite interesting, without the right color scheme, it would not attract many people. Thus, it took us quite a bit of time to get the correct color scheme.

### What we would have done differently:
Instead of making a plain html,css, and javascript project we would have created this project using flask, python, and a SQL database.
