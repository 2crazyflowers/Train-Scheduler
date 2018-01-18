Train Scheduler
Project Overview
This project was an assignment in the U of M FullStack Coding Program. I created a train schedule application that incorporates Firebase to host train data including: first train time, frequency of train, train name and destination. A user can submit this information on the application and it is saved to Firebase. The application retrieves and manipulates this information with the help of Moment.js. The website provides up-to-date information about the various trains including: their name, destination, frequency, arrival times and how many minutes remain until they arrive at their station. The application does update the current time and the arrival time and minutes to arrival on its own with out refreshing the screen. I have added delete buttons on the table rows and it will allow the user to delete that row, however, I have not figured out how to have that information get deleted in Firebase so it does not reapper when the time changes and all the information gets pulled again from Firebase.

Issues
My code to get the information to update feels clunky as I basically am calling another function to run again, but could not figure out how to just recall that function in a setInterval. So I created another new function called timeUpdater to call the information again from Firebase, redo the time calculations with Moment.js and then reload the table with the new information. I would like to learn how to call this function with a setInterval - this is repeating and not clean.
The other issue is how to get the delete button to delete the train information in Firebase, so it does not get called again when the time changes.

Getting Started
The site is deployed at https://2crazyflowers.github.io/Train-Scheduler/. You can use this to see the trains that are already set up in Firebase. You can enter new train information below the Current Train Schedule, in the Add New Train Information card. Once you enter the information and submit, it will add the new train to the Current Train Schedule. 

Prerequisites
There are no prerequisite softwares that you need to install to run this application. This application is deployed in GitHub.

Built With
Bootstrap - To do basic css
Firebase - to store train name, train frequency and train start time
Moment.js - This pulls the data from Firebase and manipulates the data to give next train arrival time and minutes away

Author
Sara Bracewell - 2crazyflowers/github. email: bracewell.sara@gmail.com

Acknowledgments/Contributors
Thanks to Amin Kedir for assistance getting the setting up the object so it updated upon page refresh. 


# Train-Scheduler Assigment 

Firebase Assignment - Train Scheduler (Basic - Recommended)

Overview
In this assignment, you'll create a train schedule application that incorporates Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

Setup
We'll leave that up to you -- however you like. Just make sure you're using Firebase to store data, GitHub to backup your project, and GithHub Pages to host your finished site.
Instructions
Make sure that your app suits this basic spec:

When adding trains, administrators should be able to submit the following:
Train Name
Destination
First Train Time -- in military time
Frequency -- in minutes
Code this app to calculate when the next train will arrive; this should be relative to the current time.
Users from many different machines must be able to view same train times.
Styling and theme are completely up to you. Get Creative!
Example Site
train homework

Bonus (Extra Challenges)
Consider updating your "minutes to arrival" and "next train time" text once every minute. This is significantly more challenging; only attempt this if you've completed the actual activity and committed it somewhere on GitHub for safekeeping (and maybe create a second GitHub repo).

Try adding update and remove buttons for each train. Let the user edit the row's elements-- allow them to change a train's Name, Destination and Arrival Time (and then, by relation, minutes to arrival).

As a final challenge, make it so that only users who log into the site with their Google or GitHub accounts can use your site. You'll need to read up on Firebase authentication for this bonus exercise.

Minimum Requirements
Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

Create a README.md
Add a README.md to your repository describing the project. Here are some resources for creating your README.md. Here are some resources to help you along the way:

About READMEs

Mastering Markdown

Add To Your Portfolio
After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

One More Thing
If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

Good Luck!
