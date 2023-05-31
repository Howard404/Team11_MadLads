
# Team11 - MadLads

Our project is a web-based MadLibs game, aiming to be both educational and fun. The target audience is kids and teens from around 6-15, and the goal of the game is to help teach them about the different parts of speech through a fun and lighthearted game they can share with friends and family.

Site Link: https://madlads.netlify.app/

## User Manual/How-To

- What is it and what does it do?<br/>
Most everyone loves MadLibs. They're quirky, they're fun, and they're perfect for a good laugh with friends. But they’re also useful for kids or ESL learners to get more familiar with what certain words mean or do and how they flow (or don’t) within a sentence and the wider paragraph. Our web-based MadLibs game is designed to provide users an opportunity to learn and practice parts of speech while also having fun making silly stories.

- How to install and run?<br/>
The app is purely web-based so no installation is needed. Simply click on the URL up above and it’ll take you straight to the sign-in page to get you started. Alternatively, if you really wanted to, you could download the files locally and open up `index.html` in your browser of choice and get started that way.

- How to use?<br/>
Once you've entered the URL, clicked the link or opened up `index.html` in your browser of choice, you'll find yourself on the login page. Here, if you’re visiting the page for the first time, you'll need to enter a username, email and password and hit “register”. There will be a pop-up message that tells you your user credentials were successfully created. Afterwards you can hit “login” and move on to the home page. If you’ve visited the site before, you’ll just need to enter your old username, email and password and hit “login”.<br/><br/>
From there once you’ve reached the home page, you have a few different options:
    - You can turn off the music using the button in the top right corner. (We are considering adding a volume adjustment slider as well, but as of right now that is not implemented.)
    - You can choose the “Randomizer” and get a series of flashcard-style tips on what the different parts of speech are and what they do.
    - Or you can select one of the story cards and start to play around with them.
    - (You can also try clicking around the home page for a fun little easter egg!)<br/>
    
  When you've selected one of the stories to play through, you’ll be presented with a little flip book of prompts and text entry fields. Simply page through and enter a word corresponding to the prompt given. At the end there will be a submit button that will either take you to the next screen and show you your completed story, or it will pop-up a message box letting you know you missed one of the inputs (all inputs must be complete to finish the story). There is also a button in the top left corner that will allow you to return to the home page.<br/><br/>
  And lastly, once you’re on that end page where you’re presented with the full story, complete with all the words you input in the last step, there's an array of buttons that will again provide some different options:
    - "Save as PDF" will download a PDF copy of your completed story (with all the words you entered).
    - "Save blank copy" will download a PDF copy of the *uncompleted* story (without the words you entered, and with the prompts listed).
    - "Restart" will allow you to replay the same story again.
    - The Facebook and Twitter buttons will open a pop-up window and allow you to post on the corresponding platform with a link to the site.<br/>
    _Note: this doesn't link directly to your completed version of the story, only the starting page for the story. So if you'd like to share your completed version it's recommended that you copy the text and put that in the message body of your post._


## Development Guide/Documentation

- How to obtain the source code<br/>
All the HTML/CSS/JS source code for this project is contained here in this repository. External scripts (such as for the social media buttons and print-to-PDF buttons) are linked within the HTML so they do not need to be installed/downloaded/activated separately. And the two external services we used are Firebase (for the database, currently just handles login/register of users) and Netlify (for site deployment, currently done manually and not configured with the repo for auto-updates).

- Layout of directory structure<br/>
Within the main body of the repo, there is all the HTML files, the README and the gitignore file, as well as 3 folders. The 3 folders `assets`, `css`, and `js`, contain all the fonts/images, stylesheets and scripts, respectively. The `assets` folder is further broken down into 3 subfolders: `fonts`, `icons`, and `img`, which contain (fairly self-explanatorily) the fonts, icons and images used within the site. We currently do not have any tests for our code, and the data files are all stored within the external Firebase service we’re using for our database.

- How to build the software<br/>
Because the project is web-based, there’s no compiling or setup really necessary. It can be accessed/ran by either going to the above URL or by opening the `index.html` file locally.

- How to test the software<br/>
As previously mentioned, we do not currently have any test files/cases for our project. Given the nature of it being web-based, not a compiled language (like Java or C#), there’s less need for it. Furthermore, I’m not really sure if it’s possible to write a test case for HTML/CSS code. And while I think there is a way to test JS code, I don’t know that it’s really necessary given the functions that our JS code serves for the website.

- How to add new tests<br/>
Again, we do not currently have any test files/cases for our project. Therefore, there is no relevant testing layout/style/service/whatever. However, as far as conventions, all our HTML/CSS/JS files are named in camel-case (lowercase for the first word followed by uppercase for the following words, e.g. “printShare”). And as mentioned above, the files are somewhat sorted by type/purpose into appropriate files so it would be sensible to likewise sort any new files along those same guidelines.

- How to build a release of the software<br/>
There are no version numbers to change or checks to run before building a new release of the software. However, as of this current moment, the Netlify deployment is not connected to the repo (meaning it won’t auto-update whenever the repo changes) so it must be manually updated whenever changes are made.
