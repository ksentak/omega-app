# User Authentication Using React/Redux

This template is for anyone who is trying to incorporate user authentication into a full-stack react application. The template is set up so that it can easily be deployed to Heroku.

---

### Deployed Site:

https://react-user-auth.herokuapp.com/

---

### How it Works

The user is initially brought to a landing page where they have the options to either register for a new account or log in to an existing account.

**Creating a New Account**
When the user clicks the register button, they will be brought to a page where they must complete a form by entering a name, email address, password, and confirming their password. Passwords must be at least 6 characters in length and must match in order to sucessfully create a new account.

**Logging In**
After successfully registering for an account, the user will be automatically re-directed to the log in page where they are asked to enter their email address and password. Logging in will bring the user to a simple dashboard where the user's name is displayed.

**Logging Out**
To log out of the application, a user must simply click on the log out button that appears on the dashboard.

---

### To Run Locally

1. Install node packages in both the root directory as well as the client folder.
2. Type `npm run dev` into your command line.

---

### For Heroku Deployment

**This can be done several different ways but this is my preferred way**

1. Log in to your account on heroku.com
2. Click on `New` and then `Create new app` on the top right of the dashboard
3. Name you application and click `Create app`
4. Configure mLab
   - In the _Installed add-ons_ section in the **Overview** tab, click on configure add-ons
   - Search for mLab
   - Select Sandbox - Free
   - Click `Provision`
   - PLEASE NOTE THAT HEROKU IS SOON ENDING SUPPORT FOR mLAB. You can seamlessly convert your mLAB database to a MongoDB Atlas database by following the instructions here (https://docs.mlab.com/how-to-migrate-sandbox-heroku-addons-to-atlas/)
5. Connect your newly created Heroku application to your GitHub repo in the **Deploy** tab (https://devcenter.heroku.com/articles/github-integration)
6. Once your GitHub repo is connected click `Deploy Branch`
