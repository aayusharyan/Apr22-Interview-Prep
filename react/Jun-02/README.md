## GeekGallery Project

-> When user loads, it should show some images.
-> We show images in Grid format.
-> Searchbar (with suggestion if possible)
-> Search results.
-> Clicking on any image should open a popup.
-> That popup will contain the Image in HD, Title, Uploaded By, Tags, Date.
-> Clicking outside of the popup will NOT close it.
-> Popup should have a close button.
-> Blur the background when popup is opened.
-> Clicking on the image should give option to like share and download.


# Step to keep API Key Secure
1. npm install env-cmd
2. Create a file .env.staging and .env.production in root folder of your project. (Just outside the src)
3. In the package.json, change the scripts to this.

"scripts": {
    "start": "env-cmd -f .env.staging react-scripts start",
    "build": "env-cmd -f .env.production react-scripts build",
    "test":  "env-cmd -f .env.staging react-scripts test",
    "eject": "react-scripts eject"
  },

4. Add the files to gitignore.
5. No Step 5.

** NOTE: For React, it should start with REACT_APP_...

When you want to use it, process.env.<CONSTANT>






-> When I like, it should should show red heart. (Otherwise hollow/transparent).


http://localhost:3000/image/bBbv8slQi_4
http://localhost:3000/image/XS_EaZL-TEE

http://localhost:3000/search?q=tomato

Project URL -> https://github.com/aayusharyan/geekGallery